import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/authContext";

export default function AuthenticatedLayout() {
  const { loginSuccess } = useAuth();

  if (!loginSuccess) return <Navigate to="/login" replace />;

  return (
    <div>
      <h1>Authenticaled</h1>
      <Outlet />
    </div>
  );
}
