import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ChatHome from './views/chatHome';
import Login from './views/login';
import Signup from './views/signup';

function App() {
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
