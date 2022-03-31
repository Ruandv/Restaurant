import React, { useState } from "react";
import styles from "./Menu.module.scss";

function Menu() {
  var [totalAmount, setTotalAmount] = useState("0.00");
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var menu = [
    { description: "TBC", detail: "No Detail", price: "75" },
    {
      description: "Chicken Stroganoff",
      detail: "Served with Basmati rice, brussels sprouts and sweet potato",
      price: "75",
    },
    {
      description: "Pork Belly",
      detail: "Served with mashed potato, carrots and pumpkin",
      price: "75",
    },
    {
      description: "Checken Lasagna",
      detail: "Served with roasted vegetables and sweet glazed carrots",
      price: "75",
    },
    {
      description: "Beef Stroganoff",
      detail: "Served with rice, green beans and cauliflower with white soauce",
      price: "75",
    },
    { description: "Vetkoek", detail: "2x Curry Mince Vetkoeks", price: "60" },
    { description: "TBC", detail: "No Detail", price: "75" },
  ];
  const calculateAmount = () => {
    var amt = 0;
    [0, 1, 2, 3, 4, 5, 6].forEach((x) => {
      if (
        (document.getElementById(`complete${x}`) as HTMLInputElement).checked ===
        true
      ) {
       amt += parseInt(menu[x].price);
      }
    });
    setTotalAmount((amt).toString());
  };

  return (
    <>
      <div className={styles.container}>
        {[0, 1, 2, 3, 4, 5, 6].map((x) => {
          let menuItem = new Date(2020,4,4).getDay() + x;
          return (
            <div className={`${styles.card} ${days[menuItem] ?? styles.hide}`}>
              <div className={styles.heading}>
                {`${days[menuItem]} - ${menu[menuItem]?.description}`}
                <div className={styles.checkbox}>
                  <input
                    id={`complete${x}`}
                    type={"checkbox"}
                    onChange={calculateAmount}
                  ></input>
                </div>
              </div>
              <div className={styles.description}>{menu[menuItem]?.detail}</div>
              <div className={styles.price}>{menu[menuItem]?.price}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>Total : R{totalAmount}</div>
    </>
  );
}

export default Menu;
