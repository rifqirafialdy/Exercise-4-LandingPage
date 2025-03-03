import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LandingPage from './pages/Landingpage'
import ContactUs from './pages/ContactUs'

function App() {
  

  return (
    <BrowserRouter>
   <Routes>
    <Route path='/'element={<LandingPage/>}/>
    <Route path='/contact'element={<ContactUs/>}/>
   </Routes>
    </BrowserRouter>
  )
}

export default App
