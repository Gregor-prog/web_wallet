// import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Register } from './pages/register'
import { Login } from './pages/login'
import Dashboard from './protected_pages/userDashboard';
import { ProtectedRoute } from './authentication/protectedRoute';

function App() {
  
  return <div className=''>
      {/* protected routes */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Dashboard' element={
             <ProtectedRoute allowedRoles={"admin"}>
              <Dashboard />
            </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
