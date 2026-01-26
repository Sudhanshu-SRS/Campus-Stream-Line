import { useState } from "react";
import CollegeCard from "../../components/Student/CollegeCard";
import CollegeFilters from "../../components/student/CollegeFilters";
import { colleges } from "../../Data/mockColleges";

const StudentColleges = () => {
  const [query, setQuery] = useState("");

  const filtered = colleges.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Explore Colleges</h1>

      <CollegeFilters query={query} setQuery={setQuery} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default StudentColleges;
