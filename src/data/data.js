import profileImg from "../assets/images/header/profilepic.webp";
import vehicleImage from "../assets/images/vehicles/vehicle.png";

export const projects = [
  {
    title: "Project 1",
    images: [
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
    ],
    startDate: "21 Feb 2023 - 12:00 PM",
    endDate: "22 March 2023 - 12:00 PM",
    percentage: "12",
  },
  {
    title: "Project 2",
    images: [
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
    ],
    startDate: "01 Jan 2023 - 09:00 AM",
    endDate: "10 Feb 2023 - 05:00 PM",
    percentage: "55",
  },
  {
    title: "Project 3",
    images: [
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
    ],
    startDate: "15 March 2023 - 11:00 AM",
    endDate: "20 April 2023 - 04:00 PM",
    percentage: "25",
  },
  {
    title: "Project 4",
    images: [profileImg, profileImg, profileImg, profileImg, profileImg],
    startDate: "05 April 2023 - 10:00 AM",
    endDate: "25 May 2023 - 06:00 PM",
    percentage: "70",
  },
  {
    title: "Project 5",
    images: [
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
    ],
    startDate: "12 May 2023 - 01:00 PM",
    endDate: "15 June 2023 - 03:00 PM",
    percentage: "45",
  },
  {
    title: "Project 6",
    images: [
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
    ],
    startDate: "20 June 2023 - 08:00 AM",
    endDate: "30 July 2023 - 07:00 PM",
    percentage: "14",
  },
];

export const topContractorsData = [
  {
    value: 30,
    color: "#08498429",
  },
  { value: 70, color: "rgba(80, 212, 80, 1)" },
];
export const violationsSummaryData = [
  {
    value: 40,
    color: "#08498429",
  },
  { value: 60, color: "rgba(247, 141, 44, 1)" },
];
export const vehiclesPieChartData = [
  {
    name: "In Use",
    value: 65,
    color: "rgba(225, 52, 30, 1)",
  },
  { name: "Not In Use", value: 55, color: "rgba(43, 193, 85, 1)" },
  { name: "Total Vehicles", value: 250, color: "rgba(64, 123, 255, 1)" },
];

export const deviceStatusData = [
  {
    name: "Assigned",
    value: 24,
    color: "rgba(255, 210, 0, 1)",
  },
  { name: "Unassigned", value: 76, color: "rgba(52, 193, 253, 1)" },
];
export const batteryLevelData = [
  {
    name: "High",
    value: 50,
    fill: "rgba(176, 4, 138, 1)",
  },
  { name: "Medium", value: 76, fill: "rgba(231, 93, 80, 1)" },
  { name: "Low", value: 26, fill: "rgba(241, 130, 38, 1)" },
];
export const nfcTagsData = [
  {
    name: "Assigned",
    value: 24,
    color: "rgba(30, 203, 225, 1)",
  },
  { name: "Unassigned", value: 76, color: "rgba(225, 52, 30, 1)" },
];
export const nfcTagsTypeData = [
  {
    name: "Assigned",
    value: 30,
    color: "rgba(0, 227, 150, 1)",
  },
  { name: "Unassigned", value: 70, color: "rgba(255, 173, 51, 1)" },
];
export const sosStatusData = [
  {
    name: "Un-Knowledge Events",
    value: 70,
    color: "rgba(52, 112, 120, 1)",
  },
  { name: "SOS Commented", value: 30, color: "rgba(117, 187, 200, 1)" },
];
export const activeNfcTagsTypeData = [
  {
    name: "Workforces",
    value: 45,
    color: "rgba(255, 210, 0, 1)",
  },
  { name: "Vehicles", value: 15, color: "rgba(246, 141, 43, 1)" },
  { name: "Crews", value: 15, color: "rgba(52, 75, 253, 1)" },
  { name: "Vessels", value: 15, color: "rgba(244, 167, 157, 1)" },
];
export const smartTrackerData = [
  {
    name: "Assigned",
    value: 56,
    color: "rgba(52, 75, 253, 1) ",
  },
  { name: "Unassigned", value: 44, color: "rgba(255, 149, 90, 1)" },
];
export const gatewayStatsData = [
  {
    name: "Connected",
    value: 76,
    color: "rgba(244, 195, 66, 1)",
  },
  { name: "Not Connected>H1", value: 44, color: "rgba(4, 176, 66, 1)" },
];
export const activeDeviceNfcData = [
  {
    name: "Assigned",
    value: 56,
    color: "rgba(247, 111, 44, 1)",
  },
  { name: "Unassigned", value: 44, color: "rgba(8, 74, 135, 1)" },
];
export const activeDeviceData = [
  {
    name: "Connected",
    value: 50,
    color: "rgba(80, 212, 80, 1)",
  },
  { name: "Disconnected", value: 26, color: "rgba(237, 91, 91, 1)" },
  { name: "Unknown", value: 24, color: "rgba(0, 225, 240, 1)" },
];
export const trackerData = [
  {
    name: "Connected",
    value: 26,
    color: "rgba(11, 90, 163, 1)",
  },
  { name: "Not Connected>H1", value: 26, color: "rgba(255, 249, 115, 1)" },
  { name: "Not Connected>15 days", value: 24, color: "rgba(241, 130, 38, 1)" },
  { name: "Not Connected>15 days", value: 24, color: "rgba(0, 225, 240, 1)" },
];

