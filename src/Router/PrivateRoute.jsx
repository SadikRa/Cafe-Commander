import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Oval
          height={80}
          width={80}
          color="blue"
          ariaLabel="oval-loading"
          secondaryColor="grey"
          strokeWidth={2}
        />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoute;
