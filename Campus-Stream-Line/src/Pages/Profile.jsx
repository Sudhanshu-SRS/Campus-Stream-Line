// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import API from "../services/communityApi";

// const Profile = () => {
//   const { user, login } = useContext(AuthContext);

//   const [name, setName] = useState(user?.name || "");
//   const [avatar, setAvatar] = useState(user?.avatar || "");
//   const [loading, setLoading] = useState(false);

//   const handleSave = async () => {
//     setLoading(true);

//     try {
//       const res = await API.put("/users/profile", { name, avatar });

//       login({
//         token: localStorage.getItem("token"),
//         user: res.data.user
//       });

//       alert("Profile updated successfully!");

//     } catch {
//       alert("Profile update failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-[#0f1115] text-white px-4">
//       <div className="bg-[#151821] p-6 rounded-xl max-w-md w-full shadow-xl">

//         <h2 className="text-lg font-semibold mb-4 text-center">My Profile</h2>

//         <div className="flex justify-center mb-4">
//           <img
//             src={avatar}
//             className="w-24 h-24 rounded-full border border-gray-700 object-cover"
//           />
//         </div>

//         <input
//           placeholder="Avatar URL"
//           value={avatar}
//           onChange={(e) => setAvatar(e.target.value)}
//           className="w-full mb-3 p-2 bg-[#0f1115] border border-gray-700 rounded-lg"
//         />

//         <input
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full mb-4 p-2 bg-[#0f1115] border border-gray-700 rounded-lg"
//         />

//         <button
//           onClick={handleSave}
//           disabled={loading}
//           className="w-full bg-sky-500 hover:bg-sky-600 py-2 rounded-lg font-medium disabled:opacity-60"
//         >
//           {loading ? "Saving..." : "Save Profile"}
//         </button>

//       </div>
//     </div>
//   );
// };

// export default Profile;

import { useContext, useState, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../services/communityApi";
import { Camera, GraduationCap, Upload, Lock, User } from "lucide-react";
import UserDocuments from "./student/Documents";
import Defaultimg from "../assets/Images/default.png";

const Profile = () => {
  const { user, login } = useContext(AuthContext);
  const fileInputRef = useRef(null);

  const [name, setName] = useState(user?.name || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");
  const [course, setCourse] = useState(user?.course || "");
  const [university, setUniversity] = useState(user?.university || "");
  const [loading, setLoading] = useState(false);

  const handleSaveProfile = async () => {
    setLoading(true);
    try {
      const res = await API.put("/users/profile", {
        name,
        avatar,
        course,
        university,
      });

      login({
        token: localStorage.getItem("token"),
        user: res.data.user,
      });

      alert("Profile updated successfully!");
    } catch (err) {
      alert("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }

    // Preview image instantly
    const imageURL = URL.createObjectURL(file);
    setAvatar(imageURL);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* LEFT PROFILE CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <div className="relative">
            <img
              src={avatar || Defaultimg}
              alt="Profile"
              className="h-32 w-32 rounded-full border-4 border-indigo-500 object-cover"
            />
            <button
              onClick={() => fileInputRef.current.click()}
              className="absolute bottom-1 right-1 bg-indigo-600 p-2 rounded-full text-white hover:bg-indigo-700 transition"
            >
              <Camera size={16} />
            </button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageSelect}
              className="hidden"
            />
          </div>

          <h2 className="mt-4 text-xl font-bold text-gray-800">
            {name || "Your Name"}
          </h2>

          <div className="mt-4 text-center space-y-1 text-gray-600">
            <div className="flex items-center justify-center gap-2">
              <GraduationCap size={16} />
              <span>{course || "Your Course"}</span>
            </div>
            <p>{university || "Your University"}</p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-2 space-y-8">
          {/* PROFILE FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-lg font-semibold text-indigo-700 mb-4 flex items-center gap-2">
              <User size={18} />
              Personal & Academic Details
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-400"
              />
              <input
                placeholder="Avatar URL"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-400"
              />
              <input
                placeholder="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-400"
              />
              <input
                placeholder="University"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="border rounded-lg p-3 focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <button
              onClick={handleSaveProfile}
              disabled={loading}
              className="mt-6 px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60"
            >
              {loading ? "Saving..." : "Save Profile"}
            </button>
          </div>

          {/* CHANGE PASSWORD */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center gap-2">
              <Lock size={18} />
              Change Password
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="password"
                placeholder="Current Password"
                className="border rounded-lg p-3 focus:ring-2 focus:ring-red-400"
              />
              <input
                type="password"
                placeholder="New Password"
                className="border rounded-lg p-3 focus:ring-2 focus:ring-red-400"
              />
            </div>

            <button className="mt-6 px-6 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">
              Update Password
            </button>
          </div>
        </div>
      </div>
      <UserDocuments />
    </div>
  );
};

export default Profile;
