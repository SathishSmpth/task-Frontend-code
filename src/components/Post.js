import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

const Posts = () => {
  const navigate = useNavigate();

  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState("");

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [Phone, setPhone] = useState("");
  const [State, setState] = useState("");

  const handleSubmit = async () => {
    if (validator.current.allValid()) {
      alert("You submitted the form and stuff!");
      console.log(FirstName, LastName, Email, dob, Password, Phone, State);
      postData();
    } else {
      validator.current.showMessages();
      forceUpdate();
    }
  };

  const postData = async () => {
    await fetch("http://localhost:4000/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Email,
        password: Password,
        firstName: FirstName,
        lastName: LastName,
        phone: Phone,
        state: State,
        date: dob,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          alert("Your data was stored Successfully");
          navigate("/");
        } else {
          alert("Your data not was stored Successfully. Signup Again your Details");
          forceUpdate();
        }
      });
  };

  return (
    <div className="container-fluid p-3">
      <h1 className="text-center">Register</h1>
      <div className="row g-3 form">
        <div className="row g-3 ">
          <label className="form-label">Name</label>
          <div className="col-md-6">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              name="FirstName"
              type="text"
              className="form-control"
              placeholder="First Name"
              value={FirstName}
            />
            {validator.current.message(
              "First name",
              FirstName,
              "required|alpha|min:3"
            )}
          </div>
          <div className="col-md-6">
            <input
              name="LastName"
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
            {validator.current.message(
              "last name",
              LastName,
              "required|alpha|min:3"
            )}
          </div>
        </div>
        <div className="col-md-6">
          <label className="form-label">Date Of Birth</label>
          <input
            onChange={(e) => setDob(e.target.value)}
            name="DateOfBirth"
            type="date"
            className="form-control"
          />
          {validator.current.message("Date of birth", dob, "required")}
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            name="Phone"
            type="number"
            className="form-control"
          />
          {validator.current.message("Phone", Phone, "required")}
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="Email"
            type="email"
            className="form-control"
            placeholder="XYZ@example.com"
          />
          {validator.current.message("Email", Email, "required|email")}
        </div>
        <div className="col-md-6">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="Password"
            type="password"
            className="form-control"
            placeholder="Password"
          />
          {validator.current.message("title", Password, "required|regex")}
        </div>

        <div className="col-md-4">
          <label className="form-label">State</label>
          <select
            onChange={(e) => setState(e.target.value)}
            name="State"
            className="form-select"
          >
            <option defaultValue>Select State</option>
            <option>Tamilnadu</option>
            <option>Andrapradesh</option>
            <option>...</option>
            <option>...</option>
          </select>
          {validator.current.message("State", State, "required|alpha")}
        </div>
        <div className="col-12">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
