import React from "react";
import classes from "./Sell.module.css";
import SellForm from "./SellForm";

const Sell = () => {
  const sendProductData = async (userData) => {
    const res = await fetch(
      "https://react-1-2aeca-default-rtdb.asia-southeast1.firebasedatabase.app/products.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
      }
    );
    console.log(res);
  };
  return (
    <div className={classes.formContainer}>
      <SellForm onSubmit={sendProductData} />
    </div>
  );
};

export default Sell;
