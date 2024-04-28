

import { Route, Routes } from 'react-router-dom';
import './App.css';




import MySignUp from './Components/LoginSignup/MySignup';
import Home from './pages/Home';
import MyLogin from './Components/LoginSignup/MyLogin'





function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<MySignUp />} />
        <Route path="/login" element={<MyLogin />} />
      </Routes>
    </div>
  );
}

export default App;
