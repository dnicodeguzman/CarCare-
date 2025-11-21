import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services.jsx';
import Appointment from './pages/Appointment/Appointment';
import Admin from './pages/Admin/Admin';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [mechanics, setMechanics] = useState([
    { id: 1, name: "Dan Nico De Guzman", specialization: "Tire Replacement", contact: "09123456789", address: "Malolos,Bulacan" },
    { id: 2, name: "Andre Lean Delfin", specialization: "Battery Check-Up", contact: "09987654321", address: "Malolos,Bulacan" },
    { id: 3, name: "Kurt Ivan Reyes", specialization: "Wheel Alignment", contact: "09123789456", address: "Malolos,Bulacan" },
  ]);

  const [appointments, setAppointments] = useState([]);

  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home appointments={appointments} />} />
          <Route path='/home' element={<Home appointments={appointments} />} />
          <Route path='/services' element={<Services />} />
          <Route path='/appointment' element={<Appointment mechanics={mechanics} setAppointments={setAppointments} appointments={appointments} />} />
          <Route path='/admin' element={<Admin mechanics={mechanics} setMechanics={setMechanics} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;