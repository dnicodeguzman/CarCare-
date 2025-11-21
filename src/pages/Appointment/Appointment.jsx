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
      </form>
    </div>
  );
}

export default Appointment;
