 import React, { useState } from "react";

 function Item({ name, category }) {
   const [isInCart, setIsInCart] = useState(false);

   const handleClick = () => {
     setIsInCart((prevMode) => !prevMode);
   };

   return (
     <li className={isInCart ? "in-cart" : ""}>
       <span>{name}</span>
       <span className="category">{category}</span>
       <button className={isInCart ? "remove" : "add"} onClick={handleClick}>
         Add to Cart
       </button>
     </li>
   );
 }

 export default Item;