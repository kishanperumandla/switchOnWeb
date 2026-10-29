import { useAuth } from "../../contexts/authContext";

export default function Header() {
  const { loginData } = useAuth();
  return (
    <div className="header">
      <h3>Header</h3>
      <input type="text" placeholder="Search..." className="form-input" />
      <h5>Welcome: {loginData?.userName}</h5>
    </div>
  );
}
