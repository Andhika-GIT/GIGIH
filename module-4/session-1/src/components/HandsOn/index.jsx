import React from "react";
import Content from "./Content";

const index = () => {
  const data1 = {
    title: "data-1",
    image: "https://picsum.photos/id/1/200/200",
  };

  const data2 = {
    title: "data-2",
    image: "https://picsum.photos/id/2/200/200",
  };

  return (
    <>
      <Content data={data1} size={500} />
      <Content data={data2} />
    </>
  );
};

export default index;
