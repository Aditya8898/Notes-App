import React from "react";
import RightCard from "./RightCard";

const RightContent = ({ users }) => {
  return (
    <div id="right" className="flex gap-6 overflow-x-auto p-4">
      {users.map((user, index) => (
        <RightCard
          key={index}
          id={index}
          img={user.img}
          tag={user.tag}
          color={user.color}
        />
      ))}
    </div>
  );
};

export default RightContent;
