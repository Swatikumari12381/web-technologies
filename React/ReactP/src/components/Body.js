import { useEffect, useState } from "react";
import { RES_DATA } from "../utility/constants";
import RestoCard from "./RestoCard";

const Body = () => {
  const [listofRes, setlistofRes] = useState([]);

  useEffect(() => {
    fetchdata();
  },[])

  const fetchdata = async() =>{
    let response= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&collection=80475&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    let result= await response.json();
    let extractedData = result.data.cards;
    let exData =extractedData.filter((filterData,index)=> {
      if(index > 1) {
        return filterData.card.card;
      }
    })
    console.log(exData);
    setlistofRes(exData);
  }
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
        {listofRes.map((rest, index) =>
        (<RestoCard 
          key={index}
          restData={rest}>
        </RestoCard>))}
      </div>
    </div>
  )
};

export default Body;