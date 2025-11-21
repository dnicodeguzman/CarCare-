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
  };

  return (
    <div className="admin-container">
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
            </form>
          </div>
        </div>
      )}

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
    </div>
  );
}

export default Admin;
