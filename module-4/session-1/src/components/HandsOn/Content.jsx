import React from "react";

const Content = ({ data, size = 200 }) => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid",
        textAlign: "left",
        width: size,
      }}
    >
      <h1 style={{ color: "lightcoral" }}>{data.title}</h1>
      <img
        style={{ borderRadius: "50%", width: "100px" }}
        src={data.image}
        alt=""
        className="avatar"
      />
    </div>
  );
};

export default Content;
