import { X } from "lucide-react";
import { useState } from "react";

const CreatePostModal = ({ onClose, onCreate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    if (!title || !description) return;

    const newPost = {
      id: Date.now(),
      user: "You",
      avatar: "https://i.pravatar.cc/40?img=8",
      time: "Just now",
      content: `${title}\n${description}`,
      image: preview,
    };

    onCreate(newPost);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-[#151821] w-full max-w-lg rounded-2xl p-6 text-white">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Create Post</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Title */}
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 px-4 py-2 rounded-lg bg-[#0f1115] border border-slate-700 focus:outline-none"
        />

        {/* Description */}
        <textarea
          placeholder="What's on your mind?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full mb-3 px-4 py-2 rounded-lg bg-[#0f1115] border border-slate-700 focus:outline-none"
        />

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-3 text-sm"
        />

        {/* Preview */}
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="rounded-xl mb-4 max-h-48 object-cover"
          />
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-sky-500 hover:bg-sky-600 py-2 rounded-xl font-medium"
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default CreatePostModal;
