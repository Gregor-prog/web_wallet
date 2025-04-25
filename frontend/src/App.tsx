import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Register } from './pages/register'
import { Login } from './pages/login'

function App() {
  return <div className='h-[100%]'>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
