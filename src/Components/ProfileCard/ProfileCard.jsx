import React from "react";
import "./ProfileCard.css";
import coverImage from "../../img/cover.jpg";
import profileImage from "../../img/profileImg.jpg";

const ProfileCard = () => {
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={coverImage} alt="profileImages" />
        <img src={profileImage} alt="profileImages" />
      </div>
      <div className="profileName">
        <span>Egbetayo Damilola</span>
        <span>Programmer</span>
      </div>
      <div className="followStats">
        <hr />
        <div>
          <div className="follow">
            <span>9,946</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>46</span>
            <span>Followings</span>
          </div>
        </div>
        <hr />
      </div>
      <span>My Profile</span>
    </div>
  );
};

export default ProfileCard;
