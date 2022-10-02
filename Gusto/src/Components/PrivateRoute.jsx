import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return children;
}
export default PrivateRoute;
