const mockUsers = [
  { id: "t1", name: "Alice", role: "teacher" },
  { id: "t2", name: "Bob", role: "teacher" },
  { id: "h1", name: "Dr. Smith", role: "hod" },
];

const mockStats = {
  totalUsers: 12,
  totalAchievements: 40,
};

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="mb-6">
        <h2 className="font-bold mb-2">User Management</h2>
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border px-2 py-1">ID</th>
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Role</th>
              <th className="border px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((u) => (
              <tr key={u.id}>
                <td className="border px-2 py-1">{u.id}</td>
                <td className="border px-2 py-1">{u.name}</td>
                <td className="border px-2 py-1">{u.role}</td>
                <td className="border px-2 py-1">
                  <button className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2 className="font-bold mb-2">Stats</h2>
        <p>Total Users: {mockStats.totalUsers}</p>
        <p>Total Achievements: {mockStats.totalAchievements}</p>
      </div>
    </div>
  );
}
