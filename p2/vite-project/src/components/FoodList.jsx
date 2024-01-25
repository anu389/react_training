import React from "react";
import FoodItem from "./FoodItem";
import Error from "./Error";

export default function FoodList(props) {
  let item = props.item;
  if (item.length == 0) {
    return <Error />
     
  } else {
    return (
      <>
        {console.log(props.item)}
        <div className="container pt-4">
          <h3 className="pb-3">Food Items</h3>
          <ul className="list-group">
            {item.map((x) => {
              return <FoodItem x={x} />;
            })}
          </ul>
        </div>
      </>
    );
  }
}
