import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Register } from './pages/register'

function App() {
  return <div className='h-[100%]'>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
