'use client'

const ITEMS = [
  'Air Conditioning',
  '宝宮設備',
  'Water Heater',
  '神奈川・厚木',
  'Electrical Work',
  '未経験歓迎',
  'Houmiya Setsubi',
  '資格取得支援',
  'Infrastructure',
  '社会保険完備',
  'Field Engineer',
  '車両貸出',
]

export default function TickerSection() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div
      className="relative overflow-hidden border-y"
      style={{
        background: '#1e293b',
        borderColor: 'rgba(255,255,255,0.06)',
        paddingTop: 13,
        paddingBottom: 13,
      }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #1e293b, transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #1e293b, transparent)' }}
      />

      <div className="ticker-track" style={{ animationDuration: '38s' }}>
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center flex-shrink-0"
            style={{ paddingLeft: 36, paddingRight: 36 }}
          >
            <span
              className="inline-block w-1 h-1 rounded-full mr-5 flex-shrink-0"
              style={{ background: i % 3 === 0 ? '#f97316' : i % 3 === 1 ? '#0ea5e9' : 'rgba(255,255,255,0.2)' }}
            />
            <span
              className="text-[10px] font-black tracking-[0.25em] uppercase whitespace-nowrap"
              style={{ color: i % 2 === 0 ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.14)' }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
