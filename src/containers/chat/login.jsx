import { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [formType, setFormType] = useState("login");
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const toggleForm = () => {
    setFormType(formType === "login" ? "signup" : "login");
  };

  return (
    <div className="login-page">
      <div className="card">
        {formType === "login" ? (
          <form onSubmit={onLogin}>
            <div className="title">Login</div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)} required
            />

            <input
              type="password"
              name="secret"
              placeholder="Password"
              onChange={(e) => setSecret(e.target.value) } required
            />
            <button type="submit">LOG IN</button>
            <button onClick={toggleForm}>New User? Click here to Sign Up.</button>
          </form>
        ) : (
          <form onSubmit={onSignup}>
            <div className="title">Sign Up</div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)} required
            />
            <input
              type="password"
              name="secret"
              placeholder="Password"
              onChange={(e) => setSecret(e.target.value)} required
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)} required
            />
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)} required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)} required
            />
            <button type="submit">SIGN UP</button>
            <button onClick={toggleForm}>Already have an account? Click here to login.</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;

