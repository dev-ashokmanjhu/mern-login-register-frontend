import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LogIn = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data2 = {
      email: email,
      password: password,
    };
    const res = axios
      .post("https://mern-login-signup-backend.vercel.app/login", data2)
      .then((res) => {
        setIsLoggedIn(true);
        localStorage.setItem("token", res.token);
      })
      .then(navigate("/home"))
      .catch((err) => alert(err.message));
  };
  return (
    <article className="br3 ba  mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 ">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba  bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
              onClick={handleSubmit}
            />
          </div>
          <div className="lh-copy mt3">
            <p
              className="f6 link dim db pointer"
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
