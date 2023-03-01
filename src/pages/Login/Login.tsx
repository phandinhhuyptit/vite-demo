import { IUser } from "@type/user";
import { useAuthContext } from "provider/AuthorProvider";
import React from "react";

function Login() {
  const { signIn } = useAuthContext();
  const login = () => {
    const user: IUser = {
      id: "2",
      username: "kelvin",
      email: "kelvin@gmail.com",
      provider: "local",
      confirmed: true,
      blocked: false,
      createdAt: "2023-02-27T01:06:16.262Z",
      updatedAt: "2023-02-27T03:57:04.809Z",
    };
    signIn(user);
  };

  return (
    <div>
      <button className="p-2 bg-sky-400" onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;
