import { useState } from "react";
import { RES_DATA } from "../utility/constants";
import RestoCard from "./RestoCard";
const Body = () => {
  const [listofRes, setlistofRes] = useState(RES_DATA);
  return(
    <div>
      <div className="search">
        <input type ="text"></input>
        <button type ="submit">Search</button>
        <button onClick={()=>{
          let filterData=listofRes.filter((res)=>
          res.card.card.info.avgRating >= 4.5)
          setlistofRes(filterData);
        }}>Top rated</button>
      </div>
      <div className="restcard">
        {listofRes.map((rest) =>
        (<RestoCard 
          key={rest.card.card.info.id}
          restData={rest.card.card}>
        </RestoCard>))}
      </div>
    </div>
  )
};

export default Body;