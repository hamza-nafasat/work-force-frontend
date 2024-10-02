import { Suspense, lazy, useEffect } from "react";
import "./index.css";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import GlobalLoader from "./components/layout/GlobalLoader";
import ScrollToTop from "./components/shared/scrollToTop/ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { useGetMyProfileQuery } from "./redux/api/authApi";
import { userExist, userNotExist } from "./redux/reducer/authReducer";

const User = lazy(() => import("./pages/user"));
const Login = lazy(() => import("./pages/auth/Login"));
const ForgetPassword = lazy(() => import("./pages/auth/ForgetPassword"));
const Home = lazy(() => import("./pages/user/dashboard/home/Home"));
const ActiveDevices = lazy(() => import("./pages/user/dashboard/activeDevices/ActiveDevices"));
const Workforce = lazy(() => import("./pages/user/dashboard/workforce/Workforce"));
const DeviceData = lazy(() => import("./pages/user/dashboard/deviceData/DeviceData"));
const VehiclesData = lazy(() => import("./pages/user/dashboard/vehiclesData/VehiclesData"));
const Sos = lazy(() => import("./pages/user/dashboard/sos/Sos"));
const Projects = lazy(() => import("./pages/user/projects/Projects"));
const Realtime = lazy(() => import("./pages/user/maps/realtime/Realtime"));
const Geofence = lazy(() => import("./pages/user/maps/geofence/Geofence"));
const Vehicles = lazy(() => import("./pages/user/vehicles/Vehicles"));
const Users = lazy(() => import("./pages/user/users/Users"));
const Sensors = lazy(() => import("./pages/user/sensors/Sensors"));
const UsersViolations = lazy(() => import("./pages/user/violations/UsersViolations"));
const VehiclesViolations = lazy(() => import("./pages/user/violations/VehiclesViolations"));
const ScoreCard = lazy(() => import("./pages/user/scoreCard/ScoreCard"));
const Plans = lazy(() => import("./pages/user/plansAndPricing/Plans"));
const Transactions = lazy(() => import("./pages/user/plansAndPricing/Transactions"));
const AddProject = lazy(() => import("./pages/user/projects/AddProject"));
const UpdateProfile = lazy(() => import("./pages/user/settings/UpdateProfile"));
const VehicleDetail = lazy(() => import("./pages/user/vehicles/VehicleDetail"));
const UserDetail = lazy(() => import("./pages/user/users/UserDetail"));
const ProjectDetail = lazy(() => import("./pages/user/projects/ProjectDetail"));

function App() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useGetMyProfileQuery("");
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (data && data?.data) dispatch(userExist(data?.data));
    if (error) dispatch(userNotExist());
  }, [data, error, dispatch]);

  const loader = <GlobalLoader />;
  return isLoading || !user ? (
    loader
  ) : (
    <Router>
      <Suspense fallback={loader}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/user" element={<User />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="active-devices" element={<ActiveDevices />} />
            <Route path="workforce" element={<Workforce />} />
            <Route path="device-data" element={<DeviceData />} />
            <Route path="vehicles-data" element={<VehiclesData />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectDetail />} />
            <Route path="realtime" element={<Realtime />} />
            <Route path="geofence" element={<Geofence />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="vehicles/:id" element={<VehicleDetail />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<UserDetail />} />
            <Route path="sensors" element={<Sensors />} />
            <Route path="users-violation" element={<UsersViolations />} />
            <Route path="vehicles-violation" element={<VehiclesViolations />} />
            <Route path="score-card" element={<ScoreCard />} />
            <Route path="plans" element={<Plans />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="update-profile" element={<UpdateProfile />} />
            <Route path="Sos" element={<Sos />} />
            <Route path="add-project" element={<AddProject />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
