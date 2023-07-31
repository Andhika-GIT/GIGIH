import React from "react";

const Content = ({ family, size = 200 }) => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid",
        textAlign: "left",
        width: size,
        marginBottom: "30px",
      }}
    >
      <h3 style={{ color: "lightcoral" }}>{family.name}</h3>
      <p style={{ color: "lightcoral" }}>{family.gender}</p>

      <img
        style={{ borderRadius: "50%", width: "100px" }}
        src={family.profile}
        alt=""
        className="avatar"
      />
    </div>
  );
};

export default Content;
