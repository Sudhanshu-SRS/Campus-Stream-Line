const CollegeFilters = ({ query, setQuery }) => {
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search college by name..."
      className="w-full max-w-md px-4 py-2 border rounded-xl"
    />
  );
};

export default CollegeFilters;