export const barLineData = [
  { name: "Dar", uv: 3428 },
  { name: "Elegant", uv: 7120 },
  { name: "Enjaz", uv: 6650 },
  { name: "ESOM", uv: 5985 },
  { name: "FHM", uv: 2132 },
  { name: "FMCO", uv: 4300 },
  { name: "FSCL", uv: 6480 },
  { name: "GACS", uv: 5640 },
  { name: "GKI", uv: 3482 },
  { name: "HMA", uv: 2940 },
  { name: "ICAD", uv: 5200 },
  { name: "IFMI", uv: 4000 },
  { name: "KCC", uv: 2800 },
  { name: "MNO", uv: 4000 },
  { name: "HCF", uv: 2800 },
  { name: "KFT", uv: 1800 },
  { name: "POLM", uv: 6500 },
];

export const workforces = [
  {
    name: "Engineers",
    count: 12,
  },
  {
    name: "Permanent",
    count: 3,
  },
  {
    name: "Driver",
    count: 4,
  },
  {
    name: "Crew",
    count: 6,
  },
];
export const workforcesNationality = [
  {
    name: "Saudi Arabia",
    count: 32,
  },
  {
    name: "Sudan",
    count: 9,
  },
  {
    name: "Syrian Arab Republic",
    count: 4,
  },
  {
    name: "Tunsia",
    count: 1,
  },
];

export const workforcesZone = [
  {
    name: "Zone A",
    value: 20,
    color: "rgba(238, 144, 44, 1)",
  },
  { name: "Zone B", value: 20, color: "rgba(244, 161, 175, 1)" },
  { name: "Zone C", value: 25, color: "rgba(49, 56, 115, 1)" },
  { name: "Zone D", value: 35, color: "rgba(66, 140, 142, 1)" },
];

export const projectLabours = [
  {
    name: "Hamza",
    image:
      "https://images.pexels.com/photos/3658708/pexels-photo-3658708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    position: [25.276987, 55.296249],
  },
  {
    name: "Hamza",
    image:
      "https://images.pexels.com/photos/16038942/pexels-photo-16038942/free-photo-of-black-and-white-portrait-of-woman-wearing-flower-crown.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    position: [24.453884, 51.377344],
  },
  {
    name: "Hamza",
    image:
      "https://images.pexels.com/photos/14862041/pexels-photo-14862041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    position: [25.258169, 52.304718],
  },
  {
    name: "Hamza",
    image: profileImg,
    position: [23.424076, 53.847818],
  },
  {
    name: "Hamza",
    image: profileImg,
    position: [25.8, 55.95],
  },
  {
    name: "Hamza",
    image:
      "https://images.pexels.com/photos/3658708/pexels-photo-3658708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    position: [25.066667, 56.113333],
  },
  {
    name: "Hamza",
    image: profileImg,
    position: [25.321178, 55.587276],
  },
  {
    name: "Hamza",
    image: profileImg,
    position: [25.321178, 55.387276],
  },
  {
    name: "Hamza",
    image: profileImg,
    position: [25.066667, 56.333333],
  },
  {
    name: "Hamza",
    image:
      "https://images.pexels.com/photos/3658708/pexels-photo-3658708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    position: [25.321178, 55.287276],
  },
];

