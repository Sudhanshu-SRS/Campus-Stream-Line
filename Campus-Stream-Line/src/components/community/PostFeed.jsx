import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import CreatePostModal from "./CreatePostModal";
import { fetchPosts } from "../../services/communityApi";

const PostFeed = () => {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  return (
    <div className="lg:col-span-2 space-y-6">
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-xl text-sm font-medium"
      >
        <Plus size={16} />
        Create Post
      </button>

      {showModal && (
        <CreatePostModal
          onClose={() => setShowModal(false)}
          onCreate={addNewPost}
        />
      )}

      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
