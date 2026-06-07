import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const TO = 'homiya@houmiyasetubi.com'

const EXP_LABELS: Record<string, string> = {
  none: '未経験（経験なし）',
  some: '少し経験あり（1年未満）',
  experienced: '経験あり（1年以上）',
}
const CONTACT_LABELS: Record<string, string> = {
  phone: '電話',
  email: 'メール',
  line: 'LINE',
  any: 'どちらでも可',
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, age, phone, email, experience, contactMethod, message } = body as Record<string, string>

    if (!name || !age || !phone || !experience || !contactMethod) {
      return NextResponse.json({ ok: false, error: '必須項目が不足しています' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST   ?? 'smtp.gmail.com',
      port:   Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const expLabel     = EXP_LABELS[experience]     ?? experience
    const contactLabel = CONTACT_LABELS[contactMethod] ?? contactMethod

    const textBody = [
      '宝宮設備 採用サイト — 応募フォームより送信されました',
      '',
      `お名前　　　: ${name}`,
      `年齢　　　　: ${age} 歳`,
      `電話番号　　: ${phone}`,
      `メール　　　: ${email || '未入力'}`,
      `経験　　　　: ${expLabel}`,
      `希望連絡方法: ${contactLabel}`,
      '',
      `【メッセージ】`,
      message || '（なし）',
    ].join('\n')

    const htmlBody = `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
  <h2 style="color:#0f172a;border-bottom:2px solid #f97316;padding-bottom:8px">
    宝宮設備 採用サイト — 応募フォーム
  </h2>
  <table style="width:100%;border-collapse:collapse;margin-top:16px">
    ${[
      ['お名前', name],
      ['年齢', `${age} 歳`],
      ['電話番号', phone],
      ['メール', email || '未入力'],
      ['経験', expLabel],
      ['希望連絡方法', contactLabel],
    ].map(([label, value]) => `
    <tr>
      <th style="text-align:left;padding:10px 12px;background:#f8fafc;border:1px solid #e2e8f0;width:35%;font-weight:600;color:#475569">${label}</th>
      <td style="padding:10px 12px;border:1px solid #e2e8f0;color:#1e293b">${value}</td>
    </tr>`).join('')}
  </table>
  ${message ? `
  <div style="margin-top:16px;padding:16px;background:#f8fafc;border:1px solid #e2e8f0">
    <p style="margin:0 0 8px;font-weight:600;color:#475569">メッセージ</p>
    <p style="margin:0;color:#1e293b;white-space:pre-wrap">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
  </div>` : ''}
  <p style="margin-top:24px;font-size:12px;color:#94a3b8">
    このメールは宝宮設備採用サイトの応募フォームから自動送信されました。
  </p>
</div>`

    await transporter.sendMail({
      from:    process.env.SMTP_FROM ?? `"宝宮設備 採用サイト" <${process.env.SMTP_USER}>`,
      to:      TO,
      replyTo: email || undefined,
      subject: `【応募】${name} 様からのお問い合わせ`,
      text:    textBody,
      html:    htmlBody,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact API]', err)
    return NextResponse.json({ ok: false, error: 'メール送信に失敗しました' }, { status: 500 })
  }
}
