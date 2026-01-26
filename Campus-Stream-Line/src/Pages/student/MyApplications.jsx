const MyApplications = () => {
  const applications = [
    { college: "IIT Delhi", status: "Under Review" },
    { college: "NIT Trichy", status: "Accepted" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Applications</h1>

      {applications.map((app, i) => (
        <div
          key={i}
          className="flex justify-between bg-white p-4 rounded-xl shadow mb-3"
        >
          <span>{app.college}</span>
          <span className="font-medium">{app.status}</span>
        </div>
      ))}
    </div>
  );
};

export default MyApplications;
