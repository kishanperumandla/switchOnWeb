import { Link } from "react-router";

export default function DignosticServiceCard() {
  return (
    <div className="service-card">
      <h3>Diagnostic Serice Card</h3>
      <Link to="/diagnostic-services">Go</Link>
    </div>
  );
}
