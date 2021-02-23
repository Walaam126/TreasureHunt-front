import React from "react";
import { List } from "../styles";
import { useSelector } from "react-redux";
import TreasureItem from "./TreasureItem";
import { Redirect } from "react-router-dom";
const TreasureList = () => {
  const treasures = useSelector((state) => state.ThingsReducer.treasures);
  const user = useSelector((state) => state.authReducer.user);
  if (!user) {
    return <Redirect to="/" />;
  }
  const treasureList = treasures.map((treasure) => (
    <TreasureItem treasure={treasure} />
  ));
  return (
    <div>
      <h1
        className="mb-5 mt-5"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Treasure List
      </h1>
      <List>{treasureList}</List>
    </div>
  );
};

export default TreasureList;
