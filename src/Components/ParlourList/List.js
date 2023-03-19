
import {  useEffect, useState } from "react";
import axios from "axios";

const List = () => {
  const [data, setdata] = useState([]);
  
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="List">
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="ListCard" key={index}>
            <img src={item.image} alt="" />
            <div>
            <h3> {item.title} [Parlour Name]</h3>
            <p>{item.price} [Parlour Location]</p>
            <p>{item.price} [Other Info]</p>

            
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;