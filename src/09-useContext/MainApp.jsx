import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { NavBar } from "./NavBar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider>
      <br />
      <NavBar></NavBar>
      <hr />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </UserProvider>
  )
}
