const PostCard = ({ post }) => {
  return (
    <div className="bg-[#151821] rounded-2xl p-5 hover:shadow-lg transition">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <img src={post.avatar} alt="user" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold text-sm">@{post.user}</p>
          <p className="text-xs text-slate-400">{post.time}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-slate-300 text-sm leading-relaxed">{post.content}</p>

      {/* Image */}
      {post.image && (
        <img
          src={post.image}
          alt="post"
          className="mt-4 rounded-xl w-full object-cover max-h-64"
        />
      )}
    </div>
  );
};

export default PostCard;
