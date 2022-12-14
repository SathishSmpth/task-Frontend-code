import React, { useEffect, useState } from "react";

const GetDetailByDate = ({ getDetailByDate }) => {
  const [getDetail, setGetDetail] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/givedate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: getDetailByDate,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setGetDetail(data.data);
        console.log(data);
      });
  }, [getDetailByDate]);

  console.log(getDetail);

  return (
    <div className="table-responsive mt-5">
        
      <table className="table table-hover table-success table-striped">
        <tbody>
          <tr>
            <td>First name</td>
            <td>Last Name</td>
            <td>Phone</td>
            <td>Date of Joining</td>
            <td>Email</td>
            <td>Password</td>
            <td>State</td>
          </tr>
          {getDetail?.map((data) => (
            <tr>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.phone}</td>
              <td>{data.date}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>{data.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetDetailByDate;
