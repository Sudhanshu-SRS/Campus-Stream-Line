import { Plus } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import PostCard from "./PostCard";
import CreatePostModal from "./CreatePostModal";
import { fetchPosts } from "../../services/communityApi";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const PostFeed = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const res = await fetchPosts();
    setPosts(res.data);
  };

  const addNewPost = (post) => {
    setPosts((prev) => [post, ...prev]);
  };

  const handleCreatePostClick = () => {
    if (!user) {
      toast.error("Login to use this functionality");
      return;
    }
    setShowModal(true);
  };

  return (
    <div className="lg:col-span-2 space-y-6">
      {/* Create Post Button */}
      <button
        onClick={handleCreatePostClick}
        className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-xl text-sm font-medium text-white"
      >
        <Plus size={16} />
        Create Post
      </button>

      {/* Modal */}
      {user && showModal && (
        <CreatePostModal
          onClose={() => setShowModal(false)}
          onCreate={addNewPost}
        />
      )}

      {/* Posts */}
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
