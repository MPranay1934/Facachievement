import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const mockAchievements = [
  { id: 1, title: "Published Paper in AI", year: 2023 },
  { id: 2, title: "Best Teacher Award", year: 2022 },
];

export default function TeacherDashboard() {
  const [tab, setTab] = useState<"profile" | "achievements">("profile");
  const { user } = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
      <div className="mb-4 flex gap-4">
        <button
          className={`px-4 py-2 rounded ${
            tab === "profile" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setTab("profile")}
        >
          Profile
        </button>
        <button
          className={`px-4 py-2 rounded ${
            tab === "achievements" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setTab("achievements")}
        >
          Achievements
        </button>
      </div>
      {tab === "profile" && (
        <div className="bg-white p-4 rounded shadow">
          <p>
            <b>Name:</b> {user?.name}
          </p>
          <p>
            <b>Teacher ID:</b> {user?.teacherId}
          </p>
          <p>
            <b>Role:</b> {user?.role}
          </p>
        </div>
      )}
      {tab === "achievements" && (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-2">Your Achievements</h2>
          <ul>
            {mockAchievements.map((a) => (
              <li key={a.id} className="mb-1">
                <span className="font-medium">{a.title}</span> ({a.year})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
