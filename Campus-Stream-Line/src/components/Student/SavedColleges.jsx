const SavedColleges = () => {
  const saved = ["IIT Bombay", "BITS Pilani", "IISc Bangalore"];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Saved Colleges</h2>

      <ul className="space-y-3 text-slate-600">
        {saved.map((college, i) => (
          <li
            key={i}
            className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition cursor-pointer"
          >
            {college}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedColleges;
