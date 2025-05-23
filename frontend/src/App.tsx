// import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Register } from './pages/register'
import { Login } from './pages/login'
import Store from './authentication/authKit';
import Dashboard from './protected_pages/userDashboard';

function App() {
  
  return <div className=''>
    <AuthProvider store={Store()}>
      {/* protected routes */}
      <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
     </AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
