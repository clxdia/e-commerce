import Image from "next/image";
import React from "react";

const ItemHomeUI = ({ item }) => {
  return (
    <div>
      <p>{item.attributes.title}</p>
      <img
        src={"http://localhost:1337" + item.attributes.img.data.attributes.url}
        alt="/"
      />
    </div>
  );
};

export default ItemHomeUI;
