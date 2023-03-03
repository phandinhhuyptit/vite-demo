import { useAuthContext } from "provider/AuthorProvider";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useAuth() {
  const { state } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const user = state?.accessToken;
  const path = location.pathname;

  useEffect(() => {
    if (!user) navigate("/login");
    if (user && path === "/login") {
      navigate("/book");
    }
  }, [user]);
}

export default useAuth;
