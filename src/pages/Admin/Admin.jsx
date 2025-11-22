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
    setFormData(mech);
    setShowForm(true);
  };

  const handleDelete = id => {
    if (window.confirm("Are you sure you want to delete this mechanic?")) {
      remove(ref(db, "mechanics/" + id));
    }
  };

  return (
    <div className="admin-container">

      <button className="btnAddMechanic" onClick={() => setShowForm(true)}>
        Add Mechanic
      </button>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{editId ? "Edit Mechanic" : "Add Mechanic"}</h2>

            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Mechanic Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <input
                name="specialization"
                placeholder="Specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                required
              />

              <input
                name="contact"
                placeholder="Contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
              />

              <input
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />

              <div className="form-buttons">
                <button type="submit">
                  {editId ? "Save Changes" : "Add Mechanic"}
                </button>
                <button type="button" className="btnCancel" onClick={() => setShowForm(false)}>
                  Cancel
                </button>
              </div>
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
