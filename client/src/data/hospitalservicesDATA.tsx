interface HospitalEquipmentService {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  shortDescription: string;
  description: string;
  equipmentTypes: string[];
  brandsSupported: string[];
  serviceType: string[];
  pricing: {
    type: "inspection_based" | "fixed_or_quote" | "per_unit_or_quote";
    startingPrice: number;
    currency: "INR";
    priceUnit: string;
    quoteRequired: boolean;
  };
  estimatedTurnaround: string;
  warranty: string;
  availability: string;
  serviceArea: string[];
  thumbnailUrl: string;
  gallery: string[];
  certificationsRequired: string[];
  isFeatured: boolean;
  isPopular: boolean;
  status: "active" | "inactive";
}

export const hospitalEquipmentServices: HospitalEquipmentService[] = [
  {
    id: "SRV-001",
    slug: "mri-machine-repair",
    name: "MRI Machine Repair",
    category: "Hospital Equipment Repair",
    subcategory: "Medical Imaging Equipment",
    shortDescription: "Inspection, fault diagnosis and repair for MRI scanners.",
    description:
      "Comprehensive troubleshooting and repair of MRI systems, including system errors, cooling issues, image artifacts and selected component failures. Work is performed by appropriately qualified MRI service engineers.",
    equipmentTypes: ["1.5T MRI Scanner", "3T MRI Scanner", "MRI Coil Systems"],
    brandsSupported: ["GE HealthCare", "Siemens Healthineers", "Philips", "Canon Medical"],
    serviceType: ["On-site Repair", "Preventive Maintenance", "Technical Inspection"],
    pricing: {
      type: "inspection_based",
      startingPrice: 15000,
      currency: "INR",
      priceUnit: "per visit",
      quoteRequired: true,
    },
    estimatedTurnaround: "1-5 business days",
    warranty: "Subject to repair scope and parts used",
    availability: "On request",
    serviceArea: ["Hyderabad", "Telangana"],
    thumbnailUrl: "https://placehold.co/640x400/e8eaf6/283593?text=MRI+Repair",
    gallery: [
      "https://placehold.co/640x400/e8eaf6/283593?text=MRI+Scanner",
      "https://placehold.co/640x400/e8eaf6/283593?text=Imaging+Maintenance",
    ],
    certificationsRequired: ["MRI safety training", "Manufacturer-specific training where applicable"],
    isFeatured: true,
    isPopular: true,
    status: "active",
  },
  {
    id: "SRV-002",
    slug: "ct-scanner-repair",
    name: "CT Scanner Repair",
    category: "Hospital Equipment Repair",
    subcategory: "Medical Imaging Equipment",
    shortDescription: "Technical support for CT scanner faults and downtime.",
    description:
      "Diagnosis of scanner errors, image quality issues, gantry problems, cooling faults and selected hardware failures, followed by repair recommendations and functional checks.",
    equipmentTypes: ["16-Slice CT", "32-Slice CT", "64-Slice CT", "128-Slice CT"],
    brandsSupported: ["GE HealthCare", "Siemens Healthineers", "Philips", "Canon Medical"],
    serviceType: ["On-site Repair", "Preventive Maintenance", "Emergency Inspection"],
    pricing: {
      type: "inspection_based",
      startingPrice: 12000,
      currency: "INR",
      priceUnit: "per visit",
      quoteRequired: true,
    },
    estimatedTurnaround: "1-5 business days",
    warranty: "Subject to repair scope and parts used",
    availability: "On request",
    serviceArea: ["Hyderabad", "Telangana"],
    thumbnailUrl: "https://placehold.co/640x400/e3f2fd/1565c0?text=CT+Scanner+Repair",
    gallery: [
      "https://placehold.co/640x400/e3f2fd/1565c0?text=CT+Gantry",
      "https://placehold.co/640x400/e3f2fd/1565c0?text=Scanner+Inspection",
    ],
    certificationsRequired: ["Imaging equipment service training", "Radiation safety awareness"],
    isFeatured: true,
    isPopular: true,
    status: "active",
  },
  {
    id: "SRV-003",
    slug: "ultrasound-machine-repair",
    name: "Ultrasound Machine Repair",
    category: "Hospital Equipment Repair",
    subcategory: "Medical Imaging Equipment",
    shortDescription: "Repair and troubleshooting for ultrasound systems and probes.",
    description:
      "Inspection of ultrasound consoles, display issues, probe connection faults, image quality problems and selected power or software errors.",
    equipmentTypes: ["2D Ultrasound", "3D/4D Ultrasound", "Doppler Ultrasound", "Ultrasound Probes"],
    brandsSupported: ["GE HealthCare", "Philips", "Siemens Healthineers", "Mindray"],
    serviceType: ["On-site Repair", "Probe Inspection", "Preventive Maintenance"],
    pricing: {
      type: "fixed_or_quote",
      startingPrice: 2500,
      currency: "INR",
      priceUnit: "per inspection",
      quoteRequired: true,
    },
    estimatedTurnaround: "1-3 business days",
    warranty: "Subject to repair scope and parts used",
    availability: "On request",
    serviceArea: ["Hyderabad", "Telangana"],
    thumbnailUrl: "https://placehold.co/640x400/e0f2f1/00695c?text=Ultrasound+Repair",
    gallery: [
      "https://placehold.co/640x400/e0f2f1/00695c?text=Ultrasound+Console",
      "https://placehold.co/640x400/e0f2f1/00695c?text=Probe+Inspection",
    ],
    certificationsRequired: ["Medical equipment service training"],
    isFeatured: true,
    isPopular: true,
    status: "active",
  },
  {
    id: "SRV-004",
    slug: "x-ray-machine-repair",
    name: "X-Ray Machine Repair",
    category: "Hospital Equipment Repair",
    subcategory: "Radiology Equipment",
    shortDescription: "Troubleshooting for digital and conventional X-ray systems.",
    description:
      "Inspection and repair of X-ray generators, exposure controls, detectors, positioning systems and selected image acquisition faults.",
    equipmentTypes: ["Fixed X-Ray", "Mobile X-Ray", "Digital Radiography", "Computed Radiography"],
    brandsSupported: ["Carestream", "Agfa", "Siemens Healthineers", "GE HealthCare"],
    serviceType: ["On-site Repair", "Preventive Maintenance", "Performance Checks"],
    pricing: {
      type: "inspection_based",
      startingPrice: 3500,
      currency: "INR",
      priceUnit: "per visit",
      quoteRequired: true,
    },
    estimatedTurnaround: "1-3 business days",
    warranty: "Subject to repair scope and parts used",
    availability: "On request",
    serviceArea: ["Hyderabad", "Telangana"],
    thumbnailUrl: "https://placehold.co/640x400/fff3e0/e65100?text=X-Ray+Repair",
    gallery: [
      "https://placehold.co/640x400/fff3e0/e65100?text=Digital+Radiography",
      "https://placehold.co/640x400/fff3e0/e65100?text=X-Ray+Inspection",
    ],
    certificationsRequired: ["Radiology equipment service training", "Applicable radiation safety requirements"],
    isFeatured: false,
    isPopular: true,
    status: "active",
  },
  {
    id: "SRV-005",
    slug: "ventilator-repair",
    name: "Ventilator Repair",
    category: "Hospital Equipment Repair",
    subcategory: "Critical Care Equipment",
    shortDescription: "Inspection and maintenance of hospital ventilators.",
    description:
      "Troubleshooting of alarms, airflow and pressure delivery issues, sensors, valves, batteries and selected electronic faults. Includes appropriate functional verification after repair.",
    equipmentTypes: ["ICU Ventilators", "Transport Ventilators", "Non-Invasive Ventilators"],
    brandsSupported: ["Dräger", "Hamilton Medical", "Mindray", "Medtronic"],
    serviceType: ["On-site Repair", "Preventive Maintenance", "Safety and Performance Testing"],
    pricing: {
      type: "inspection_based",
      startingPrice: 2500,
      currency: "INR",
      priceUnit: "per inspection",
      quoteRequired: true,
    },
    estimatedTurnaround: "Same day to 3 business days, subject to parts",
    warranty: "Subject to repair scope and parts used",
    availability: "Priority request available",
    serviceArea: ["Hyderabad", "Telangana"],
    thumbnailUrl: "https://placehold.co/640x400/fce4ec/ad1457?text=Ventilator+Repair",
    gallery: [
      "https://placehold.co/640x400/fce4ec/ad1457?text=ICU+Ventilator",
      "https://placehold.co/640x400/fce4ec/ad1457?text=Ventilator+Testing",
    ],
    certificationsRequired: [
      "Critical care equipment service training",
      "Electrical safety and performance testing competence",
    ],
    isFeatured: true,
    isPopular: true,
    status: "active",
  },
  {
    id: "SRV-006",
    slug: "patient-monitor-repair",
    name: "Patient Monitor Repair",
    category: "Hospital Equipment Repair",
    subcategory: "Patient Monitoring Equipment",
    shortDescription: "Repair of patient monitors and monitoring accessories.",
    description:
      "Diagnosis of display faults, ECG lead issues, SpO2 sensor errors, NIBP measurement faults, battery problems and communication failures.",
    equipmentTypes: ["Multiparameter Monitors", "Bedside Monitors", "Portable Monitors", "Central Monitoring Systems"],
    brandsSupported: ["Philips", "GE HealthCare", "Mindray", "Nihon Kohden"],
    serviceType: ["On-site Repair", "Accessory Inspection", "Preventive Maintenance"],
    pricing: {
      type: "fixed_or_quote",
      startingPrice: 1500,
      currency: "INR",
      priceUnit: "per inspection",
      quoteRequired: true,
    },
    estimatedTurnaround: "1-2 business days",
    warranty: "Subject to repair scope and parts used",
    availability: "On request",
    serviceArea: ["Hyderabad", "Telangana"],
    thumbnailUrl: "https://placehold.co/640x400/e8f5e9/2e7d32?text=Patient+Monitor",
    gallery: [
      "https://placehold.co/640x400/e8f5e9/2e7d32?text=Bedside+Monitoring",
      "https://placehold.co/640x400/e8f5e9/2e7d32?text=Monitor+Testing",
    ],
    certificationsRequired: ["Patient monitoring equipment service training"],
    isFeatured: false,
    isPopular: true,
    status: "active",
  },
  {
    id: "SRV-007",
    slug: "anesthesia-machine-repair",
    name: "Anesthesia Machine Repair",
    category: "Hospital Equipment Repair",
    subcategory: "Operation Theatre Equipment",
    shortDescription: "Technical servicing for anesthesia delivery systems.",
    description:
      "Inspection of breathing circuits, gas delivery components, vaporizers, ventilator modules, alarms and selected electronic systems. Safety and functional checks are required before clinical reuse.",
    equipmentTypes: ["Anesthesia Workstations", "Anesthesia Ventilators", "Gas Delivery Systems"],
    brandsSupported: ["Dräger", "GE HealthCare", "Mindray", "Penlon"],
    serviceType: ["On-site Repair", "Preventive Maintenance", "Performance Testing"],
    pricing: {
      type: "inspection_based",
      startingPrice: 4000,
      currency: "INR",
      priceUnit: "per visit",
      quoteRequired: true,
    },
    estimatedTurnaround: "1-4 business days",
    warranty: "Subject to repair scope and parts used",
    availability: "Scheduled service",
    serviceArea: ["Hyderabad", "Telangana"],
    thumbnailUrl: "https://placehold.co/640x400/ede7f6/512da8?text=Anesthesia+Repair",
    gallery: [
      "https://placehold.co/640x400/ede7f6/512da8?text=Anesthesia+Workstation",
      "https://placehold.co/640x400/ede7f6/512da8?text=Equipment+Testing",
    ],
    certificationsRequired: ["Anesthesia equipment service training", "Gas system safety competence"],
    isFeatured: false,
    isPopular: false,
    status: "active",
  },
  {
    id: "SRV-008",
    slug: "operation-theatre-table-repair",
    name: "Operation Theatre Table Repair",
    category: "Hospital Equipment Repair",
    subcategory: "Operation Theatre Equipment",
    shortDescription: "Repair of surgical tables and positioning mechanisms.",
    description:
      "Inspection of hydraulic and electric actuators, remote controls, brakes, table movements and selected mechanical or electrical faults.",
    equipmentTypes: ["Electric OT Tables", "Hydraulic OT Tables", "Orthopedic Tables"],
    brandsSupported: ["Getinge", "STERIS", "Maquet", "Mindray"],
    serviceType: ["On-site Repair", "Mechanical Inspection", "Preventive Maintenance"],
    pricing: {
      type: "inspection_based",
      startingPrice: 2500,
      currency: "INR",
      priceUnit: "per visit",
      quoteRequired: true,
    },
    estimatedTurnaround: "1-3 business days",
    warranty: "Subject to repair scope and parts used",
    availability: "On request",
    serviceArea: ["Hyderabad", "Telangana"],
    thumbnailUrl: "https://placehold.co/640x400/e1f5fe/0277bd?text=OT+Table+Repair",
    gallery: [
      "https://placehold.co/640x400/e1f5fe/0277bd?text=Surgical+Table",
      "https://placehold.co/640x400/e1f5fe/0277bd?text=Table+Maintenance",
    ],
    certificationsRequired: ["Medical equipment service training", "Electrical and mechanical safety competence"],
    isFeatured: false,
    isPopular: false,
    status: "active",
  },
  {
    id: "SRV-009",
    slug: "autoclave-repair",
    name: "Autoclave and Sterilizer Repair",
    category: "Hospital Equipment Repair",
    subcategory: "Sterilization Equipment",
    shortDescription: "Repair and maintenance of steam sterilizers.",
    description:
      "Troubleshooting of heating, pressure control, door interlocks, seals, valves, water systems and cycle errors. Sterilization performance must be verified according to applicable procedures.",
    equipmentTypes: ["Vertical Autoclaves", "Horizontal Autoclaves", "Tabletop Sterilizers"],
    brandsSupported: ["STERIS", "Getinge", "Tuttnauer", "Priorclave"],
    serviceType: ["On-site Repair", "Preventive Maintenance", "Cycle Performance Checks"],
    pricing: {
      type: "fixed_or_quote",
      startingPrice: 2000,
      currency: "INR",
      priceUnit: "per inspection",
      quoteRequired: true,
    },
    estimatedTurnaround: "1-3 business days",
    warranty: "Subject to repair scope and parts used",
    availability: "On request",
    serviceArea: ["Hyderabad", "Telangana"],
    thumbnailUrl: "https://placehold.co/640x400/fff8e1/f57f17?text=Autoclave+Repair",
    gallery: [
      "https://placehold.co/640x400/fff8e1/f57f17?text=Steam+Sterilizer",
      "https://placehold.co/640x400/fff8e1/f57f17?text=Sterilizer+Inspection",
    ],
    certificationsRequired: ["Sterilization equipment service training", "Pressure system safety competence"],
    isFeatured: false,
    isPopular: true,
    status: "active",
  },
  {
    id: "SRV-010",
    slug: "laboratory-analyzer-repair",
    name: "Laboratory Analyzer Repair",
    category: "Diagnostic & Lab Equipment Repair",
    subcategory: "Clinical Laboratory Equipment",
    shortDescription: "Repair of clinical chemistry and hematology analyzers.",
    description:
      "Diagnosis of sampling faults, reagent handling issues, sensor errors, temperature control, mechanical failures and selected software or communication problems.",
    equipmentTypes: ["Biochemistry Analyzers", "Hematology Analyzers", "Immunoassay Analyzers"],
    brandsSupported: ["Roche", "Abbott", "Beckman Coulter", "Mindray"],
    serviceType: ["On-site Repair", "Preventive Maintenance", "Calibration Support"],
    pricing: {
      type: "inspection_based",
      startingPrice: 2500,
      currency: "INR",
      priceUnit: "per visit",
      quoteRequired: true,
    },
    estimatedTurnaround: "1-4 business days",
    warranty: "Subject to repair scope and parts used",
    availability: "On request",
    serviceArea: ["Hyderabad", "Telangana"],
    thumbnailUrl: "https://placehold.co/640x400/e0f7fa/00838f?text=Lab+Analyzer+Repair",
    gallery: [
      "https://placehold.co/640x400/e0f7fa/00838f?text=Clinical+Analyzer",
      "https://placehold.co/640x400/e0f7fa/00838f?text=Lab+Equipment+Service",
    ],
    certificationsRequired: ["Clinical laboratory equipment service training"],
    isFeatured: true,
    isPopular: true,
    status: "active",
  },
  {
    id: "SRV-011",
    slug: "centrifuge-repair",
    name: "Laboratory Centrifuge Repair",
    category: "Diagnostic & Lab Equipment Repair",
    subcategory: "Laboratory Processing Equipment",
    shortDescription: "Repair of laboratory centrifuges and rotor systems.",
    description:
      "Inspection of motor and speed control issues, imbalance errors, lid locks, timers, cooling faults and selected rotor or drive problems.",
    equipmentTypes: ["Benchtop Centrifuges", "Refrigerated Centrifuges", "High-Speed Centrifuges"],
    brandsSupported: ["Eppendorf", "Thermo Fisher Scientific", "Hettich", "Remi"],
    serviceType: ["On-site Repair", "Preventive Maintenance", "Speed Verification"],
    pricing: {
      type: "fixed_or_quote",
      startingPrice: 1200,
      currency: "INR",
      priceUnit: "per inspection",
      quoteRequired: true,
    },
    estimatedTurnaround: "1-3 business days",
    warranty: "Subject to repair scope and parts used",
    availability: "On request",
    serviceArea: ["Hyderabad", "Telangana"],
    thumbnailUrl: "https://placehold.co/640x400/f3e5f5/7b1fa2?text=Centrifuge+Repair",
    gallery: [
      "https://placehold.co/640x400/f3e5f5/7b1fa2?text=Laboratory+Centrifuge",
      "https://placehold.co/640x400/f3e5f5/7b1fa2?text=Rotor+Inspection",
    ],
    certificationsRequired: ["Laboratory equipment service training", "Rotor and speed safety competence"],
    isFeatured: false,
    isPopular: false,
    status: "active",
  },
  {
    id: "SRV-012",
    slug: "medical-equipment-electrical-safety-testing",
    name: "Medical Equipment Electrical Safety Testing",
    category: "Hospital Equipment Repair",
    subcategory: "Equipment Safety and Maintenance",
    shortDescription: "Electrical safety inspections for compatible medical equipment.",
    description:
      "Assessment of electrical leakage, protective earth continuity and other applicable electrical safety parameters using suitable calibrated test equipment and documented procedures.",
    equipmentTypes: ["Patient Monitors", "Infusion Pumps", "Electrosurgical Units", "Medical Power Supplies"],
    brandsSupported: ["Multiple Compatible Manufacturers"],
    serviceType: ["Electrical Safety Testing", "Preventive Maintenance", "Inspection Report"],
    pricing: {
      type: "per_unit_or_quote",
      startingPrice: 500,
      currency: "INR",
      priceUnit: "per equipment unit",
      quoteRequired: true,
    },
    estimatedTurnaround: "1-2 business days, depending on quantity",
    warranty: "Not applicable to testing alone",
    availability: "Scheduled service",
    serviceArea: ["Hyderabad", "Telangana"],
    thumbnailUrl: "https://placehold.co/640x400/eceff1/455a64?text=Electrical+Safety+Testing",
    gallery: [
      "https://placehold.co/640x400/eceff1/455a64?text=Safety+Analyzer",
      "https://placehold.co/640x400/eceff1/455a64?text=Electrical+Inspection",
    ],
    certificationsRequired: ["Relevant electrical safety testing competence", "Calibrated test equipment"],
    isFeatured: false,
    isPopular: true,
    status: "active",
  },
];

export function hospitalEquipmentService_DATA_API(): Promise<HospitalEquipmentService[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(hospitalEquipmentServices);
    }, 2000);
    // reject(new Error("🔴 Data fetching is falied"));
  });
}
