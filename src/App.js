import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import ChatHome from './views/chatHome';
import Login from './views/login';
import Signup from './views/signup';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChatHome />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
