import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import EntryForm from './EntryForm'

export const metadata: Metadata = {
  title: '応募フォーム｜株式会社宝宮設備 採用サイト',
  description:
    '宝宮設備への応募はこちら。エアコン工事・給湯器交換・電気工事の設備工事スタッフ求人への応募フォームです。神奈川県厚木市の設備工事会社に応募する。',
  keywords: ['宝宮設備 求人', '株式会社宝宮設備 採用', '厚木 設備工事 応募', '設備工事 応募フォーム'],
}

export default function Entry() {
  return (
    <>
      <PageHero
        en="Entry"
        title="応募フォーム"
        subtitle="株式会社宝宮設備 採用サイト"
        breadcrumbs={[{ href: '/', label: 'トップ' }, { label: '応募フォーム' }]}
      />

      {/* Entry form section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">

          {/* Intro */}
          <div className="mb-10">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              宝宮設備への応募・お問い合わせはこちらのフォームよりお送りください。
              未経験の方・見学・相談希望の方もお気軽にどうぞ。
              担当者よりご連絡いたします。
            </p>
            <p className="text-xs text-gray-400">
              お電話での応募・相談も受け付けています：
              <a href="tel:046-205-4558" className="text-navy font-bold ml-1 hover:underline">
                046-205-4558
              </a>
              （9:00〜18:00）
            </p>
          </div>

          {/* Form */}
          <EntryForm />

          {/* Other contact methods */}
          <div className="mt-12 border-t border-gray-200 pt-10">
            <h2 className="text-base font-black text-navy tracking-tight mb-5">
              その他の応募・お問い合わせ方法
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-5">
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">Phone</p>
                <a href="tel:046-205-4558" className="text-navy font-bold text-sm hover:underline">
                  046-205-4558
                </a>
                <p className="text-xs text-gray-400 mt-1">9:00〜18:00</p>
              </div>
              <div className="bg-gray-50 p-5">
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">LINE</p>
                <a
                  href="https://line.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy font-bold text-sm hover:underline"
                >
                  LINEで相談する
                </a>
                <p className="text-xs text-gray-400 mt-1">気軽にメッセージを</p>
              </div>
              <div className="bg-gray-50 p-5">
                <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">Instagram</p>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy font-bold text-sm hover:underline"
                >
                  DMで問い合わせ
                </a>
                <p className="text-xs text-gray-400 mt-1">インスタDMも可</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
