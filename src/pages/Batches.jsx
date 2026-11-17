import { useState } from 'react'
import { Clock, Plus, UserCheck } from 'lucide-react'
import { Badge, PageHeader, Progress, Segmented } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { batches } from '../data'

const courseTone = { JEE: 'blue', NEET: 'green', Foundation: 'violet', CUET: 'amber' }

export default function Batches() {
  const { openContact } = useContact()
  const [course, setCourse] = useState('All')
  const list = batches.filter((b) => course === 'All' || b.course === course)
  return (
    <>
      <PageHeader title="Batches" subtitle="Schedules, faculty and seat availability"
        actions={<><Segmented options={['All', 'JEE', 'NEET', 'Foundation', 'CUET']} value={course} onChange={setCourse} /><button onClick={() => openContact('Create Batch & Schedule')} className="btn-primary"><Plus className="h-4 w-4" /> New batch</button></>} />
      <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
        {list.map((b) => {
          const full = b.students >= b.seats
          return (
            <div key={b.id} className="card group relative overflow-hidden p-6 animate-fade-up transition hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-100/60 transition group-hover:scale-125" />
              <div className="relative flex items-start justify-between">
                <span className="text-4xl">{b.emoji}</span>
                <Badge tone={courseTone[b.course]}>{b.course}</Badge>
              </div>
              <h3 className="relative mt-4 text-lg font-bold text-slate-900">{b.name}</h3>
              <div className="relative mt-2 space-y-1 text-sm text-slate-500">
                <p className="flex items-center gap-2"><Clock className="h-4 w-4" />{b.timing} · {b.days}</p>
                <p className="flex items-center gap-2"><UserCheck className="h-4 w-4" />{b.faculty}</p>
              </div>
              <div className="relative mt-5">
                <div className="mb-2 flex justify-between text-sm"><span className="text-slate-500">Seats filled</span><b className={full ? 'text-rose-600' : 'text-slate-800'}>{b.students}/{b.seats}{full && ' · Full'}</b></div>
                <Progress value={(b.students / b.seats) * 100} tone={full ? 'red' : 'brand'} />
              </div>
              <div className="relative mt-5 grid grid-cols-2 gap-2">
                <button onClick={() => openContact('Batch Attendance')} className="btn-ghost py-2 text-xs">Attendance</button>
                <button onClick={() => openContact('Batch Students & Fees')} className="btn-primary py-2 text-xs">Open batch</button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
