import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full relative w-80 shrink-0 rounded-4xl overflow-hidden shadow-lg">

      <img
        className="w-full h-full object-cover"
        src={props.img}
        alt="Profile"
      />
      <RightCardContent id={props.id} tag={props.tag} color ={props.color}/>
    </div>
  );
};

export default RightCard;
