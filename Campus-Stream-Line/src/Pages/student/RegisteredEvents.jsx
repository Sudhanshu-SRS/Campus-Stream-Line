const RegisteredEvents = () => {
  const events = [
    { title: "AI Workshop", date: "12 Mar 2026" },
    { title: "Counseling Webinar", date: "18 Mar 2026" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Events</h1>

      {events.map((e, i) => (
        <div key={i} className="bg-white p-4 rounded-xl shadow mb-3">
          <p className="font-semibold">{e.title}</p>
          <p className="text-sm text-gray-500">{e.date}</p>
        </div>
      ))}
    </div>
  );
};

export default RegisteredEvents;
