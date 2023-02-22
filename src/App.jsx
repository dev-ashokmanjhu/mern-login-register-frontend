import "./App.css";
import LogIn from "./components/LogIn";
import "tachyons";
import SignUp from "./components/SignUp";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LogIn />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={approuter} />
    </div>
  );
}

export default App;
