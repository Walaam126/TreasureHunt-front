import React from "react";

const TreasureItem = ({ treasure }) => {
  return (
    <>
      <div
        class="card mx-3 mb-3 text-center"
        style={{ width: "17rem", padding: "0px" }}
      >
        <div class="card-body">
          <h5 class="card-title">{treasure.name}</h5>
        </div>
      </div>
    </>
  );
};

export default TreasureItem;
