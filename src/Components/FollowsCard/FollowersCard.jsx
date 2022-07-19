import React from "react";
import "./FollowersCard.css";
import { FollowersData } from "../../Data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="followersCard">
      <h3>Who is following you?</h3>
      {FollowersData.map((data, index) => {
        return (
          <div className="followerCard">
            <div key={index}>
              <img src={data.img} alt="users" className="followerImg" />
              <div className="name">
                <span>{data.name}</span>
                <span>@{data.username}</span>
              </div>
            </div>
            <button className="button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
