import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data2 = {
      firstName: firstName,
      lastName:lastName,
      email: email,
      password: password,
    };
    const res = axios
      .post("https://mern-login-signup-backend.vercel.app/register", data2)
      .then((res) => {
        alert("Register Success");
        navigate("/home");
        setIsLoggedIn(true);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <article className="br3 ba  mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 ">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1  ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db  lh-copy " htmlFor="name">
             First   Name
              </label>
              <input
                className="pa2 input-reset ba  hover-bg-black hover-white w-100"
                type="text"
                name="name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
<div className="mt3">

              <label className="db  lh-copy " htmlFor="name">

                Last Name

              </label>

              <input

                className="pa2 input-reset ba  hover-bg-black hover-white w-100"

                type="text"

                name="name"

                onChange={(e) => setLastName(e.target.value)}

              />

            </div>
            <div className="mt3">
              <label className="db  lh-copy " htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba  hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba   grow pointer  dib"
              type="submit"
              value="Register"
              onClick={handleSubmit}
            />
          </div>
          <div className="lh-copy mt3">
            <p
              className=" link dim db pointer"
              onClick={() => navigate("/login")}
            >
              Log In
            </p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default SignUp;
