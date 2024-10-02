import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, user, redirect = "/login" }) => {
  if (!user) return <Navigate to={redirect} replace />;
  return children;
};

export default ProtectedRoute;
