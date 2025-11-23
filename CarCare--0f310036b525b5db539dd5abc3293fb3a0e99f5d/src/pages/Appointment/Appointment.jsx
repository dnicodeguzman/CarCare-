import { useState, useEffect } from "react";
import { ref, onValue, push } from "firebase/database";
import { db } from "../../firebase";
import "./appointment.css";

function Appointment() {
  const [mechanics, setMechanics] = useState([]);
  const [selectedMechanic, setSelectedMechanic] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [carModel, setCarModel] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName.trim()) {
      alert("Please enter first name");
      return;
    }
    if (!lastName.trim()) {
      alert("Please enter last name");
      return;
    }
    if (!carModel.trim()) {
      alert("Please enter car model");
      return;
    }
    if (!plateNumber.trim()) {
      alert("Please enter plate number");
      return;
    }
    if (!service) {
      alert("Please select a service");
      return;
    }
    if (!date) {
      alert("Please select a date");
      return;
    }
    if (!selectedMechanic) {
      alert("Please select a mechanic");
      return;
    }

    // pag ok na lahat save sa database
    const appointmentData = {
      firstName,
      lastName,
      customerName: `${firstName} ${lastName}`,
      carModel,
      plateNumber,
      service,
      date,
      mechanic: selectedMechanic,
      type: "Walk-in",
      status: "Pending",
      createdAt: new Date().toISOString()
    };

    const appointmentsRef = ref(db, "appointments");
    push(appointmentsRef, appointmentData)
      .then(() => {
        alert("Appointment submitted successfully!");
        setFirstName("");
        setLastName("");
        setCarModel("");
        setPlateNumber("");
        setService("");
        setDate("");
        setSelectedMechanic("");
      })
      .catch((error) => {
        alert("Error submitting appointment: " + error.message);
      });
  };

  return (
    <div className="mainFormContainer">
      <form onSubmit={handleSubmit}>
        <p>First Name</p>
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <p>Last Name</p>
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
        <p>Car Model</p>
        <input type="text" value={carModel} onChange={e => setCarModel(e.target.value)} />
        <p>Plate Number</p>
        <input type="text" value={plateNumber} onChange={e => setPlateNumber(e.target.value)} />
        <p>Service</p>
        <select value={service} onChange={e => setService(e.target.value)}>
          <option value="">Select Service</option>
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
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
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