<<<<<<< HEAD
import { useState } from "react";
import "./appointment.css";

function Appointment({ mechanics }) {
  const [selectedMechanic, setSelectedMechanic] = useState("");

  return (
    <div className="mainFormContainer">
      <form>
        <p>First Name</p>
        <input type="text" />
        <p>Last Name</p>
        <input type="text" />
        <p>Car Model</p>
        <input type="text" />
        <p>Plate Number</p>
        <input type="text" />
        <p>Service</p>
        <select name="services">
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
        <input type="date" />
        <p>Assigned Mechanic</p>
        <select name="mechanics" value={selectedMechanic} onChange={(e) => setSelectedMechanic(e.target.value)}>
          <option value="">Select Mechanic</option>
          {mechanics.map((m) => (
            <option key={m.id} value={m.name}>{m.name}</option>
          ))}
        </select>
        <button id="btnSubmit" type="submit">Submit</button>
=======
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";
import "./appointment.css";

function Appointment() {
  const [mechanics, setMechanics] = useState([]);
  const [selectedMechanic, setSelectedMechanic] = useState("");

  useEffect(() => {
    const mechanicsRef = ref(db, "mechanics");
    onValue(mechanicsRef, snapshot => {
      const data = snapshot.val() || {};
      const formatted = Object.keys(data).map(id => ({
        id,
        ...data[id]
      }));
      setMechanics(formatted);
    });
  }, []);

  return (
    <div className="mainFormContainer">
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Car Model" />
        <input type="text" placeholder="Plate Number" />
        <select>
          <option>Oil Change</option>
          <option>Engine Diagnostics</option>
          <option>Tire Replacement</option>
          <option>Wheel Alignment</option>
        </select>
        <input type="date" />
        <select value={selectedMechanic} onChange={e => setSelectedMechanic(e.target.value)}>
          <option value="">Select Mechanic</option>
          {mechanics.map(m => (
            <option key={m.id} value={m.name}>{m.name}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
>>>>>>> 5943c49 (pa test  crud)
      </form>
    </div>
  );
}

export default Appointment;
