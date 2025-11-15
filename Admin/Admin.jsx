import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./admin.css";

function Admin() {
  const [mechanics, setMechanics] = useState([
    {
      id: 1,
      name: "Dan Nico De Guzman",
      specialization: "Mitsubishi Mirage 2022",
      contact: "Tire Replacement",
      address: "Nov 10, 2025",
    },
    {
      id: 2,
      name: "Andre Lean Delfin",
      specialization: "Ford Everest 2017",
      contact: "Battery Check-Up",
      address: "Nov 10, 2025",
    },
    {
      id: 3,
      name: "Kurt Ivan Reyes",
      specialization: "Toyota Fortuner 2012",
      contact: "Wheel Alignment",
      address: "Nov 10, 2025",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    contact: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddMechanic = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.specialization && formData.contact && formData.address) {
      const newMechanic = {
        id: mechanics.length + 1,
        ...formData,
      };
      
      setMechanics((prev) => [...prev, newMechanic]);
      setFormData({ name: "", specialization: "", contact: "", address: "" });
      setShowForm(false);
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleDelete = (id) => {
    setMechanics((prev) => prev.filter((mechanic) => mechanic.id !== id));
  };

  return (
    <>
      <div className="admin-container">
        <button className="btnAddMechanic" onClick={() => setShowForm(true)}>
          Add Mechanic
        </button>

        {showForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Add New Mechanic</h2>
              <form onSubmit={handleAddMechanic}>
                <input
                  type="text"
                  name="name"
                  placeholder="Mechanic Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="specialization"
                  placeholder="Specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
                <div className="form-buttons">
                  <button type="submit">Add Mechanic</button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="btnCancel"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="tableStaff">
          <table>
            <thead>
              <tr>
                <th>Mechanic Name</th>
                <th>Specialization</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mechanics.map((mechanic) => (
                <tr key={mechanic.id}>
                  <td>{mechanic.name}</td>
                  <td>{mechanic.specialization}</td>
                  <td>{mechanic.contact}</td>
                  <td>{mechanic.address}</td>
                  <td>
                    <button id="btnEdit">Edit</button>
                    <button
                      id="btnDelete"
                      onClick={() => handleDelete(mechanic.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Admin;