export const brandOptions = [
  {
    option: "Volkswagen",
    value: "volkswagen",
  },
  {
    option: "Audi",
    value: "audi",
  },
  {
    option: "Dodge",
    value: "dodge",
  },
  {
    option: "Honda",
    value: "honda",
  },
];

export const vehiclesData = [
  {
    id: "1",
    vehicleName: "Golf",
    brand: "Volkswagen",
    carRegistration: "DA 1432",
    identificationNumber: "1HGCM8263233A123456",
    assignTo: "Not Assigned",
    project: "NA",
    action: "",
    color: "White",
    vehicleImage,
  },
  {
    id: "2",
    vehicleName: "Civic",
    brand: "Honda",
    carRegistration: "CIV 5678",
    identificationNumber: "1HGCM82632A123456",
    assignTo: "John Doe",
    project: "Project X",
    action: "",
    color: "Orange",
    vehicleImage,
  },
  {
    id: "3",
    vehicleName: "Mustang",
    brand: "Ford",
    carRegistration: "MST 9101",
    identificationNumber: "1HGCM82633A2323456",
    assignTo: "Jane Smith",
    project: "Project Y",
    action: "",
    color: "Blue",
    vehicleImage,
  },
  {
    id: "4",
    vehicleName: "Accord",
    brand: "Honda",
    carRegistration: "ACD 2345",
    identificationNumber: "1sdGCM82633A123456",
    assignTo: "Emily Johnson",
    project: "Project Z",
    action: "",
    color: "red",
    vehicleImage,
  },
  {
    id: "5",
    vehicleName: "Camry",
    brand: "Toyota",
    carRegistration: "CMY 6789",
    identificationNumber: "1HG2382633A123456",
    assignTo: "Michael Brown",
    project: "Project A",
    action: "",
    color: "yellow red",
    vehicleImage,
  },
  {
    id: "6",
    vehicleName: "F-150",
    brand: "Ford",
    carRegistration: "F150 3456",
    identificationNumber: "1HGCM82333A123456",
    assignTo: "Sarah Davis",
    project: "Project B",
    action: "",
    color: "black matt",
    vehicleImage,
  },
  {
    id: "7",
    vehicleName: "Model S",
    brand: "Tesla",
    carRegistration: "TS 7890",
    identificationNumber: "1HGCM82973A123456",
    assignTo: "David Wilson",
    project: "Project C",
    action: "",
    color: "black",
    vehicleImage,
  },
  {
    id: "8",
    vehicleName: "328i",
    brand: "BMW",
    carRegistration: "328 1122",
    identificationNumber: "1HGCM827833A123456",
    assignTo: "Laura Martinez",
    project: "Project D",
    action: "",
    color: "gray",
    vehicleImage,
  },
  {
    id: "9",
    vehicleName: "Q5",
    brand: "Audi",
    carRegistration: "Q5 3344",
    identificationNumber: "1HGCM80933A123456",
    assignTo: "Daniel Lee",
    project: "Project E",
    action: "",
    color: "red",
    vehicleImage,
  },
  {
    id: "10",
    vehicleName: "Cherokee",
    brand: "Jeep",
    carRegistration: "CHR 5566",
    identificationNumber: "1HGCM826398123456",
    assignTo: "Sophia Walker",
    project: "Project F",
    action: "",
    color: "blue",
    vehicleImage,
  },
];

