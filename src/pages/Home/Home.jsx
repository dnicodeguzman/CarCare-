import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./home.css";

function Home() {
  return (
    <>
      <header>
        <h1>Car Services Management System</h1>
        <p class="cardTagline">
          Manage your car maintenance, appointments, and services easily in one
          place.
        </p>
      </header>

      <main>
        <div class="cardContainers">
          <div class="cards">
            <div class="cardsIcon">🚗</div>
            <h2>Track Vehicle History</h2>
            <p>
              View all previous services done on each car to keep maintenance
              consistent.
            </p>
          </div>

          <div class="cards">
            <div class="cardsIcon">📅</div>
            <h2>Smart Booking</h2>
            <p>
              Quickly schedule appointments for car servicing with real-time
              updates.
            </p>
          </div>

          <div class="cards">
            <div class="cardsIcon">👥</div>
            <h2> Customer Management </h2>
            <p>Maintain and organize all customer data efficiently.</p>
          </div>

          <div class="cards">
            <div class="cardsIcon">📊</div>
            <h2>Service Records</h2>
            <p>
              Track completed services, pending requests, and payment details.
            </p>
          </div>
          
        </div>
      </main>

      <div className="tableLogs">
        <table>
          <tr>
            
            <th> Customer Name </th>
            <th> Car Model </th>
            <th> Service </th>
            <th> Date </th>
            <th> Mechanic </th>
            <th> Type </th>
            <th> Status </th>
            <th> Actions </th>
          </tr>
          <tr>
            <td> Dan Nico De Guzman </td>
            <td> Mitsubishi Mirage 2022 </td>
            <td> Tire Replacement </td>
            <td> Nov 10, 2025 </td>
            <td> Andre </td>
            <td> Walk-In </td>
            <td> --- </td>
            <td> 
              <button id="btnEdit"> Edit </button>
              <button id="btnDelete"> Delete </button>
            </td>
          </tr>

          <tr>
            
        
          </tr>

          
        </table>
      </div>
    </>
  );
}

export default Home;