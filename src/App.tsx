import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Layout from './components/layout'
import UploadMenuData from "./components/insertdatafirebase"; // adjust path


function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/upload' element={<UploadMenuData/>}/>
              </Route>
            <Route path='*' element={<div>404 Page Not Found</div>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
