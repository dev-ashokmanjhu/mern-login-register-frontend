import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Loader from "../assets/svg.gif";
import Gif from "../assets/Circles-menu-3.gif";

const LogIn = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data2 = {
      email: email,
      password: password,
    };
    const res = axios
      .post("https://mern-login-signup-backend.vercel.app/login", data2)
      .then((res) => {
        navigate("/home");
        setIsLoading(false);
        alert("Login Success");
        setIsLoggedIn(true);
        localStorage.setItem("token", res.data.token);
      })

      .catch((err) => {
        alert(err.response.data.message), setIsLoading(false);
      });
  };
  return (
    <article className="br3 ba mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 ">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1  ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db  lh-copy " htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba  hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mv3">
              <label className="db  lh-copy " htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba  hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </fieldset>
          <div className="">
            {isLoading ? (
              <img src={Loader} alt="" />
            ) : (
              <input
                className="b ph3 pv2 input-reset ba   grow pointer  dib"
                type="submit"
                value={"Log In"}
                onClick={handleSubmit}
              />
            )}
          </div>
          <div className="lh-copy mt3">
            <p
              className=" link dim db pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default LogIn;
