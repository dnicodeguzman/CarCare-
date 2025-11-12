import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services.jsx';
import Appointment from './pages/Appointment/Appointment';
import Admin from './pages/Admin/Admin';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;