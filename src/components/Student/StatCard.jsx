const StatCard = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600">
          {icon}
        </div>
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <p className="text-2xl font-bold text-slate-800">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
