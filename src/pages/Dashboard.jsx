import { Link } from 'react-router-dom'
import { CalendarCheck, IndianRupee, Layers, Users } from 'lucide-react'
import { Card, Hero, HeroStat, StatCard } from '../components/ui'
import { DonutChart, TrendChart } from '../components/Charts'
import { batches, courseMix, enrolTrend } from '../data'

export default function Dashboard() {
  return (
    <>
      <Hero
        eyebrow="Kota branch · Today"
        title="6 batches live, 598 aspirants learning 🚀"
        subtitle="Weekly test #12 results are out. 18 fee instalments are due this week."
        side={<div className="grid grid-cols-2 gap-3"><HeroStat label="Attendance" value="93%" /><HeroStat label="New enquiries" value="27" /></div>}
      >
        <Link to="/tests" className="btn bg-white text-brand-700 hover:bg-brand-50">View leaderboard</Link>
      </Hero>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active students" value="598" delta="8.4%" icon={Users} />
        <StatCard label="Batches" value="6" icon={Layers} tone="violet" hint="2 starting next month" />
        <StatCard label="Fee collected (Nov)" value="₹18.6L" delta="5.1%" icon={IndianRupee} tone="emerald" />
        <StatCard label="Avg. attendance" value="93%" delta="1.2%" icon={CalendarCheck} tone="sky" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Enrolments" subtitle="JEE vs NEET, cumulative" className="xl:col-span-2">
          <TrendChart data={enrolTrend} series={[{ key: 'neet', name: 'NEET' }, { key: 'jee', name: 'JEE' }]} />
        </Card>
        <Card title="Students by course"><DonutChart data={courseMix} centerValue="598" centerLabel="Students" /></Card>
      </div>
      <Card title="Today's classes" className="mt-6">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {batches.slice(0, 6).map((b) => (
            <div key={b.id} className="flex items-center gap-4 rounded-xl border border-slate-100 p-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-2xl">{b.emoji}</span>
              <div className="min-w-0 flex-1"><p className="truncate font-semibold text-slate-800">{b.nextClass}</p><p className="truncate text-xs text-slate-400">{b.name} · {b.timing}</p></div>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}
