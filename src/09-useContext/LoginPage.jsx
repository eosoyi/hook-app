import React, { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const {user} = useContext(UserContext);
  return (
    <>
      <h1>Login page <small>{user?.name}</small></h1>
      <hr />
      <pre>
        {JSON.stringify(user, null, 1)}
      </pre>
      <button className="btn btn-primary">cargar datos</button>
    </>
  )
}
