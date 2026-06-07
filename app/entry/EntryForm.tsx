'use client'

import { useState } from 'react'

type FormData = {
  name: string
  age: string
  phone: string
  email: string
  experience: string
  contactMethod: string
  message: string
}

const initialData: FormData = {
  name: '',
  age: '',
  phone: '',
  email: '',
  experience: '',
  contactMethod: '',
  message: '',
}

export default function EntryForm() {
  const [form, setForm] = useState<FormData>(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('send failed')
      setSubmitted(true)
      setForm(initialData)
    } catch {
      alert('送信に失敗しました。お電話（046-205-4558）またはLINEよりご連絡ください。')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16 bg-gray-50 border border-gray-200">
        <div className="w-12 h-12 border-2 border-navy flex items-center justify-center mx-auto mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-black text-navy mb-3 tracking-tight">送信が完了しました</h2>
        <p className="text-sm text-gray-600 mb-6">
          お送りいただきありがとうございます。
          <br />
          担当者よりご連絡いたします（営業時間内：9:00〜18:00）。
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm text-gray-400 hover:text-navy underline transition-colors"
        >
          もう一件送信する
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Name */}
      <div>
        <label className="form-label" htmlFor="name">
          お名前
          <span className="form-required">必須</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="例：山田 太郎"
          className="form-input"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      {/* Age */}
      <div>
        <label className="form-label" htmlFor="age">
          年齢
          <span className="form-required">必須</span>
        </label>
        <input
          id="age"
          name="age"
          type="text"
          required
          inputMode="numeric"
          placeholder="例：23"
          className="form-input"
          style={{ maxWidth: '160px' }}
          value={form.age}
          onChange={handleChange}
        />
      </div>

      {/* Phone */}
      <div>
        <label className="form-label" htmlFor="phone">
          電話番号
          <span className="form-required">必須</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="例：090-1234-5678"
          className="form-input"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      {/* Email */}
      <div>
        <label className="form-label" htmlFor="email">
          メールアドレス
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="例：yamada@example.com"
          className="form-input"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      {/* Experience */}
      <div>
        <label className="form-label" htmlFor="experience">
          設備工事の経験
          <span className="form-required">必須</span>
        </label>
        <select
          id="experience"
          name="experience"
          required
          className="form-select"
          value={form.experience}
          onChange={handleChange}
        >
          <option value="" disabled>選択してください</option>
          <option value="none">未経験（経験なし）</option>
          <option value="some">少し経験あり（1年未満）</option>
          <option value="experienced">経験あり（1年以上）</option>
        </select>
      </div>

      {/* Preferred contact method */}
      <div>
        <label className="form-label" htmlFor="contactMethod">
          希望連絡方法
          <span className="form-required">必須</span>
        </label>
        <select
          id="contactMethod"
          name="contactMethod"
          required
          className="form-select"
          value={form.contactMethod}
          onChange={handleChange}
        >
          <option value="" disabled>選択してください</option>
          <option value="phone">電話</option>
          <option value="email">メール</option>
          <option value="line">LINE</option>
          <option value="any">どちらでも可</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="form-label" htmlFor="message">
          質問・相談内容
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="例：未経験ですが、応募は可能でしょうか。見学だけでも可能ですか。など、気になることをお気軽にどうぞ。"
          className="form-input resize-y"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      {/* Privacy */}
      <div className="text-xs text-gray-400 leading-relaxed bg-gray-50 px-4 py-4">
        ご入力いただいた個人情報は、採用選考および採用に関するご連絡のみに使用し、
        第三者への提供は行いません。
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary py-4 text-sm tracking-widest disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? '送信中...' : '応募する'}
      </button>

      <p className="text-xs text-center text-gray-400">
        お電話での応募・相談も受け付けています。
        <br />
        <a href="tel:046-205-4558" className="text-navy font-bold hover:underline">
          046-205-4558
        </a>
        （9:00〜18:00）
      </p>
    </form>
  )
}
