import {
  BarChart3, BellRing, BookMarked, CalendarCheck, IndianRupee, Layers, LayoutDashboard, Rocket, Settings, Smartphone, Trophy, UserCheck, Users,
} from 'lucide-react'

export const app = {
  name: 'CoachPro',
  tagline: 'Coaching Institute Management',
  logo: Rocket,
  user: { name: 'Ankit Sir', role: 'Director · Kota Branch' },
  searchPlaceholder: 'Search student, batch, test…',
}

// Items with `to` are implemented in this demo; others are locked (full version).
export const nav = [
  {
    title: 'Institute',
    items: [
      { label: 'Dashboard', to: '/', icon: LayoutDashboard },
      { label: 'Batches', to: '/batches', icon: Layers },
      { label: 'Tests & Leaderboard', to: '/tests', icon: Trophy },
    ],
  },
  {
    title: 'Manage',
    items: [
      { label: 'Students & Enquiries', icon: Users },
      { label: 'Fees & Instalments', icon: IndianRupee },
      { label: 'Attendance (Biometric)', icon: CalendarCheck },
      { label: 'Faculty', icon: UserCheck },
      { label: 'Study Material', icon: BookMarked },
    ],
  },
  {
    title: 'Engage',
    items: [
      { label: 'Student & Parent App', icon: Smartphone },
      { label: 'SMS / WhatsApp Alerts', icon: BellRing },
      { label: 'Reports', icon: BarChart3 },
      { label: 'Settings', icon: Settings },
    ],
  },
]
