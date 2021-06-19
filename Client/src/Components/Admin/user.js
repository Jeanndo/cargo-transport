import React from "react";

const user = ({ user }) => {
  return (
    <>
      <p style={{ color: "#fff" }}>
        <b>Fname:</b>
        {user?.name}
      </p>
      <p style={{ color: "#fff" }}>
        <b>Lname:</b>
        {user?.lastName}
      </p>
      <p style={{ color: "#fff" }}>
        <b>Email:</b>
        {user?.email}
      </p>
      <p style={{ color: "#fff" }}>
        <b>Role:</b>
        {user?.role}
      </p>
      <p style={{ color: "#fff" }}>
        <b>Phone:</b>
        {user?.phone}
      </p>
      <p style={{ color: "#fff" }}>{user?.password}</p>
    </>
  );
};

export default user;
