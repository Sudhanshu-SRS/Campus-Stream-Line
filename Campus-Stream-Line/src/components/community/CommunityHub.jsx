import TrendingTopics from "./TrendingTopics";
import PostFeed from "./PostFeed";
import SuggestedGroups from "./SuggestedGroups";

const CommunityHub = () => {
  return (
    <div className="min-h-screen bg-[#0f1115] text-white px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left */}
        <TrendingTopics />

        {/* Center */}
        <PostFeed />

        {/* Right */}
        <SuggestedGroups />
      </div>
    </div>
  );
};

export default CommunityHub;
