const UpcomingEvents = () => {
  const events = [
    { title: "AI Workshop", date: "12 Mar 2026" },
    { title: "College Counseling Webinar", date: "18 Mar 2026" },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>

      <div className="space-y-3 text-sm text-slate-600">
        {events.map((event, i) => (
          <div key={i} className="flex justify-between">
            <span>{event.title}</span>
            <span className="text-slate-400">{event.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
