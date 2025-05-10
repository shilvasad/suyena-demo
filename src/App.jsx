import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './layouts/Layout'
import BusinessDashboard from './dashboards/business/BusinessDashboard.jsx'
import GuardianDashboard from './dashboards/guardian/GuardianDashboard.jsx'
import InstituteDashboard from './dashboards/institute/InstituteDashboard.jsx'
import StudentDashboard from './dashboards/student/StudentDashboard.jsx'
import TeacherDashboard from './dashboards/teacher/TeacherDashboard.jsx'
import AuthFeature from './features/auth/AuthFeature.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout><HomePage /></Layout>} />
        <Route path='/dashboard/business' element={<Layout><BusinessDashboard /></Layout>} />
        <Route path='/dashboard/guardian' element={<Layout><GuardianDashboard /></Layout>} />
        <Route path='/dashboard/institute' element={<Layout><InstituteDashboard /></Layout>} />
        <Route path='/dashboard/student' element={<Layout><StudentDashboard /></Layout>} />
        <Route path='/dashboard/teacher' element={<Layout><TeacherDashboard /></Layout>} />
        <Route path='/auth' element={<Layout><AuthFeature /></Layout>} />
      </Routes>
    </>
  )
}

export default App
