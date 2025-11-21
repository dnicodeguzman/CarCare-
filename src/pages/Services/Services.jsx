import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./services.css";

function Services() {
 

  return (
    <>
        <main>
        <div class="cardServices">
          <div class="cards">
            <div class="cardsIcon"> 🛢️ </div>
            <h2> Change Oil / Filter Change </h2>
            <p>
              Replace engine oil and oil filter; includes basic inspection.
            </p>
          </div>

          <div class="cards">
            <div class="cardsIcon"> ⚙️ </div>
            <h2> Engine Diagnostics </h2>
            <p>
              Computerized scanning and troubleshooting of engine performance issues.
            </p>
          </div>

          <div class="cards">
            <div class="cardsIcon"> 🛞 </div>
            <h2> Tire Replacement </h2>
            <p> Replace worn tires and perform wheel balancing/alignment. </p>
          </div>

          <div class="cards">
            <div class="cardsIcon">🛞</div>
            <h2>Wheel Alignment and Balancing </h2>
            <p>
              Adjust wheel angles for proper tire wear and steering control.
            </p>
          </div>

           <div class="cards">
            <div class="cardsIcon">🧹🪣 </div>
            <h2> Aircon Cleaning </h2>
            <p>
              View all previous services done on each car to keep maintenance consistent.
            </p>
          </div>

          <div class="cards">
            <div class="cardsIcon"> ⚙️ </div>
            <h2> Transmission Services </h2>
            <p>
              Replace transmission fluid, check clutch and gear function.
            </p>
          </div>

          <div class="cards">
            <div class="cardsIcon"> 🔧 </div>
            <h2> Engine Overhaul </h2>
            <p>
             Complete engine disassembly and rebuild for performance restoration.
            </p>
          </div>

           <div class="cards">
            <div class="cardsIcon"> 🔧 </div>
            <h2> Underchassis Inspection </h2>
            <p>
            Examine suspension, shocks, bushings, and control arms.
            </p>
          </div>

           <div class="cards">
            <div class="cardsIcon"> 🔧 </div>
            <h2> Underchassis Inspection </h2>
            <p>
            Examine suspension, shocks, bushings, and control arms.
            </p>
          </div>

           <div class="cards">
            <div class="cardsIcon"> 🔧 </div>
            <h2> Underchassis Inspection </h2>
            <p>
            Examine suspension, shocks, bushings, and control arms.
            </p>
          </div>

           <div class="cards">
            <div class="cardsIcon"> 🔧 </div>
            <h2> Underchassis Inspection </h2>
            <p>
            Examine suspension, shocks, bushings, and control arms.
            </p>
          </div>
          
           <div class="cards">
            <div class="cardsIcon"> 🔧 </div>
            <h2> Underchassis Inspection </h2>
            <p>
            Examine suspension, shocks, bushings, and control arms.
            </p>
          </div>

        </div>
      </main>

    </>
  );
}

export default Services;