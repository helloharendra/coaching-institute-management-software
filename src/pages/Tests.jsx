import { ArrowDown, ArrowUp, FileUp, Minus } from 'lucide-react'
import { Avatar, Card, DataTable, PageHeader } from '../components/ui'
import { BarsChart } from '../components/Charts'
import { useContact } from '../components/ContactModal'
import { leaderboard, subjectAvg } from '../data'

const podium = [
  { place: 2, h: 'h-28', medal: '🥈', bg: 'from-slate-200 to-slate-300' },
  { place: 1, h: 'h-36', medal: '🥇', bg: 'from-amber-300 to-yellow-500' },
  { place: 3, h: 'h-20', medal: '🥉', bg: 'from-orange-300 to-orange-500' },
]

export default function Tests() {
  const { openContact } = useContact()
  return (
    <>
      <PageHeader title="Weekly test #12 · JEE pattern" subtitle="Max marks 360 · 412 students appeared"
        actions={<button onClick={() => openContact('OMR / Online Test Upload')} className="btn-primary"><FileUp className="h-4 w-4" /> Upload results</button>} />
      <div className="grid gap-6 xl:grid-cols-5">
        <Card title="Top performers" className="xl:col-span-2">
          <div className="flex items-end justify-center gap-4 pt-4">
            {podium.map((p) => {
              const s = leaderboard[p.place - 1]
              return (
                <div key={p.place} className="flex w-28 flex-col items-center text-center animate-fade-up">
                  <Avatar name={s.name} size={p.place === 1 ? 'lg' : 'md'} />
                  <p className="mt-2 text-sm font-bold text-slate-800">{s.name.split(' ')[0]}</p>
                  <p className="text-xs text-slate-400">{s.total}/360</p>
                  <div className={`mt-3 grid w-full place-items-center rounded-t-2xl bg-gradient-to-b ${p.bg} ${p.h} text-3xl shadow-inner`}>{p.medal}</div>
                </div>
              )
            })}
          </div>
        </Card>
        <Card title="Subject-wise average (%)" subtitle="Improving across the last 4 tests" className="xl:col-span-3">
          <BarsChart data={subjectAvg} series={[{ key: 'physics', name: 'Physics' }, { key: 'chemistry', name: 'Chemistry' }, { key: 'maths', name: 'Maths' }]} height={260} />
        </Card>
      </div>
      <Card title="Leaderboard" className="mt-6" bodyClass="">
        <DataTable
          rows={leaderboard}
          onRowClick={(r) => openContact(`${r.name} – performance report`)}
          columns={[
            { key: 'rank', label: 'Rank', render: (r) => <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-900 text-sm font-bold text-white">{r.rank}</span> },
            { key: 'name', label: 'Student', render: (r) => <div><p className="font-semibold text-slate-800">{r.name}</p><p className="text-xs text-slate-400">{r.batch}</p></div> },
            { key: 'physics', label: 'Physics' },
            { key: 'chemistry', label: 'Chemistry' },
            { key: 'maths', label: 'Maths' },
            { key: 'total', label: 'Total', render: (r) => <b className="text-slate-900">{r.total}</b> },
            {
              key: 'change', label: 'Δ Rank', align: 'right', render: (r) => (
                <span className={`inline-flex items-center gap-0.5 font-semibold ${r.change > 0 ? 'text-emerald-600' : r.change < 0 ? 'text-rose-600' : 'text-slate-400'}`}>
                  {r.change > 0 ? <ArrowUp className="h-3.5 w-3.5" /> : r.change < 0 ? <ArrowDown className="h-3.5 w-3.5" /> : <Minus className="h-3.5 w-3.5" />}{Math.abs(r.change) || ''}
                </span>
              ),
            },
          ]}
        />
      </Card>
    </>
  )
}
