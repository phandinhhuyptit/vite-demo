import { useAuthContext } from "provider/AuthorProvider";
import React, { useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useUpdateEffect } from "usehooks-ts";

function useAuth() {
  const { state } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const user = state?.authUser;
  const path = location.pathname;

  useEffect(() => {
    if (!user) navigate("/login");
    if (user && path === "/login") {
      navigate("/book");
    }
  }, [user]);
}

export default useAuth;
