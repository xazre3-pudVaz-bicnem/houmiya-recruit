import { NextRequest, NextResponse } from 'next/server'

// 宛先は環境変数 CONTACT_TO（カンマ区切りで複数可）で上書きできる
const DEFAULT_TO = 'homiya@houmiyasetubi.com'
// 差出人は Resend で認証済みのドメイン（houmiya-recruit.com）のアドレスにする
const DEFAULT_FROM = '宝宮設備 採用サイト <noreply@houmiya-recruit.com>'
const RESEND_ENDPOINT = 'https://api.resend.com/emails'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

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

    // 空文字で設定されている場合も未設定として扱う
    const apiKey = process.env.RESEND_API_KEY?.trim()
    if (!apiKey) {
      console.error('[contact API] RESEND_API_KEY が未設定のためメールを送信できません')
      return NextResponse.json({ ok: false, error: 'メール送信に失敗しました' }, { status: 500 })
    }
    const from = process.env.MAIL_FROM?.trim() || DEFAULT_FROM
    const to = (process.env.CONTACT_TO ?? '')
      .split(',')
      .map((address) => address.trim())
      .filter(Boolean)
    if (to.length === 0) to.push(DEFAULT_TO)

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
      <td style="padding:10px 12px;border:1px solid #e2e8f0;color:#1e293b">${escapeHtml(value)}</td>
    </tr>`).join('')}
  </table>
  ${message ? `
  <div style="margin-top:16px;padding:16px;background:#f8fafc;border:1px solid #e2e8f0">
    <p style="margin:0 0 8px;font-weight:600;color:#475569">メッセージ</p>
    <p style="margin:0;color:#1e293b;white-space:pre-wrap">${escapeHtml(message)}</p>
  </div>` : ''}
  <p style="margin-top:24px;font-size:12px;color:#94a3b8">
    このメールは宝宮設備採用サイトの応募フォームから自動送信されました。
  </p>
</div>`

    const replyTo = email && EMAIL_PATTERN.test(email.trim()) ? email.trim() : undefined

    const res = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: replyTo,
        subject:  `【応募】${name} 様からのお問い合わせ`,
        text:     textBody,
        html:     htmlBody,
      }),
      cache: 'no-store',
    })

    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      console.error(`[contact API] Resend がエラーを返しました (${res.status})`, detail)
      return NextResponse.json({ ok: false, error: 'メール送信に失敗しました' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact API]', err)
    return NextResponse.json({ ok: false, error: 'メール送信に失敗しました' }, { status: 500 })
  }
}
