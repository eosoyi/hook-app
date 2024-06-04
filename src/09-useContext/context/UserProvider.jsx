import React from "react"
import { UserContext } from "./UserContext"
const user = {
  id: 1244,
  username: "eosoyi",
  email: "eosoyi@outlook.com",
}
export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "mundo", user: user }}>
      {children}
    </UserContext.Provider>
  )
}
