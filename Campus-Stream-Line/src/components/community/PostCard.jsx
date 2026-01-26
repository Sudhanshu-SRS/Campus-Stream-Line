import { useState } from "react";
import { Heart } from "lucide-react";
import API from "../../services/communityApi";

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes?.length || 0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments || []);
  const [loadingLike, setLoadingLike] = useState(false);
  const [loadingComment, setLoadingComment] = useState(false);

 const handleLike = async () => {
  try {
    setLoadingLike(true);

    const res = await API.put(`/posts/${post._id}/like`, {
      userId: "64e8b2f7a2c123456789abcd",
    });

    setLikes(res.data.likes.length);
  } catch (err) {
    console.error("Like Error:", err);
  } finally {
    setLoadingLike(false);
  }
};

  const handleComment = async () => {
    if (!comment.trim()) return;

    try {
      setLoadingComment(true);

      const res = await API.post(`/posts/${post._id}/comment`, {
        user: "Student",
        text: comment,
      });

      setComments(res.data.comments);
      setComment("");
    } catch (err) {
      console.error("Comment Error:", err);
    } finally {
      setLoadingComment(false);
    }
  };

  return (
    <div className="bg-[#151821] rounded-2xl p-5">
      {/* USER HEADER */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={post.user?.avatar || "/default-avatar.png"}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-sm">
            @{post.user?.name || "Anonymous"}
          </p>
          <p className="text-xs text-slate-400">
            {new Date(post.createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <p className="text-slate-300 text-sm whitespace-pre-line">
        {post.content}
      </p>

      {/* IMAGE */}
      {post.image && (
        <img
          src={post.image}
          className="mt-4 rounded-xl w-full max-h-64 object-cover"
        />
      )}

      {/* COMMENTS */}
      <div className="mt-4">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full bg-[#0f1115] px-3 py-2 rounded-lg text-sm border border-slate-700"
        />

        <button
          onClick={handleComment}
          disabled={loadingComment}
          className="mt-2 text-sm text-sky-400 hover:text-sky-500 disabled:opacity-50"
        >
          {loadingComment ? "Posting..." : "Post Comment"}
        </button>

        <div className="mt-2 space-y-2 text-xs text-slate-300">
          {comments.map((c, i) => (
            <p key={i}>
              <b>{c.user}:</b> {c.text}
            </p>
          ))}
        </div>
      </div>

      {/* LIKE */}
      <div className="mt-4 flex items-center gap-2 text-slate-400">
        <button
          onClick={handleLike}
          disabled={loadingLike}
          className="hover:text-red-500 disabled:opacity-50"
        >
          <Heart size={18} />
        </button>
        <span>{likes} likes</span>
      </div>
    </div>
  );
};

export default PostCard;
