import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/MainSection/Home/Home';
import Login from './Pages/Authentication/Login/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
