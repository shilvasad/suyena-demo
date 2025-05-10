import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './layouts/Layout'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout><HomePage/></Layout>} />
        
      </Routes>
    </>
  )
}

export default App
