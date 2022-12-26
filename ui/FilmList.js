import React from "react";
import getProducts from "../lib/api";
import ItemHomeUI from "./ItemHomeUI";

async function FilmList() {
  const items = await getProducts("/films?populate=*");
  return (
    <div>
      {items.map((item) => (
        <ItemHomeUI item={item} key={item.id} />
      ))}
    </div>
  );
}

export default FilmList;
