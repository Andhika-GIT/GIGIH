import React from "react";
import Content from "./Content";

// dummy
import family from "../../utils/family";

const index = () => {
  return (
    <>
      <ul>
        {family.map((item, index) => {
          return (
            <li key={index}>
              <Content family={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default index;
