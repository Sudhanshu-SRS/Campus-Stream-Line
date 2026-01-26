import { colleges } from "../../Data/mockColleges";
import { useState } from "react";

const CompareColleges = () => {
  const [selected, setSelected] = useState(colleges.slice(0, 2));

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Compare Colleges</h1>

      <div className="grid grid-cols-3 gap-4">
        <div></div>
        {selected.map((c) => (
          <div key={c.id} className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold">{c.name}</h2>
          </div>
        ))}

        <p>Fees</p>
        {selected.map((c) => (
          <p key={c.id}>{c.fees}</p>
        ))}

        <p>Avg Package</p>
        {selected.map((c) => (
          <p key={c.id}>{c.avgPackage}</p>
        ))}
      </div>
    </div>
  );
};

export default CompareColleges;
