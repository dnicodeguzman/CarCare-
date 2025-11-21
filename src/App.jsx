import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services.jsx';
import Appointment from './pages/Appointment/Appointment';
import Admin from './pages/Admin/Admin';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [mechanics, setMechanics] = useState([
    { id: 1, name: "Dan Nico De Guzman", specialization: "Mitsubishi Mirage 2022", contact: "Tire Replacement", address: "Nov 10, 2025" },
    { id: 2, name: "Andre Lean Delfin", specialization: "Ford Everest 2017", contact: "Battery Check-Up", address: "Nov 10, 2025" },
    { id: 3, name: "Kurt Ivan Reyes", specialization: "Toyota Fortuner 2012", contact: "Wheel Alignment", address: "Nov 10, 2025" },
  ]);

  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/appointment' element={<Appointment mechanics={mechanics} />} />
          <Route path='/admin' element={<Admin mechanics={mechanics} setMechanics={setMechanics} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
