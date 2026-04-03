import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { isLogedin, isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();

  if (!isLogedin && !isAuthenticated) {
    const redirectPath = location.pathname + location.search;
    navigate(`/login?redirect=${encodeURIComponent(redirectPath)}`);
  }

  return children;
};

export default ProtectedRoute;
