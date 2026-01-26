import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../services/communityApi";

const Profile = () => {
  const { user, login } = useContext(AuthContext);

  const [name, setName] = useState(user?.name || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);

    try {
      const res = await API.put("/users/profile", { name, avatar });

      login({
        token: localStorage.getItem("token"),
        user: res.data.user
      });

      alert("Profile updated successfully!");

    } catch {
      alert("Profile update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0f1115] text-white px-4">
      <div className="bg-[#151821] p-6 rounded-xl max-w-md w-full shadow-xl">

        <h2 className="text-lg font-semibold mb-4 text-center">My Profile</h2>

        <div className="flex justify-center mb-4">
          <img
            src={avatar}
            className="w-24 h-24 rounded-full border border-gray-700 object-cover"
          />
        </div>

        <input
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          className="w-full mb-3 p-2 bg-[#0f1115] border border-gray-700 rounded-lg"
        />

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 bg-[#0f1115] border border-gray-700 rounded-lg"
        />

        <button
          onClick={handleSave}
          disabled={loading}
          className="w-full bg-sky-500 hover:bg-sky-600 py-2 rounded-lg font-medium disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save Profile"}
        </button>

      </div>
    </div>
  );
};

export default Profile;
