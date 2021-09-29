import React from "react"
import { connect } from "react-redux"
import { ReactNavbar } from "react-responsive-animate-navbar"
// import Logout from "./auth/Logout"
// import { checkAuth } from "../actions/auth"
// import Homepage from '../Homepage/Homepage'
// import Dashboard from '../Dashboard/Dashboard'



const Navbar = ({ authChecked, loggedIn, currentUser }) => {

  const Homepage = () => <h1>Home</h1>
  const Dashboard = () => <h1>Dashboard</h1>
  const Login = () => <h1>Login</h1>
  const Signup = () => <h1>Signup</h1>
  const Logout = () => <h1>Logout</h1>
  return (
    <div
      style={{ backgroundColor: "#5e17eb", minHeight: "13vh", width: "100%" }}
    >
      <ReactNavbar
        color="#191919"
        logo="https://svgshare.com/i/aSR.svg"
        menu={[
          { name: "HOME", to: "/", component: Homepage },
          { name: "DASHBOARD", to: "/dashboard", component: Dashboard },
          { name: "LOGIN", to: "/login", component: Login},
          { name: "SIGNUP", to: "/signup", component: Signup},
          { name: "LOGOUT", to: "/logout", component: Logout}
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/amal-abdu/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Blog",
            url: "https://njeshe-ichi.me/",
            icon: ["fab", "readme"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/_zanezane_/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "https://twitter.com/njesheamal",
            icon: ["fab", "twitter"],
          },
        ]}
        sticky
      />
    </div>
  )
}
const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
  return { authChecked, loggedIn, currentUser };
};

export default connect(mapStateToProps)(Navbar);
