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
      </form>
    </div>
  );
}

export default Appointment;
