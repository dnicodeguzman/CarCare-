import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./home.css";

function Home({ appointments }) {
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
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.customerName}</td>
                <td>{appointment.carModel}</td>
                <td>{appointment.service}</td>
                <td>{appointment.date}</td>
                <td>{appointment.mechanic}</td>
                <td>{appointment.type}</td>
                <td>{appointment.status}</td>
                <td>
                  <button id="btnEdit">Edit</button>
                  <button id="btnDelete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;