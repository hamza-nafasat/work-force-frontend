import * as Yup from "yup";

export const usersSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  passportNumber: Yup.string().required("Passport Number is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  nationality: Yup.string().required("Nationality is required"),
  gender: Yup.string().required("Gender is required"),
  profession: Yup.string().required("Profession is required"),
  workingStatus: Yup.string().required("Working Status is required"),
  workingHoursStartTime: Yup.string().required(
    "Working hours start time is required"
  ),
  workingHoursEndTime: Yup.string().required(
    "Working hours end time is required"
  ),
  image: Yup.mixed().required("Image is required"),
});

export const projectSchema = Yup.object({
  projectName: Yup.string().required("Project name is required"),
  startDate: Yup.date().required("Start date is required"),
  dueDate: Yup.date().required("Due date is required"),
  projectDescription: Yup.string().required("Project description is required"),
  location: Yup.string().required("Location is required"),
  labours: Yup.array().min(1, "At least one labour must be selected"),
});

export const vehicleSchema = Yup.object({
  vehicleName: Yup.string().required("Vehicle Name is required"),
  brand: Yup.string().required("Brand Name is required"),
  identificationNumber: Yup.string().required(
    "Identification Number is required"
  ),
  licensePlateNumber: Yup.string().required("License Plate Number is required"),
  project: Yup.string().required("Project is required"),
  color: Yup.string().required("Color is required"),
  assignTo: Yup.string().required("Assign To is required"),
  sensor: Yup.string().required("Sensor is required"),
  image: Yup.mixed().required("Image is required"),
});
