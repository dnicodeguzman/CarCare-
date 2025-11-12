import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./appointment.css";

function Appointment() {
 

  return (
    <>
      <div className="mainFormContainer">
        
        <form action="">
          <p> First Name </p>
          <input type="text" id="" />

          <p> Last Name </p>
          <input type="text" id="" />

          <p> Car Model </p>
          <input type="text" id="" />

          <p> Plate Number </p>
          <input type="text" id="" />

          <p> Service </p>
          <select name="services"> 
            <option value="oil_change"> Oil Change </option>
            <option value="engine_diagnostics"> Engine Diagnostics </option>
            <option value="tire_replacement"> Tire Replacement </option>
            <option value="wheel_alignment_balancing"> Wheel Alignment and Balancing </option>
            <option value="aircon_cleaning"> Aircon Cleaning </option>
            <option value="transmission_services"> Transmission Services </option>
            <option value="engine_overhaul"> Engine Overhaul </option>
            <option value="underchassis_inspection"> Underchassis Inspection </option>
          </select>

          <p> Date </p>
          <input type="date" />

          <p> Assigned Mechanic </p>
          <select name="mechanics"> 
            <option value=" "> Mechanic Name </option>
          </select>

          <button id="btnSubmit"> Submit </button>
          
        </form>
      </div>
    </>
  );
}

export default Appointment;