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
import { useState } from "react";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const token = localStorage.getItem("token");
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: token ? <Home /> : <Navigate to="/login" />,
        },
        {
          path: "/login",
          element: <LogIn setIsAuthenticated={setIsAuthenticated} />,
        },
        {
          path: "/register",
          element: <SignUp setIsAuthenticated={setIsAuthenticated} />,
        },
        {
          path: "/home",
          element: token ? <Home /> : <Navigate to="/login" />,
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
