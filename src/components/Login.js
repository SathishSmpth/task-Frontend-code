import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  const login = () => {
    console.log(email, password);
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 201) {
          setUserData(data);
          navigate(`/user/${data?.data?._id}`)
          setEmail("");
          setPassword("");
        } else if (data.status === 204) {
          console.log("Password is Incorrect");
        } else if (data.status === 404) {
          setErrorMsg(true);
        }
      });
    console.log(userData);
  };

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">email address or Phone</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="email or Phone"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form-label">password</label>
        <input
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-outline-success" onClick={login}>
          Login
        </button>
        {errorMsg && <div className="text-danger">{errorMsg}</div>}
      </div>
      <div className="text-primary">
        <Link to="/post">Create an Account or Register</Link>
      </div>
    </div>
  );
};

export default Login;
