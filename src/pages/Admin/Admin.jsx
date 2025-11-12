import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./admin.css";

function Admin() {
 

  return (
    <>
    <div className="tableStaff">
        <table>
          <tr>
            
            <th> Mechanic Name </th>
            <th> Specialization </th>
            <th> Contact </th>
            <th> Address </th>
            <th> Mechanic </th>
            <th> Actions </th>
          </tr>
          <tr>
            <td> Dan Nico De Guzman </td>
            <td> Mitsubishi Mirage 2022 </td>
            <td> Tire Replacement </td>
            <td> Nov 10, 2025 </td>
            <td> Andre </td>
            <td> 
              <button id="btnEdit"> Edit </button>
              <button id="btnDelete"> Delete </button>
            </td>
          </tr>

          <tr>
            
              <td> Andre Lean Delfin </td>
              <td> Ford Everest 2017 </td>
              <td> Battery Check-Up </td>
              <td> Nov 10, 2025 </td>
              <td> Nico </td>
            <td> 
              <button id="btnEdit"> Edit </button>
              <button id="btnDelete"> Delete </button>
            </td>
        
          </tr>
 
          <tr>

             <td> Kurt Ivan Reyes </td>
              <td> Toyota Fortuner 2012 </td>
              <td> Wheel Alignment </td>
              <td> Nov 10, 2025 </td>
              <td> Mark </td>
            <td> 
              <button id="btnEdit"> Edit </button>
              <button id="btnDelete"> Delete </button>
            </td>

          </tr>

          
        </table>
      </div>
    </>
  );
}

export default Admin;