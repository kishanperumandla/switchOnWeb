import { useEffect, useState } from "react";
import Header from "../../components/global/Header";
import Banner from "../../components/Home/Banner";
import DignosticServiceCard from "../../components/Home/DignosticServiceCard";
import GovtHospitalServiceCard from "../../components/Home/GovtHospitalServiceCard";
import HospitalServiceCard from "../../components/Home/HospitalServiceCard";

import RentalsServiceCard from "../../components/Home/RentalsServiceCard";
import RatingUi from "../../components/utility/Circle";

export default function HomePage() {
  const [counter, setCounter] = useState<number[]>([0]);

  function onIncreaseCount(num: number) {
    setCounter((prev) => [...prev, num]);

    localStorage.setItem("counter", JSON.stringify(counter));
    console.log("From Local Storage:", JSON.parse(localStorage.getItem("counter")!));
  }

  return (
    <div className="home-page">
      <button onClick={() => onIncreaseCount(1)}>Increase Count</button>
      {/* Header */}
      <Header />
      {/* Main Container */}
      <div className="main-container">
        <main className="main-content">
          {/* Hero Banner */}
          <Banner />
          {/* Service Cards */}
          <div className="services-container">
            <HospitalServiceCard />
            <DignosticServiceCard />
            <GovtHospitalServiceCard />
            <RentalsServiceCard />
          </div>
        </main>
      </div>
      <RatingUi />
    </div>
  );
}
