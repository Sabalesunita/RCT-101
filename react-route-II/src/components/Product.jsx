import axios from "axios";
import "./product.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const Product = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <div className="container">
      {data.map((data) => {
        return (
          <Link key={data.id} to={`/product/${data.id}`}>
            <img
              style={{ width: "200px", height: "200px", margin: "10px",border:"1px solid black" }}
              src={data.image}
              alt=""
            />
          </Link>
        );
      })}
    </div>
  );
};
