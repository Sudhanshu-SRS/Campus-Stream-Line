import { groups } from "../../Data/mockCommunity";

const SuggestedGroups = () => {
  return (
    <div className="bg-[#151821] rounded-2xl p-5 h-fit">
      <h3 className="font-semibold mb-4">Suggested Groups</h3>

      <div className="space-y-4">
        {groups.map((group) => (
          <div
            key={group.id}
            className="flex items-center gap-3 hover:bg-[#1c1f2a] p-2 rounded-xl transition cursor-pointer"
          >
            <img
              src={group.avatar}
              alt="group"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">{group.name}</p>
              <p className="text-xs text-slate-400">{group.members}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedGroups;
