import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Batches from './pages/Batches'
import Tests from './pages/Tests'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="batches" element={<Batches />} />
        <Route path="tests" element={<Tests />} />
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
