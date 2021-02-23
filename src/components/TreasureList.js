import React from "react";
import { List } from "../styles";
import { useSelector } from "react-redux";
import TreasureItem from "./TreasureItem";
const TreasureList = () => {
  const treasures = useSelector((state) => state.ThingsReducer.treasures);
  const treasureList = treasures.map((treasure) => (
    <TreasureItem treasure={treasure} />
  ));
  console.log(
    "🚀 ~ file: TreasureList.js ~ line 19 ~ TreasureList ~ treasureList",
    treasureList
  );
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
