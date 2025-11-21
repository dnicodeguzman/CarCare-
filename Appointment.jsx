import { useState } from "react";
import "./appointment.css";

function Appointment({ mechanics, setAppointments, appointments }) {
  const [selectedMechanic, setSelectedMechanic] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    carModel: "",
    plateNumber: "",
    service: "",
    date: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newAppointment = {
      id: appointments.length + 1,
      customerName: `${formData.firstName} ${formData.lastName}`,
      carModel: formData.carModel,
      plateNumber: formData.plateNumber,
      service: formData.service,
      date: formData.date,
      mechanic: selectedMechanic,
      type: "Walk-In",
      status: "---"
    };

    setAppointments([...appointments, newAppointment]);
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      carModel: "",
      plateNumber: "",
      service: "",
      date: ""
    });
    setSelectedMechanic("");
  };

  return (
    <div className="mainFormContainer">
      <form onSubmit={handleSubmit}>
        <p>First Name</p>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
        <p>Last Name</p>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
        <p>Car Model</p>
        <input type="text" name="carModel" value={formData.carModel} onChange={handleInputChange} required />
        <p>Plate Number</p>
        <input type="text" name="plateNumber" value={formData.plateNumber} onChange={handleInputChange} required />
        <p>Service</p>
        <select name="service" value={formData.service} onChange={handleInputChange} required>
          <option value="">Select Service</option>
          <option value="oil_change">Oil Change</option>
          <option value="engine_diagnostics">Engine Diagnostics</option>
          <option value="tire_replacement">Tire Replacement</option>
          <option value="wheel_alignment_balancing">Wheel Alignment and Balancing</option>
          <option value="aircon_cleaning">Aircon Cleaning</option>
          <option value="transmission_services">Transmission Services</option>
          <option value="engine_overhaul">Engine Overhaul</option>
          <option value="underchassis_inspection">Underchassis Inspection</option>
        </select>
        <p>Date</p>
        <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
        <p>Assigned Mechanic</p>
        <select name="mechanics" value={selectedMechanic} onChange={(e) => setSelectedMechanic(e.target.value)} required>
          <option value="">Select Mechanic</option>
          {mechanics.map((m) => (
            <option key={m.id} value={m.name}>{m.name}</option>
          ))}
        </select>
        <button id="btnSubmit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Appointment;