export const usersData = [
  {
    id: "12314sd",
    profilePhoto: profileImg,
    fullName: "Asif Zulfiqar",
    nationality: "Saudi Arabia",
    profession: "Supervisor",
    status: "Working",
    workingHour: "12:00 pm To 08:00 am",
    phoneNumber: "+966 55 123 4567",
    dateOfBirth: "1988-03-21",
    passportOrId: "S12345678",
    gender: "Male",
    project: "Workforce Project Number 1",
    subscription: 'Subscribed',
    vehicles: '3',
    action: "",
  },
  {
    id: "23415df",
    profilePhoto: profileImg,
    fullName: "Sarah Khan",
    nationality: "Pakistan",
    profession: "Manager",
    status: "On Leave",
    workingHour: "09:00 am To 05:00 pm",
    phoneNumber: "+92 321 987 6543",
    dateOfBirth: "1990-06-15",
    passportOrId: "P98765432",
    gender: "Female",
    project: "Workforce Project Number 2",
    subscription: 'Free Trail',
    vehicles: '6',
    action: "",
  },
  {
    id: "34526gh",
    profilePhoto: profileImg,
    fullName: "Ahmed Raza",
    nationality: "United Arab Emirates",
    profession: "Developer",
    status: "Working",
    workingHour: "10:00 am To 06:00 pm",
    phoneNumber: "+971 50 654 3210",
    dateOfBirth: "1992-08-10",
    passportOrId: "U76543210",
    gender: "Male",
    project: "Workforce Project Number 3",
    subscription: 'Subscribed',
    vehicles: '2',
    action: "",
  },
  {
    id: "45637ij",
    profilePhoto: profileImg,
    fullName: "Aisha Ali",
    nationality: "Qatar",
    profession: "Designer",
    status: "Working",
    workingHour: "11:00 am To 07:00 pm",
    phoneNumber: "+974 55 765 4321",
    dateOfBirth: "1991-12-05",
    passportOrId: "Q65432109",
    gender: "Female",
    project: "Workforce Project Number 4",
    subscription: 'Unsubscribed',
    vehicles: '1',
    action: "",
  },
  {
    id: "56748jk",
    profilePhoto: profileImg,
    fullName: "Omar Faruk",
    nationality: "Bahrain",
    profession: "Analyst",
    status: "On Leave",
    workingHour: "08:00 am To 04:00 pm",
    phoneNumber: "+973 39 876 5432",
    dateOfBirth: "1989-11-25",
    passportOrId: "B43210987",
    project: "Workforce Project Number 4",
    subscription: 'Subscribed',
    gender: "Male",
    vehicles: '1',
    action: "",
  },
  {
    id: "34526gh",
    profilePhoto: profileImg,
    fullName: "Ahmed Raza",
    nationality: "United Arab Emirates",
    profession: "Developer",
    status: "Working",
    workingHour: "10:00 am To 06:00 pm",
    phoneNumber: "+971 50 654 3210",
    dateOfBirth: "1992-08-10",
    passportOrId: "U76543210",
    gender: "Male",
    project: "Workforce Project Number 3",
    subscription: 'Free Trail',
    vehicles: '3',
    action: "",
  },
  {
    id: "45637ij",
    profilePhoto: profileImg,
    fullName: "Aisha Ali",
    nationality: "Qatar",
    profession: "Designer",
    status: "Working",
    workingHour: "11:00 am To 07:00 pm",
    phoneNumber: "+974 55 765 4321",
    dateOfBirth: "1991-12-05",
    passportOrId: "Q65432109",
    gender: "Female",
    project: "Workforce Project Number 4",
    subscription: 'Subscribed',
    vehicles: '5',
    action: "",
  },
  {
    id: "56748jk",
    profilePhoto: profileImg,
    fullName: "Omar Faruk",
    nationality: "Bahrain",
    profession: "Analyst",
    status: "On Leave",
    workingHour: "08:00 am To 04:00 pm",
    phoneNumber: "+973 39 876 5432",
    dateOfBirth: "1989-11-25",
    passportOrId: "B43210987",
    project: "Workforce Project Number 4",
    subscription: 'Subscribed',
    gender: "Male",
    vehicles: '2',
    action: "",
  },
];

