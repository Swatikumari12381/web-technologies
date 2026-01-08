import { RES_IMAGE } from "../utility/constants";

const RestoCard = ({restData}) => {
  const { name, cloudinaryImageId,avgRating,costForTwo,cuisines,sla} = restData.card.card.info 

  return(
    <div className="card-container">
      <div className = "image"> 
        <img src = {RES_IMAGE+ cloudinaryImageId} width={200} height={150}></img>
      </div>
      <div className="card">
        <h2>{name}</h2>
        <h5>{avgRating} .{sla.slaString} </h5>
        <h6>{costForTwo}</h6>
        <p>{cuisines.join(",")}</p>
      </div>
    </div>
  )
};

export default RestoCard;