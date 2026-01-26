import { trendingTopics } from "../../Data/mockCommunity";

const TrendingTopics = () => {
  return (
    <div className="bg-[#151821] rounded-2xl p-5 h-fit">
      <h3 className="font-semibold mb-4">Trending Topics</h3>
      <ul className="space-y-3 text-slate-300">
        {trendingTopics.map((topic, i) => (
          <li key={i} className="hover:text-white cursor-pointer transition">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingTopics;
