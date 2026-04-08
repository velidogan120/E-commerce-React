import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { useVerifyToken } from "../../hooks/useAuth";
import Loading from "../../components/shared/Loading";

const ProtectedRoute = () => {
  const { data, isPending, isError, isIdle, mutate } = useVerifyToken();
  const location = useLocation();
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  useEffect(() => {
    if (token) {
      mutate();
    }
  }, [mutate, token]);

  const redirectPath = `${location.pathname}${location.search}`;

  if (!token) {
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(redirectPath)}`}
        replace
      />
    );
  }

  if (isPending || isIdle) {
    return <Loading />;
  }

  if (isError || !data) {
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(redirectPath)}`}
        replace
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
