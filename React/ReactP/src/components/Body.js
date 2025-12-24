import { RES_DATA } from "../utility/constants";
import RestoCard from "./RestoCard";
const Body = () => {
  return(
    <div>
      <div className="search">
        <input type ="text"></input>
        <button type ="search">Submit</button>
      </div>
      <div className="restcard">
        {RES_DATA.map((rest) =>
        (<RestoCard 
          key={rest.card.card.info.id}
          restData={rest.card.card}>
        </RestoCard>))}
      </div>
    </div>
  )
};

export default Body;