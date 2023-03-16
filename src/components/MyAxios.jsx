import React, { useEffect, useState } from "react";
import axios from "axios";
const MyAxios = () => {
  const myApi = "https://api.storerestapi.com/products/running-sneaker";
  const [err, setErr] = useState();
  useEffect(() => {
    axios
      .get(myApi)
      .then((res) => console.log(res))
      .catch((err) => setErr(err.message));
  }, []);

  return <></>;
};

export default MyAxios;
