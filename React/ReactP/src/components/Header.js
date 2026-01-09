import { useState } from "react";

const Header = () => {
  const [button,setButton] = useState("login")
  return(
    <div className="heading">
      <img src = "https://img.freepik.com/premium-vector/food-delivery-online-concept-vector_1162942-1594.jpg?semt=ais_hybrid&w=740&q=80" alt ="trill" width={80}></img>
      <div className="inner-heading"> 
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>
            <button className="button" onClick={()=>{
              setButton(button === "login" ? "logout" : "login");
            }}>{button}</button>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Header;