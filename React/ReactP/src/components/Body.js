import { useEffect, useState } from "react";
import { RES_DATA } from "../utility/constants";
import RestoCard from "./RestoCard";

const Body = () => {
  const [listofRes, setlistofRes] = useState([]);
  const [filteredRes, setFilteredRes] =useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchdata();
  },[])

  const fetchdata = async() =>{
    let response= await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.97530&lng=77.59100&str=Egg&trackingId=undefined&submitAction=ENTER&queryUniqueId=ee0e16b8-9df7-9d1a-519c-0d15d34dd297&selectedPLTab=RESTAURANT");
    let result= await response.json();
    let extractedData = result.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards;
    console.log(extractedData);
    setlistofRes(extractedData);
    setFilteredRes(extractedData)
  }
  
  return(
    <div>
      <div className="search">
        <input type ="text" onChange={(e)=>{
          setSearchText(e.target.value);
        }}></input>
        <button onClick={()=>{
          let finaltext =filteredRes.filter((filtertext)=>
            filtertext.card.card.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        );
          setFilteredRes(finaltext);
        }}
        >
        Search</button>
        <button onClick={()=>{
          let filterData=listofRes.filter((res)=>
          res.card.card.info.avgRating >= 4.5)
          setFilteredRes(filterData);
        }}>Top rated</button>
      </div>
      <div className="restcard">
        {filteredRes.map((rest, index) =>
        (<RestoCard 
          key={index}
          restData={rest}>
        </RestoCard>))}
      </div>
    </div>
  )
};

export default Body;