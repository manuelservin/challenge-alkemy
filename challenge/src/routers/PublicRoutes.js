import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const user = false;
  return user.logged ? <Navigate to="/marvel" /> : children;
};

export default PublicRoutes;