export const projectsData = [
  {
    id: "64d62a2e4f9c1a0012345678",
    projectName: "Workforce Project Number 1",
    startDate: "06 June 2024 - 12:00 PM",
    dueDate: "24 June 2024 - 12:00 PM",
    labours: projectLabours,
    workforceCount: "85",
    action: "action",
    projectDetail:
      "This project focuses on improving the operational efficiency of our workforce through targeted training and resource allocation. The goal is to streamline processes and ensure that every team member is equipped with the necessary tools and knowledge to perform their duties effectively. This project will serve as a benchmark for future initiatives aimed at enhancing productivity across the organization.",
  },
  {
    id: "64d62a2e4f9c1a0012345679",
    projectName: "Workforce Project Number 2",
    startDate: "07 June 2024 - 10:00 AM",
    dueDate: "25 June 2024 - 10:00 AM",
    labours: projectLabours,
    workforceCount: "75",
    action: "action",
    projectDetail:
      "This project involves the deployment of a new workforce management system designed to optimize scheduling and reduce labor costs. By integrating advanced analytics and real-time monitoring, the system will allow for more efficient allocation of resources. This initiative is critical for improving our overall operational agility and ensuring that our workforce is aligned with our strategic goals.",
  },
  {
    id: "64d62a2e4f9c1a001234567a",
    projectName: "Workforce Project Number 3",
    startDate: "08 June 2024 - 09:00 AM",
    dueDate: "26 June 2024 - 09:00 AM",
    labours: projectLabours,
    workforceCount: "20",
    action: "action",
    projectDetail:
      "This project is focused on enhancing the safety protocols within our workforce. The initiative aims to introduce new safety training programs, conduct regular safety audits, and implement advanced safety equipment. This will ensure that our workforce operates in a secure environment, reducing the risk of accidents and improving overall job satisfaction.",
  },
  {
    id: "64d62a2e4f9c1a001234567b",
    projectName: "Workforce Project Number 4",
    startDate: "09 June 2024 - 11:00 AM",
    dueDate: "27 June 2024 - 11:00 AM",
    labours: projectLabours,
    workforceCount: "45",
    action: "action",
    projectDetail:
      "This project aims to implement a new performance management system across the workforce. The system will focus on continuous feedback, goal setting, and performance reviews to help employees achieve their full potential. This initiative will drive productivity and ensure alignment with the company’s objectives.",
  },
  {
    id: "64d62a2e4f9c1a001234567c",
    projectName: "Workforce Project Number 5",
    startDate: "10 June 2024 - 08:00 AM",
    dueDate: "28 June 2024 - 08:00 AM",
    labours: projectLabours,
    workforceCount: "90",
    action: "action",
    projectDetail:
      "This project is centered around the introduction of a new employee wellness program. The program will include mental health resources, fitness challenges, and wellness workshops aimed at improving the overall well-being of our workforce. By fostering a healthier work environment, we aim to boost morale and increase productivity.",
  },
  {
    id: "64d62a2e4f9c1a001234567d",
    projectName: "Workforce Project Number 6",
    startDate: "11 June 2024 - 07:00 AM",
    dueDate: "29 June 2024 - 07:00 AM",
    labours: projectLabours,
    workforceCount: "15",
    action: "action",
    projectDetail:
      "This project is designed to enhance communication within our workforce by implementing new communication tools and protocols. The aim is to improve information flow, reduce misunderstandings, and foster a more collaborative working environment. This initiative is essential for ensuring that all team members are aligned and working towards common goals.",
  },
];

export const sensorData = [
  {
    _id: "64d6hbn1loopf1mdvvak8yt01",
    sensorName: "Temperature Sensor 01",
    ip: "192.168.1.1",
    url: "http://example.com/sensors",
    port: 8030,
    topic: "Temperature",
    location: "Warehouse A",
    status: "Active",
  },
  {
    _id: "64d6hbn2loopf2mdvvak8yt02",
    sensorName: "Humidity Sensor 02",
    ip: "192.168.1.2",
    url: "http://example.com/sensors",
    port: 8031,
    topic: "Humidity",
    location: "Warehouse B",
    status: "In-Active",
  },
  {
    _id: "64d6hbn3loopf3mdvvak8yt03",
    sensorName: "Pressure Sensor 03",
    ip: "192.168.1.3",
    url: "http://example.com/sensors",
    port: 8032,
    topic: "Pressure",
    location: "Warehouse C",
    status: "Active",
  },
  {
    _id: "64d6hbn4loopf4mdvvak8yt04",
    sensorName: "Temperature Sensor 04",
    ip: "192.168.1.4",
    url: "http://example.com/sensors",
    port: 8033,
    topic: "Temperature",
    location: "Warehouse D",
    status: "In-Active",
  },
  {
    _id: "64d6hbn5loopf5mdvvak8yt05",
    sensorName: "Humidity Sensor 05",
    ip: "192.168.1.5",
    url: "http://example.com/sensors",
    port: 8034,
    topic: "Humidity",
    location: "Warehouse E",
    status: "Active",
  },
  {
    _id: "64d6hbn6loopf6mdvvak8yt06",
    sensorName: "Pressure Sensor 06",
    ip: "192.168.1.6",
    url: "http://example.com/sensors",
    port: 8035,
    topic: "Pressure",
    location: "Warehouse F",
    status: "In-Active",
  },
  {
    _id: "64d6hbn7loopf7mdvvak8yt07",
    sensorName: "Temperature Sensor 07",
    ip: "192.168.1.7",
    url: "http://example.com/sensors",
    port: 8036,
    topic: "Temperature",
    location: "Warehouse G",
    status: "Active",
  },
];
export const allContractorsData = [
  {
    _id: "64d6hbn7loopf7mdvvak8yt07",
    id: "123",
    contractors: "Ahmad Nazeer",
    totalScore: "100",
    violationType: ["Visitor exceeds the time allowed to visit"],
  },
  {
    _id: "64d6hbn7loopf7mdvvak8yt08",
    id: "124",
    contractors: "Sara Ali",
    totalScore: "60",
    violationType: ["Unauthorized access", "Late check-in"],
  },
  {
    _id: "64d6hbn7loopf7mdvvak8yt09",
    id: "125",
    contractors: "Faisal Khan",
    totalScore: "70",
    violationType: [
      "Visitor exceeds the time allowed to visit",
      "Late check-in",
    ],
  },
  {
    _id: "64d6hbn7loopf7mdvvak8yt10",
    id: "126",
    contractors: "Ayesha Ahmed",
    totalScore: "55",
    violationType: ["Unauthorized access", "Late check-in"],
  },
  {
    _id: "64d6hbn7loopf7mdvvak8yt11",
    id: "127",
    contractors: "Usman Malik",
    totalScore: "10",
    violationType: ["Late check-in"],
  },
  {
    _id: "64d6hbn7loopf7mdvvak8yt12",
    id: "128",
    contractors: "Hina Rauf",
    totalScore: "67",
    violationType: [
      "Visitor exceeds the time allowed to visit",
      "Unauthorized access",
    ],
  },
];

export const subscriptionHistoryData = [
  {
    _id: "123123sd",
    date: "24 June 2024",
    plan: "Standard",
    amount: "19.99",
    status: "expired",
    invoice: "",
    user: { userName: "Hassam Shah", userImg: profileImg },
  },
  {
    _id: "456456gh",
    date: "15 July 2024",
    plan: "Premium",
    amount: "29.99",
    status: "active",
    invoice: "INV-2024-001",
    user: { userName: "Hammas Munir", userImg: profileImg },
  },
  {
    _id: "789789jk",
    date: "01 Aug 2024",
    plan: "Standard",
    amount: "19.99",
    status: "canceled",
    invoice: "INV-2024-002",
    user: { userName: "Moiz Khan Badshah", userImg: profileImg },
  },
  {
    _id: "101010ab",
    date: "12 Sept 2024",
    plan: "Basic",
    amount: "9.99",
    status: "active",
    invoice: "INV-2024-003",
    user: { userName: "Hamza Nafasat", userImg: profileImg },
  },
  {
    _id: "121212cd",
    date: "30 October 2024",
    plan: "Premium",
    amount: "29.99",
    status: "expired",
    invoice: "",
    user: { userName: "Asif Zulfiqar", userImg: profileImg },
  },
  {
    _id: "131313ef",
    date: "05 November 2024",
    plan: "Standard",
    amount: "19.99",
    status: "active",
    invoice: "INV-2024-004",
    user: { userName: "Wahid Ahmad", userImg: profileImg },
  },
];

export const planCards = [
  {
    title: "Basic Plan",
    price: "$9.99",
    type: "monthly",
    featuresList: [
      "Access to basic content library",
      "Standard video quality",
      "Single device streaming",
      "Community support",
      "Advance Security",
    ],
    description:
      "Perfect for individuals looking to explore our content without committing to a higher tier. Enjoy standard quality streaming and a variety of basic features.",
    bg: "linear-gradient(180deg, #3AA357 0%, #257300 100%)",
    btnBg: "linear-gradient(180deg, #00FF46 0%, #032907 165.71%)",
    color: "#00FF46",
  },
  {
    title: "Standard Plan",
    price: "$19.99",
    type: "yearly",
    featuresList: [
      "Access to basic content library",
      "Standard video quality",
      "Single device streaming",
      "Community support",
      "Advance Security",
    ],
    description:
      "Perfect for individuals looking to explore our content without committing to a higher tier. Enjoy standard quality streaming and a variety of basic features.",
    bg: "linear-gradient(180deg, #40C8A1 0%, #195F9D 100%)",
    btnBg: "linear-gradient(180deg, #3DC1A1 0%, #1A639D 100%)",
    color: "#1A639D",
  },
  {
    title: "Premium Plan",
    price: "$29.99",
    type: "lifetime",
    featuresList: [
      "Access to basic content library",
      "Standard video quality",
      "Single device streaming",
      "Community support",
      "Advance Security",
    ],
    description:
      "Perfect for individuals looking to explore our content without committing to a higher tier. Enjoy standard quality streaming and a variety of basic features.",
    bg: "linear-gradient(180deg, #FFB827 0%, #EE4967 100%)",
    btnBg: "linear-gradient(180deg, #FFC24A 0%, #EF4C66 161.43%)",
    color: "#FFC24A",
  },
];

