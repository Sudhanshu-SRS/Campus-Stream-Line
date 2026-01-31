import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export default function AdminUserManager() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const fetchUsers = async () => {
    const res = await axios.get(`${API}/admin/users`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateRole = async (userId, role) => {
    setLoading(true);
    try {
      await axios.put(`${API}/admin/update-role`, { userId, role });
      fetchUsers();
      alert("Role updated successfully");
    } catch {
      alert("Failed to update role");
    } finally {
      setLoading(false);
    }
  };

  const createUser = async () => {
    try {
      await axios.post(`${API}/admin/create-user`, newUser);
      fetchUsers();
      setShowModal(false);
      setNewUser({ name: "", email: "", password: "", role: "student" });
      alert("User created successfully");
    } catch {
      alert("Failed to create user");
    }
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Role Management</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
        >
          ➕ Add User
        </button>
      </div>

      <table className="w-full border rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th>Email</th>
            <th>Current Role</th>
            <th>Change Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="border-t hover:bg-gray-50">
              <td className="p-2 font-medium">{u.name}</td>
              <td>{u.email}</td>
              <td className="capitalize">{u.role}</td>

              <td>
                <select
                  defaultValue={u.role}
                  onChange={(e) => updateRole(u._id, e.target.value)}
                  className="border px-2 py-1 rounded"
                >
                  <option value="student">Student</option>
                  <option value="staff">Staff</option>
                  <option value="hod">HOD</option>
                  <option value="institute_admin">Institute Admin</option>
                  <option value="superadmin">Super Admin</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {loading && <p className="text-sm text-gray-500">Updating...</p>}

      {/* ADD USER MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] space-y-3">
            <h2 className="text-lg font-bold">Create New User</h2>

            <input
              placeholder="Name"
              className="w-full border p-2 rounded"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />

            <input
              placeholder="Email"
              className="w-full border p-2 rounded"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />

            <input
              placeholder="Password"
              type="password"
              className="w-full border p-2 rounded"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            />

            <select
              className="w-full border p-2 rounded"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              <option value="student">Student</option>
              <option value="staff">Staff</option>
              <option value="hod">HOD</option>
              <option value="institute_admin">Institute Admin</option>
              <option value="superadmin">Super Admin</option>
            </select>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-3 py-1 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={createUser}
                className="px-3 py-1 bg-primary text-white rounded"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
