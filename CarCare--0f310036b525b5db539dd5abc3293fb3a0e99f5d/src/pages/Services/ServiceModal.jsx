import { useState, useEffect } from "react";
import "./services.css";

function ServiceModal({ service, isOpen, onClose, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedService, setEditedService] = useState({
    name: "",
    description: "",
    price: "",
    icon: ""
  });


  
  useEffect(() => {
    if (service) {
      setEditedService({
        name: service.name || "",
        description: service.description || "",
        price: service.price || "",
        icon: service.icon || ""
      });
    }
  }, [service]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(editedService);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    
    
    setEditedService({
      name: service.name || "",
      description: service.description || "",
      price: service.price || "",
      icon: service.icon || ""
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      onDelete(service.id);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedService(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Service Details</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="service-modal-body">
          <div className="service-icon-large">
            {service?.icon || "🛢️"}
          </div>
          
          {!isEditing ? (
  
  
            <div className="service-view-mode">
              <h1 className="service-title">{service?.name}</h1>
              <p className="service-description">{service?.description}</p>
              <div className="service-price">PHP {service?.price}</div>
              
              <div className="service-action-buttons">
                <button 
                  className="btn-edit-service"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Service
                </button>
                <button 
                  className="btn-delete-service"
                  onClick={handleDelete}
                >
                  Delete Service
                </button>
              </div>
            </div>
          ) : (
            



            <div className="service-edit-mode">
              <h3>Edit Service</h3>
              <div className="service-details">
                <div className="form-group">
                  <label>Service Name</label>
                  <input
                    type="text"
                    value={editedService.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="form-input"
                    placeholder="Enter service name"
                  />
                </div>
                
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={editedService.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="form-textarea"
                    rows="3"
                    placeholder="Enter service description"
                  />
                </div>
                
                <div className="form-group">
                  <label>Price (PHP)</label>
                  <div className="price-input-container">
                    <span className="currency-symbol">PHP</span>
                    <input
                      type="number"
                      value={editedService.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      className="form-input price-input"
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Icon</label>
                  <input
                    type="text"
                    value={editedService.icon}
                    onChange={(e) => handleInputChange('icon', e.target.value)}
                    className="form-input"
                    placeholder="🛢️"
                  />
                </div>
              </div>
              
              <div className="edit-action-buttons">
                <button className="btn-cancel" onClick={handleCancelEdit}>
                  Cancel
                </button>
                <button className="btn-save" onClick={handleSave}>
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceModal;