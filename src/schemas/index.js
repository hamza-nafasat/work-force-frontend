import * as Yup from "yup";

export const projectSchema = Yup.object({
  projectName: Yup.string().required("Project name is required"),
  startDate: Yup.date().required("Start date is required"),
  dueDate: Yup.date().required("Due date is required"),
  projectDescription: Yup.string().required("Project description is required"),
  location: Yup.string().required("Location is required"),
  area: Yup.array().required("Geofence is required"),

  labours: Yup.array().min(1, "At least one labour must be selected"),
});

export const vehicleSchema = Yup.object({
  vehicleName: Yup.string().required("Vehicle Name is required"),
  brand: Yup.string().required("Brand Name is required"),
  identificationNumber: Yup.string().required("Identification Number is required"),
  plateNumber: Yup.string().required("License Plate Number is required"),
  color: Yup.string().required("Color is required"),
  image: Yup.mixed().required("Image is required"),
});

export const sensorSchema = Yup.object({
  sensorName: Yup.string().required("Sensor Name is required"),
  type: Yup.string().required("Type is required"),
  ip: Yup.string().required("Ip is required"),
  port: Yup.string().required("Port is required"),
  url: Yup.string().required("URL is required"),
  uniqueId: Yup.string().required("Unique Id is required"),
});

export const scoreCardSchema = Yup.object({
  violationName: Yup.string().required("violation name is required"),
  violationCategory: Yup.string().required("violation category is required"),
  scorePoints: Yup.string().required("score point is required"),
  details: Yup.string().required("details is required"),
});

export const profileSchema = Yup.object({
  phoneNumber: Yup.string().required("phone number is required"),
  password: Yup.string().required("password is required"),
  confirmPassword: Yup.string()
    .required("confirm Password is required")
    .oneOf([Yup.ref("password"), null], "password and confirm password must match"),
});

export const configurationSchema = Yup.object({
  timeInterval: Yup.string().required("time interval is required"),
  dbName: Yup.string().required("database name is required"),
  ip: Yup.string().required("IP is required"),
  serverAddress: Yup.string().required("server address is required"),
  portNumber: Yup.string().required("port number is required"),
  userName: Yup.string().required("username is required"),
  password: Yup.string().required("password is required"),
  db: Yup.string().required("database name is required"),
});

export const violationReportSchema = Yup.object({
  violationType: Yup.string().required("Violation Type is required"),
  workforce: Yup.string().required("Workforce is required"),
  labour: Yup.string().required("labour is required"),
});

export const usersSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().required("Confirm password is required"),
  role: Yup.string().required("Role is required"),
  address: Yup.string().required("Address is required"),
  image: Yup.mixed().required("Image is required"),
});