export const geofencingListData = [
  {
    _id: "64d6hbn1loopf1mdvvak8yt01",
    geofenceName: "Workforce Project Number 1",
    startDate: "06 June 2024 - 12:00 PM",
    dueDate: "24 June 2024 - 12:00 PM",
    type: "Polygon",
    project: "NA",
    status: "active",
    action: "",
  },
  {
    _id: "64d6hbn2loopf1mdvvak8yt02",
    geofenceName: "Workforce Project Number 2",
    startDate: "10 July 2024 - 10:00 AM",
    dueDate: "20 July 2024 - 10:00 AM",
    type: "Circle",
    project: "Site A",
    status: "completed",
    action: "",
  },
  {
    _id: "64d6hbn3loopf1mdvvak8yt03",
    geofenceName: "Workforce Project Number 3",
    startDate: "01 Aug 2024 - 08:00 AM",
    dueDate: "15 Aug 2024 - 05:00 PM",
    type: "Polygon",
    project: "Site B",
    status: "inactive",
    action: "",
  },
  {
    _id: "64d6hbn4loopf1mdvvak8yt04",
    geofenceName: "Workforce Project Number 4",
    startDate: "15 Sept 2024 - 02:00 PM",
    dueDate: "30 Sept 2024 - 02:00 PM",
    type: "Rectangle",
    project: "Site C",
    status: "active",
    action: "",
  },
];

export const trackerConnectivityData = [
  {
    name: "Connected",
    value: 59,
    fill: "rgba(191, 0, 0, 1)",
  },
  {
    name: "Not Connected",
    value: 41,
    fill: "rgba(255, 191, 191, 1)",
  },
];

export const vehiclesProfileData = [
  {
    name: "Connected",
    value: 90,
    fill: "rgba(113, 41, 211, 1)",
  },
  {
    name: "Not Connected",
    value: 85,
    fill: "rgba(80, 0, 187, 1)",
  },
  {
    name: "Not Connected>15 days",
    value: 85,
    fill: "rgba(63, 37, 98, 1)",
  },
  {
    name: "Not Connected>15 days",
    value: 85,
    fill: "rgba(219, 191, 255, 1)",
  },
];

export const usersViolationData = [
  {
    violationType: "Forgot Badge",
    dateTime: "4 May 2023 - 09:30 AM",
    workforce: "MKS",
    contractor: "Enjaz",
    nationality: "Saudia",
    plateNumber: "VLJ 3568",
  },
  {
    violationType: "Speeding",
    dateTime: "10 June 2023 - 02:15 PM",
    workforce: "ABC Corp",
    contractor: "Omega",
    nationality: "UAE",
    plateNumber: "AER 1234",
  },
  {
    violationType: "Unauthorized Entry",
    dateTime: "21 July 2023 - 11:00 AM",
    workforce: "XYZ Ltd",
    contractor: "Delta",
    nationality: "India",
    plateNumber: "QWE 5678",
  },
  {
    violationType: "Parking Violation",
    dateTime: "15 August 2023 - 05:45 PM",
    workforce: "DigiTech",
    contractor: "Beta",
    nationality: "Pakistan",
    plateNumber: "XYZ 9876",
  },
  {
    violationType: "Forgot Helmet",
    dateTime: "3 September 2023 - 08:30 AM",
    workforce: "SafeHands",
    contractor: "Alpha",
    nationality: "Jordan",
    plateNumber: "LMN 2468",
  },
  {
    violationType: "Incorrect PPE",
    dateTime: "12 October 2023 - 01:20 PM",
    workforce: "CoreSafety",
    contractor: "Sigma",
    nationality: "Egypt",
    plateNumber: "OPQ 1357",
  },
];

