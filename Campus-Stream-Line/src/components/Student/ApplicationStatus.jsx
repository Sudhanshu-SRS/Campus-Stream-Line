const ApplicationStatus = () => {
  const applications = [
    { college: "IIT Delhi", status: "Under Review" },
    { college: "NIT Trichy", status: "Accepted" },
    { college: "VIT Vellore", status: "Pending" },
  ];

  return (
    <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Application Status</h2>

      <div className="space-y-3">
        {applications.map((app, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 rounded-xl bg-slate-50"
          >
            <span className="font-medium">{app.college}</span>
            <span
              className={`text-sm px-3 py-1 rounded-full ${
                app.status === "Accepted"
                  ? "bg-green-100 text-green-600"
                  : app.status === "Under Review"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-slate-200 text-slate-600"
              }`}
            >
              {app.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationStatus;
