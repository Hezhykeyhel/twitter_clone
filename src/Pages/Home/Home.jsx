import React from "react";
import ProfileSide from "../../Components/ProfileSide/ProfileSide";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <div className="postSide">Posts</div>
      <div className="rightSection">RightSection</div>
    </div>
  );
};

export default Home;
