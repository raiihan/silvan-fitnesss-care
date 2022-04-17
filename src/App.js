import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/MainSection/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/SharedPages/Header/Header';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Checkout from './Pages/MainSection/Checkout/Checkout';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import About from './Pages/About/About';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='checkout/:serviceName' element={<RequireAuth>
          <Checkout />
        </RequireAuth>} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
