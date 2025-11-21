import { useState } from "react";
import ServiceModal from "./ServiceModal";
import "./services.css";

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [services, setServices] = useState([
    {
      id: 1,
      icon: "🛢️",
      name: "Change Oil / Filter Change",
      description: "Replace engine oil and oil filter; includes basic inspection.",
      price: "500.00"
    },
    {
      id: 2,
      icon: "⚙️",
      name: "Engine Diagnostics",
      description: "Computerized scanning and troubleshooting of engine performance issues.",
      price: "800.00"
    },
    {
      id: 3,
      icon: "🛞",
      name: "Tire Replacement",
      description: "Replace worn tires and perform wheel balancing/alignment.",
      price: "1200.00"
    },
    {
      id: 4,
      icon: "🛞",
      name: "Wheel Alignment and Balancing",
      description: "Adjust wheel angles for proper tire wear and steering control.",
      price: "600.00"
    },
    {
      id: 5,
      icon: "🧹🪣",
      name: "Aircon Cleaning",
      description: "Complete air conditioning system cleaning and maintenance.",
      price: "750.00"
    },
    {
      id: 6,
      icon: "⚙️",
      name: "Transmission Services",
      description: "Replace transmission fluid, check clutch and gear function.",
      price: "1500.00"
    },
    {
      id: 7,
      icon: "🔧",
      name: "Engine Overhaul",
      description: "Complete engine disassembly and rebuild for performance restoration.",
      price: "5000.00"
    },
    {
      id: 8,
      icon: "🔧",
      name: "Underchassis Inspection",
      description: "Examine suspension, shocks, bushings, and control arms.",
      price: "400.00"
    }
  ]);

  const handleViewDetails = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleSaveService = (updatedService) => {
    setServices(services.map(service => 
      service.id === updatedService.id ? updatedService : service
    ));
  };

  const handleDeleteService = (serviceId) => {
    setServices(services.filter(service => service.id !== serviceId));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };


  
  return (
    <>
      <main>
        <div className="cardServices">
          {services.map((service) => (
            <div key={service.id} className="cards">
              <div className="cardsIcon">{service.icon}</div>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
              <div className="service-actions">
                <button 
                  className="btn-view-details"
                  onClick={() => handleViewDetails(service)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
      
      </main>

      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveService}
        onDelete={handleDeleteService}
      />
    </>
  );
}

export default Services;