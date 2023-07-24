import React from "react";

const HandsOn = () => {
  const profile = {
    name: "andhika prasetya Nugraha",
    image: "https://picsum.photos/300?grayscale",
  };
  return (
    <div style={{ padding: "20px", border: "1px solid", textAlign: "left" }}>
      <h1 style={{ color: "lightcoral" }}>{profile.name}</h1>
      <img
        style={{ borderRadius: "50%", width: "100px" }}
        src={profile.image}
        alt=""
        className="avatar"
      />
    </div>
  );
};

export default HandsOn;
