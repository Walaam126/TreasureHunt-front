import React from "react";
import { List } from "../styles";
import { useSelector } from "react-redux";
import RandomItem from "./RandomItem";
const RandomList = () => {
  const randoms = useSelector((state) => state.ThingsReducer.randoms);
  const randomList = randoms.map((random) => <RandomItem random={random} />);
  console.log(
    "🚀 ~ file: RandomList.js ~ line 19 ~ RandomList ~ randomList",
    randomList
  );
  return (
    <div>
      <h1 className="mb-5 mt-5">Random List</h1>
      <List>{randomList}</List>
    </div>
  );
};

export default RandomList;
