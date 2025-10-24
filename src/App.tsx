import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import AdminDashboard from "./pages/AdminDashboard";
import HodDashboard from "./pages/HodDashboard";
import LoginPage from "./pages/LoginPage";
import PublicSearch from "./pages/PublicSearch";
import TeacherDashboard from "./pages/TeacherDashboard";

function ProtectedRoute({
  children,
  roles,
}: {
  children: JSX.Element;
  roles: string[];
}) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (!roles.includes(user.role)) return <Navigate to="/" />;
  return children;
}

function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="flex items-center justify-between bg-blue-600 text-white px-6 py-3 mb-6">
      <div className="flex items-center gap-4">
        <Link to="/search" className="font-bold text-lg">
          Faculty Achievements
        </Link>
        {user && user.role === "teacher" && (
          <Link to="/teacher" className="hover:underline">
            Dashboard
          </Link>
        )}
        {user && user.role === "hod" && (
          <Link to="/hod" className="hover:underline">
            Dashboard
          </Link>
        )}
        {user && user.role === "admin" && (
          <Link to="/admin" className="hover:underline">
            Dashboard
          </Link>
        )}
      </div>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span>
              {user.name} ({user.role})
            </span>
            <button
              onClick={logout}
              className="bg-white text-blue-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-white text-blue-600 px-3 py-1 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/teacher/*"
            element={
              <ProtectedRoute roles={["teacher"]}>
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hod/*"
            element={
              <ProtectedRoute roles={["hod"]}>
                <HodDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute roles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/search/*" element={<PublicSearch />} />
          <Route path="*" element={<Navigate to="/search" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
