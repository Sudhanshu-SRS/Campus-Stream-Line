import { Plus } from "lucide-react";
import { useState } from "react";
import { posts as initialPosts } from "../../Data/mockCommunity";
import PostCard from "./PostCard";
import CreatePostModal from "./CreatePostModal";

const PostFeed = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [showModal, setShowModal] = useState(false);

  const addNewPost = (post) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <div className="lg:col-span-2 space-y-6">
      {/* Create Post */}
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 transition px-4 py-2 rounded-xl text-sm font-medium"
      >
        <Plus size={16} />
        Create Post
      </button>

      {/* Modal */}
      {showModal && (
        <CreatePostModal
          onClose={() => setShowModal(false)}
          onCreate={addNewPost}
        />
      )}

      {/* Posts */}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
