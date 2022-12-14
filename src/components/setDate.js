import React from "react";
import {Link} from "react-router-dom";

const SetDate = ({setDate}) => {

  return (
    <div>
      <div className="mb-3 container">
        <label className="form-label">email address or Phone</label>
        <input
          type="date"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="email or Phone"
          name="email"
          onChange={(e) => setDate(e.target.value)}
        />
        <Link className="btn btn-outline-success" to="/getdetailbydate">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SetDate;
