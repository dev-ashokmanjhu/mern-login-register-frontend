import "./App.css";
import LogIn from "./components/LogIn";
import "tachyons";
import SignUp from "./components/SignUp";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";

const AppLayout = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <ParticlesBg type="lines" bg={true} />
      <Outlet />
    </>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  const approuter = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      ),
      children: [
        {
          path: "/",
          element: isLoggedIn ? <Home /> : <Navigate to="/login" />,
        },
        {
          path: "/login",
          element: isLoggedIn ? (
            <Navigate to="/home" />
          ) : (
            <LogIn setIsLoggedIn={setIsLoggedIn} />
          ),
        },
        {
          path: "/register",
          element: isLoggedIn ? (
            <Navigate to="/home" />
          ) : (
            <SignUp setIsLoggedIn={setIsLoggedIn} />
          ),
        },
        {
          path: "/home",
          element: isLoggedIn ? <Home /> : <Navigate to="/login" />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={approuter} />
    </div>
  );
}

export default App;
