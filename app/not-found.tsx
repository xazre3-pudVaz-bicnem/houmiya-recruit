import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-black text-silver-light mb-4 leading-none">404</p>
        <h1 className="text-xl font-black text-navy tracking-tight mb-3">
          ページが見つかりません
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-outline text-sm px-6 py-3">
            トップへ戻る
          </Link>
          <Link href="/recruit" className="btn-primary text-sm px-6 py-3">
            募集要項を見る
          </Link>
        </div>
      </div>
    </div>
  )
}
