<<<<<<< HEAD
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
=======
import { useState, useEffect } from "react";
import { ref, push, onValue, remove, update } from "firebase/database";
import { db } from "../../firebase";
import "./admin.css";

function Admin() {
  const [mechanics, setMechanics] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    contact: "",
    address: ""
  });

  useEffect(() => {
    const mechanicsRef = ref(db, "mechanics");
    onValue(mechanicsRef, snapshot => {
      const data = snapshot.val() || {};
      const formatted = Object.keys(data).map(id => ({
        id,
        ...data[id]
      }));
      setMechanics(formatted);
    });
  }, []);

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editId) {
      update(ref(db, "mechanics/" + editId), formData);
    } else {
      push(ref(db, "mechanics"), formData);
    }
    setFormData({ name: "", specialization: "", contact: "", address: "" });
    setEditId(null);
    setShowForm(false);
  };

  const handleEdit = mech => {
    setEditId(mech.id);
    setFormData({
      name: mech.name,
      specialization: mech.specialization,
      contact: mech.contact,
      address: mech.address
    });
    setShowForm(true);
  };

  const handleDelete = id => {
    remove(ref(db, "mechanics/" + id));
>>>>>>> 5943c49 (pa test  crud)
  };

  return (
    <div className="admin-container">
<<<<<<< HEAD
      <button className="btnAddMechanic" onClick={() => { setIsEditing(false); setShowForm(true); setFormData({ name: "", specialization: "", contact: "", address: "" }); }}>Add Mechanic</button>
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{isEditing ? "Edit Mechanic" : "Add New Mechanic"}</h2>
            <form onSubmit={isEditing ? handleSaveEdit : handleAddMechanic}>
              <input type="text" name="name" placeholder="Mechanic Name" value={formData.name} onChange={handleInputChange} required />
              <input type="text" name="specialization" placeholder="Specialization" value={formData.specialization} onChange={handleInputChange} required />
              <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleInputChange} required />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} required />
              <div className="form-buttons">
                <button type="submit">{isEditing ? "Save Changes" : "Add Mechanic"}</button>
                <button type="button" onClick={() => setShowForm(false)} className="btnCancel">Cancel</button>
              </div>
=======
      <button className="btnAddMechanic" onClick={() => setShowForm(true)}>
        Add Mechanic
      </button>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <input name="name" value={formData.name} onChange={handleInputChange} required />
              <input name="specialization" value={formData.specialization} onChange={handleInputChange} required />
              <input name="contact" value={formData.contact} onChange={handleInputChange} required />
              <input name="address" value={formData.address} onChange={handleInputChange} required />
              <button type="submit">{editId ? "Save" : "Add"}</button>
>>>>>>> 5943c49 (pa test  crud)
            </form>
          </div>
        </div>
      )}
<<<<<<< HEAD
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
=======

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mechanics.map(m => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>{m.specialization}</td>
              <td>{m.contact}</td>
              <td>{m.address}</td>
              <td>
                <button onClick={() => handleEdit(m)}>Edit</button>
                <button onClick={() => handleDelete(m.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
>>>>>>> 5943c49 (pa test  crud)
    </div>
  );
}

export default Admin;
