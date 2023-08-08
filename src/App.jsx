import { useContext } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';


export default function App() {

  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    return children
  }

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/">
                <Route index element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              } />
                <Route path='register' element={<RegisterPage />} />
                <Route path='login' element={<LoginPage />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );

}


