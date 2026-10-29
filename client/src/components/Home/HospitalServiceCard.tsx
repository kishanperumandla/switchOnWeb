import { Link } from "react-router";
import clickSound from "../../assets/clicksound.mp3";

export default function HospitalServiceCard() {
  function handleClickSound() {
    const sound = new Audio(clickSound);
    sound.play();
  }

  return (
    <div className="service-card">
      <h3>Hospital Serice Card</h3>

      <Link to="/hospital-equipment-services" onClick={handleClickSound}>
        Go
      </Link>
    </div>
  );
}