export const alertRecords = [
  {
    title: "Asif Zulfiqar",
    id: "82783792700182",
    img: profileImg,
    alertTime: "July 30 09:00 AM",
    alert:
      "A is currently disconnected. Please check the device and reconnect.",
  },
  {
    title: "Asif Zulfiqar",
    id: "82783792700182",
    img: profileImg,
    alertTime: "July 30 09:00 AM",
    alert:
      "A sensor is currently disconnected. Please check the device and reconnect.",
  },
  {
    title: "Asif Zulfiqar",
    id: "82783792700182",
    img: profileImg,
    alertTime: "July 30 09:00 AM",
    alert:
      "A sensor is currently disconnected. Please check the device and reconnect.",
  },
  {
    title: "Asif Zulfiqar",
    id: "82783792700182",
    img: profileImg,
    alertTime: "July 30 09:00 AM",
    alert:
      "A sensor is currently disconnected. Please check the device and reconnect.",
  },
  {
    title: "Asif Zulfiqar",
    id: "82783792700182",
    img: profileImg,
    alertTime: "July 30 09:00 AM",
    alert:
      "A sensor is currently disconnected. Please check the device and reconnect.",
  },
  {
    title: "Asif Zulfiqar",
    id: "82783792700182",
    img: profileImg,
    alertTime: "July 30 09:00 AM",
    alert:
      "A sensor is currently disconnected. Please check the device and reconnect.",
  },
  {
    title: "Asif Zulfiqar",
    id: "82783792700182",
    img: profileImg,
    alertTime: "July 30 09:00 AM",
    alert:
      "A sensor is currently disconnected. Please check the device and reconnect.",
  },
  {
    title: "Asif Zulfiqar",
    id: "82783792700182",
    img: profileImg,
    alertTime: "July 30 09:00 AM",
    alert:
      "A sensor is currently disconnected. Please check the device and reconnect.",
  },
];

export const workersData = [
  {
    name: "Asif Zulfiqar",
    img: profileImg,
    id: "82787392700182",
    gender: "Male",
    reason: "Working",
    designation: "Supervisor",
  },
  {
    name: "Asif Zulfiqar",
    img: profileImg,
    id: "82787392700182",
    gender: "Male",
    reason: "On leave",
    designation: "Designer",
  },
  {
    name: "Asif Zulfiqar",
    img: profileImg,
    id: "82787392700182",
    gender: "Male",
    reason: "Working",
    designation: "Labor",
  },
  {
    name: "Asif Zulfiqar",
    img: profileImg,
    id: "82787392700182",
    gender: "Male",
    reason: "Working",
    designation: "Analyst",
  },
  {
    name: "Asif Zulfiqar",
    img: profileImg,
    id: "82787392700182",
    gender: "Male",
    reason: "Working",
    designation: "Designer",
  },
  {
    name: "Asif Zulfiqar",
    img: profileImg,
    id: "82787392700182",
    gender: "Male",
    reason: "On leave",
    designation: "Technician",
  },
  {
    name: "Asif Zulfiqar",
    img: profileImg,
    id: "82787392700182",
    gender: "Male",
    reason: "Working",
    designation: "Engineer",
  },
];

export const totalUsersData = [
  {
    name: "5",
    users: "10",
  },
  {
    name: "10",
    users: "250",
  },
  {
    name: "15",
    users: "150",
  },
  {
    name: "20",
    users: "400",
  },
  {
    name: "25",
    users: "300",
  },
  {
    name: "30",
    users: "400",
  },
  {
    name: "35",
    users: "555",
  },
];
export const totalSensorsData = [
  {
    name: "5",
    sensors: "10",
  },
  {
    name: "10",
    sensors: "250",
  },
  {
    name: "15",
    sensors: "150",
  },
  {
    name: "20",
    sensors: "400",
  },
  {
    name: "25",
    sensors: "300",
  },
  {
    name: "30",
    sensors: "400",
  },
  {
    name: "35",
    sensors: "555",
  },
];
export const totalSubscriptionPlansData = [
  {
    name: "5",
    plans: "10",
  },
  {
    name: "10",
    plans: "250",
  },
  {
    name: "15",
    plans: "150",
  },
  {
    name: "20",
    plans: "400",
  },
  {
    name: "25",
    plans: "300",
  },
  {
    name: "30",
    plans: "400",
  },
  {
    name: "35",
    plans: "555",
  },
];