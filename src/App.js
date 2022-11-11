import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
// bakeryData.forEach((item) => {
//   item.image = process.env.PUBLIC_URL + "/" + item.image;
// });
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({});

  const addCart = (item) => {
    const name = item.name;
    if (cart.hasOwnProperty(name)){
      setCart({...cart, [name]: cart[name] + 1});
    } else {
      setCart({...cart, [name]: 1});
    }
  }; 

  return (
    <div className="App">
      
      <div className="container">
        
        <div style={{width: "66%"}}>
          <h1>My Bakery</h1>
          <div className="bakeryItemsWrapper">
            {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
              <BakeryItem item={item} addCart={addCart} key={index} /> // replace with BakeryItem component
            ))}
          </div>
        </div>

        <div className="bakeryCart">
          <h2>Cart</h2>
          {
            (Object.keys(cart).length > 0) ? 
            (Object.keys(cart).map((key, index) => {
              return (<div key={index}>x{cart[key]} {key}</div>)
            })
            ) : <div>Cart is empty</div>
          }
          {
            (Object.keys(cart).length > 0) && <div><br></br>Total: ${Object.keys(cart).reduce((value, key) => {
              return value + cart[key] * bakeryData.find(item => item.name === key).price;
            }, 0)}</div>
          }
        </div>
      </div>
      </div>
  );
}

export default App;