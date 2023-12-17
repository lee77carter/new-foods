import React, { useState } from "react";

const Food = ({ name }) => {
  const [tried, setTried] = useState(false);


  return (
    <li className={tried ? "strike" : ""} onClick={() => setTried(!tried)}> {name}</li>
  );
};

export default Food;
