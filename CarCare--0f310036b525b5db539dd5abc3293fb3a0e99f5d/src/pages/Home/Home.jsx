import { useState, useEffect } from "react";
import { ref, onValue, remove } from "firebase/database";
import { db } from "../../firebase";
import "./home.css";

function Home() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const appointmentsRef = ref(db, "appointments");
    onValue(appointmentsRef, snapshot => {
      const data = snapshot.val() || {};
      const formatted = Object.keys(data).map(id => ({
        id,
        ...data[id]
      }));
      setAppointments(formatted);
    });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      const appointmentRef = ref(db, `appointments/${id}`);
      remove(appointmentRef)
        .then(() => {
          alert("Appointment deleted successfully");
        })
        .catch((error) => {
          alert("Error deleting appointment: " + error.message);
        });
    }
  };

  const handleEdit = (id) => {
    alert("ala pa");
  };

  return (
    <>
      <header>
        <h1>Car Services Management System</h1>
        <p className="cardTagline">
          Manage your car maintenance, appointments, and services easily in one
          place.
        </p>
      </header>
      <main>
        <div className="cardContainers">
          <div className="cards">
            <div className="cardsIcon">🚗</div>
            <h2>Track Vehicle History</h2>
            <p>
              View all previous services done on each car to keep maintenance
              consistent.
            </p>
          </div>
          <div className="cards">
            <div className="cardsIcon">📅</div>
            <h2>Smart Booking</h2>
            <p>
              Quickly schedule appointments for car servicing with real-time
              updates.
            </p>
          </div>
          <div className="cards">
            <div className="cardsIcon">👥</div>
            <h2>Customer Management</h2>
            <p>Maintain and organize all customer data efficiently.</p>
          </div>
          <div className="cards">
            <div className="cardsIcon">📊</div>
            <h2>Service Records</h2>
            <p>
              Track completed services, pending requests, and payment details.
            </p>
          </div>
        </div>
      </main>
      <div className="tableLogs">
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Car Model</th>
              <th>Service</th>
              <th>Date</th>
              <th>Mechanic</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map(appointment => (
                <tr key={appointment.id}>
                  <td>{appointment.customerName}</td>
                  <td>{appointment.carModel}</td>
                  <td>{appointment.service}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.mechanic}</td>
                  <td>{appointment.type}</td>
                  <td>{appointment.status}</td>
                  <td>
                    <button 
                      id="btnEdit" 
                      onClick={() => handleEdit(appointment.id)}
                    >
                      Edit
                    </button>
                    <button 
                      id="btnDelete" 
                      onClick={() => handleDelete(appointment.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  No appointments yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;