// Sample data for the UI demo. The complete project uses live APIs + database.
export const batches = [
  { id: 1, name: 'JEE Advanced – Lakshya', course: 'JEE', timing: '7:00 – 11:00 AM', days: 'Mon–Sat', faculty: 'Ankit Sir', students: 58, seats: 60, nextClass: 'Rotational Dynamics', emoji: '🚀' },
  { id: 2, name: 'NEET – Pragati', course: 'NEET', timing: '8:00 AM – 12:00 PM', days: 'Mon–Sat', faculty: 'Dr. Ritu Ma\'am', students: 72, seats: 80, nextClass: 'Human Physiology', emoji: '🧬' },
  { id: 3, name: 'Foundation Class 10', course: 'Foundation', timing: '4:00 – 6:30 PM', days: 'Mon–Fri', faculty: 'Vivek Sir', students: 41, seats: 50, nextClass: 'Quadratic Equations', emoji: '📐' },
  { id: 4, name: 'JEE Mains – Weekend', course: 'JEE', timing: '9:00 AM – 3:00 PM', days: 'Sat–Sun', faculty: 'Neeraj Sir', students: 36, seats: 40, nextClass: 'Organic Chemistry', emoji: '⚗️' },
  { id: 5, name: 'NEET Repeaters – Sankalp', course: 'NEET', timing: '2:00 – 6:00 PM', days: 'Mon–Sat', faculty: 'Dr. Ritu Ma\'am', students: 64, seats: 64, nextClass: 'Genetics', emoji: '🔬' },
  { id: 6, name: 'CUET Crash Course', course: 'CUET', timing: '6:30 – 8:30 PM', days: 'Mon–Fri', faculty: 'Pooja Ma\'am', students: 28, seats: 45, nextClass: 'General Test – Reasoning', emoji: '🎯' },
]

export const enrolTrend = [
  { label: 'Jun', jee: 120, neet: 140 }, { label: 'Jul', jee: 162, neet: 171 }, { label: 'Aug', jee: 188, neet: 196 },
  { label: 'Sep', jee: 201, neet: 214 }, { label: 'Oct', jee: 212, neet: 229 }, { label: 'Nov', jee: 218, neet: 236 },
]

export const courseMix = [
  { name: 'NEET', value: 236 }, { name: 'JEE', value: 218 }, { name: 'Foundation', value: 96 }, { name: 'CUET', value: 48 },
]

export const leaderboard = [
  { rank: 1, name: 'Aarav Jain', batch: 'Lakshya', physics: 112, chemistry: 108, maths: 116, total: 336, change: 3 },
  { rank: 2, name: 'Prisha Agarwal', batch: 'Lakshya', physics: 104, chemistry: 112, maths: 109, total: 325, change: 0 },
  { rank: 3, name: 'Kunal Meena', batch: 'Weekend', physics: 109, chemistry: 98, maths: 112, total: 319, change: 5 },
  { rank: 4, name: 'Sneha Choudhary', batch: 'Lakshya', physics: 96, chemistry: 106, maths: 104, total: 306, change: -2 },
  { rank: 5, name: 'Harshit Goyal', batch: 'Weekend', physics: 101, chemistry: 94, maths: 102, total: 297, change: 1 },
  { rank: 6, name: 'Tanya Rathore', batch: 'Lakshya', physics: 92, chemistry: 99, maths: 97, total: 288, change: -1 },
  { rank: 7, name: 'Om Prakash', batch: 'Weekend', physics: 88, chemistry: 96, maths: 95, total: 279, change: 4 },
]

export const subjectAvg = [
  { label: 'Test 1', physics: 72, chemistry: 78, maths: 70 }, { label: 'Test 2', physics: 75, chemistry: 80, maths: 74 },
  { label: 'Test 3', physics: 79, chemistry: 81, maths: 77 }, { label: 'Test 4', physics: 82, chemistry: 84, maths: 80 },
]
