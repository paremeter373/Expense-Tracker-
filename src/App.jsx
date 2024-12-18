import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { SignInPage, SignUpPage } from './components/Auth'
import { useAuth } from '@clerk/clerk-react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Reports from './pages/Reports'
import './App.css'

function App() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/sign-in" 
          element={!isSignedIn ? <SignInPage /> : <Navigate to="/" />} 
        />
        <Route 
          path="/sign-up" 
          element={!isSignedIn ? <SignUpPage /> : <Navigate to="/" />} 
        />
        <Route 
          path="/dashboard" 
          element={isSignedIn ? <Dashboard /> : <Navigate to="/sign-in" />} 
        />
        <Route 
          path="/transactions" 
          element={isSignedIn ? <Transactions /> : <Navigate to="/sign-in" />} 
        />
        <Route 
          path="/reports" 
          element={isSignedIn ? <Reports /> : <Navigate to="/sign-in" />} 
        />
      </Routes>
    </Router>
  )
}

export default App
