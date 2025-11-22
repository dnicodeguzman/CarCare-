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
        <p>First Name</p>
        <input type="text" />

        <p>Last Name</p>
        <input type="text" />

        <p>Car Model</p>
        <input type="text" />

        <p>Plate Number</p>
        <input type="text" />

        <p>Service</p>
        <select>
          <option>Oil Change</option>
          <option>Engine Diagnostics</option>
          <option>Tire Replacement</option>
          <option>Wheel Alignment</option>
          <option>Aircon Cleaning</option>
          <option>Transmission Services</option>
          <option>Engine Overhaul</option>
          <option>Underchassis Inspection</option>
        </select>

        <p>Date</p>
        <input type="date" />

        <p>Assigned Mechanic</p>
        <select value={selectedMechanic} onChange={e => setSelectedMechanic(e.target.value)}>
          <option value="">Select Mechanic</option>
          {mechanics.map(m => (
            <option key={m.id} value={m.name}>{m.name}</option>
          ))}
        </select>

        <button id="btnSubmit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Appointment;
