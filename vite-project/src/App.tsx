import { Route,Routes } from 'react-router-dom'
import LandingPage from './pages/Landingpage'
import ContactUs from './pages/ContactUs'
import ShowForm from './pages/ShowForm'

function App() {
  

  return (
   <Routes>
    <Route path='/'element={<LandingPage/>}/>
    <Route path='/contact'element={<ContactUs/>}/>
    <Route path='/form'element={<ShowForm/>}/>
   </Routes>
  )
}

export default App
