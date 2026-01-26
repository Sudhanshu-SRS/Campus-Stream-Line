import { useNavigate } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="font-semibold">{college.name}</h2>
      <p className="text-sm text-gray-600">{college.location}</p>

      <button
        onClick={() => navigate("/student/apply", { state: college })}
        className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg"
      >
        Apply Now
      </button>
    </div>
  );
};

export default CollegeCard;
