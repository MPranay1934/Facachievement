import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const [teacherId, setTeacherId] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Replace with real API call
    if (teacherId === "admin") {
      login({ teacherId, name: "Admin", role: "admin" });
      navigate("/admin");
    } else if (teacherId === "hod") {
      login({ teacherId, name: "HOD", role: "hod" });
      navigate("/hod");
    } else {
      login({ teacherId, name: "Teacher", role: "teacher" });
      navigate("/teacher");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow w-80"
      >
        <h2 className="text-2xl font-bold mb-4">Faculty Login</h2>
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Teacher ID"
          value={teacherId}
          onChange={(e) => setTeacherId(e.target.value)}
        />
        <input
          className="border p-2 mb-4 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
