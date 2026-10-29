import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";
import HospitalServices from "./pages/HospitalServices";
import GovtHospitalServices from "./pages/GovtHospitalServices";
import RentalServices from "./pages/RentalServices";
import DiagnosticServices from "./pages/DiagnosticServices";

import DesignSystem from "./components/design-system/DesignSystem";
import { hospitalEquipmentService_DATA_API } from "./data/hospitalservicesDATA";
import { useEffect, useState } from "react";
import Bank from "./pages/bank/Bank";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import UnAuthenticatedLayout from "./layouts/UnAuthenticatedLayout";
import Login from "./pages/login/Login";

function App() {
  // useEffect(function () {
  //   async function getHospitalData() {
  //     const data = await hospitalEquipmentService_DATA_API();
  //     console.log("🟢🟢🟢", data);
  //   }
  //   getHospitalData();
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UnAuthenticatedLayout />}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route element={<AuthenticatedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="hospital-equipment-services" element={<HospitalServices />} />
          <Route path="govt-hospital-services" element={<GovtHospitalServices />} />
          <Route path="diagnostic-services" element={<DiagnosticServices />} />
          <Route path="rental-services" element={<RentalServices />} />
          <Route path="design-system" element={<DesignSystem />} />
          <Route path="bank" element={<Bank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
