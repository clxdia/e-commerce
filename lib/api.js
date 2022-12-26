import API_URL from "./apiUrl";

const getProducts = async (url) => {
  const res = await fetch(API_URL + url);
  const items = await res.json();
  return items.data;
};

export default getProducts;
