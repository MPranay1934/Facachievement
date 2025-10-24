const mockRequests = [
  { id: 1, teacher: "Alice", achievement: "Patent Filed", status: "Pending" },
  {
    id: 2,
    teacher: "Bob",
    achievement: "Conference Speaker",
    status: "Pending",
  },
];

const mockDeptOverview = {
  totalFaculty: 10,
  totalAchievements: 25,
};

export default function HodDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">HOD Dashboard</h1>
      <div className="mb-6">
        <h2 className="font-bold mb-2">Pending Achievement Requests</h2>
        <ul>
          {mockRequests.map((req) => (
            <li key={req.id} className="mb-1">
              <span className="font-medium">{req.teacher}</span>:{" "}
              {req.achievement}{" "}
              <span className="text-yellow-600">({req.status})</span>
              <button className="ml-2 px-2 py-1 bg-green-500 text-white rounded text-xs">
                Approve
              </button>
              <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded text-xs">
                Reject
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-bold mb-2">Department Overview</h2>
        <p>Total Faculty: {mockDeptOverview.totalFaculty}</p>
        <p>Total Achievements: {mockDeptOverview.totalAchievements}</p>
      </div>
    </div>
  );
}
