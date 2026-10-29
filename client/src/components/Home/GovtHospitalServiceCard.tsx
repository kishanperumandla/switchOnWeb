import { Link } from "react-router";

export default function GovtHospitalServiceCard() {
  return (
    <div className="service-card">
      <h3>Govnmt Hospital Serice Card</h3>
      <Link to="/govt-hospital-services">Go</Link>
      {/* <button className="btn-primary">go</button> */}
    </div>
  );
}
