import { RES_IMAGE } from "../utility/constants";

const RestoCard = ({restData}) => {
  const {info} = restData
  return(
    <div className="card-container">
      <div className = "image"> 
        <img src = {RES_IMAGE+ info.cloudinaryImageId} width={200} height={150}></img>
      </div>
      <div className="card">
        <h2>{info.name}</h2>
        <h5>{info.avgRating} .{info.sla.slaString}</h5>
        <h6>{info.costForTwo}</h6>
        <p>{info.cuisines.join(",")}</p>
      </div>
    </div>
  )
};

export default RestoCard;