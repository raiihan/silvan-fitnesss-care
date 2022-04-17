import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/MainSection/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/SharedPages/Header/Header';
import SignUp from './Pages/Authentication/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
