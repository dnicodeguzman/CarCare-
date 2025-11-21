import { useState } from "react";
import "./admin.css";

function Admin({ mechanics, setMechanics }) {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentID, setCurrentID] = useState(null);
  const [formData, setFormData] = useState({ name: "", specialization: "", contact: "", address: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddMechanic = (e) => {
    e.preventDefault();
    const newMechanic = { id: mechanics.length + 1, ...formData };
    setMechanics([...mechanics, newMechanic]);
    setFormData({ name: "", specialization: "", contact: "", address: "" });
    setShowForm(false);
  };

  const handleEdit = (mechanic) => {
    setIsEditing(true);
    setCurrentID(mechanic.id);
    setFormData({ name: mechanic.name, specialization: mechanic.specialization, contact: mechanic.contact, address: mechanic.address });
    setShowForm(true);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    setMechanics((prev) => prev.map((m) => (m.id === currentID ? { ...m, ...formData } : m)));
    setIsEditing(false);
    setCurrentID(null);
    setFormData({ name: "", specialization: "", contact: "", address: "" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this mechanic?")) {
      setMechanics((prev) => prev.filter((m) => m.id !== id));
    }
  };

  return (
    <div className="admin-container">
      <button className="btnAddMechanic" onClick={() => { setIsEditing(false); setShowForm(true); setFormData({ name: "", specialization: "", contact: "", address: "" }); }}>Add Mechanic</button>
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{isEditing ? "Edit Mechanic" : "Add New Mechanic"}</h2>
            <form onSubmit={isEditing ? handleSaveEdit : handleAddMechanic}>
              <input type="text" name="name" placeholder="Mechanic Name" value={formData.name} onChange={handleInputChange} required />
              <input type="text" name="specialization" placeholder="Specialization" value={formData.specialization} onChange={handleInputChange} required />
              <input type="tel" name="contact" placeholder="Contact" value={formData.contact} onChange={handleInputChange} pattern="09[0-9]{9}" required />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} required />
              <div className="form-buttons">
                <button type="submit">{isEditing ? "Save Changes" : "Add Mechanic"}</button>
                <button type="button" onClick={() => setShowForm(false)} className="btnCancel">Cancel</button>
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
                  <button id="btnEdit" onClick={() => handleEdit(mechanic)}>Edit</button>
                  <button id="btnDelete" onClick={() => handleDelete(mechanic.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
