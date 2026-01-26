import { useEffect, useState } from "react";
import { fetchTrending } from "../../services/communityApi";

const TrendingTopics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTrending().then((res) => setTopics(res.data));
  }, []);

  return (
    <div className="bg-[#151821] rounded-2xl p-5 h-fit">
      <h3 className="font-semibold mb-4">Trending Topics</h3>

      <ul className="space-y-3 text-slate-300">
        {topics.map((topic, i) => (
          <li key={i} className="hover:text-white cursor-pointer transition">
            #{topic._id} ({topic.count})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingTopics;
