import { X } from "lucide-react";
import { useState } from "react";
import { createPost } from "../../services/communityApi";

const CreatePostModal = ({ onClose, onCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !description) return alert("Fill all fields");

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("content", `${title}\n${description}`);
      formData.append("tags", JSON.stringify(["community"]));
      if (image) formData.append("image", image);

      const res = await createPost(formData);

      onCreate(res.data.post);
      onClose();
    } catch (err) {
      console.error("Post Error:", err);
      alert("Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-[#151821] w-full max-w-lg rounded-2xl p-6 text-white">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Create Post</h2>
          <button onClick={onClose}><X /></button>
        </div>

        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-lg bg-[#0f1115] border border-slate-700"
        />

        <textarea
          placeholder="What's on your mind?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full mb-3 px-4 py-2 rounded-lg bg-[#0f1115] border border-slate-700"
        />

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full mb-3 text-sm"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-sky-500 hover:bg-sky-600 py-2 rounded-xl font-medium disabled:opacity-50"
        >
          {loading ? "Posting..." : "Create Post"}
        </button>

      </div>
    </div>
  );
};

export default CreatePostModal;
