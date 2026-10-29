import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/authContext";

export default function UnAuthenticatedLayout() {
  const { loginSuccess } = useAuth();

  if (loginSuccess) return <Navigate to="/home" replace />;

  return (
    <div>
      <h1>Unauthenticated Layouts</h1>
      <Outlet />
    </div>
  );
}
