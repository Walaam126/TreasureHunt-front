import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "65px 0 25px 0",
      }}
    >
      <Link exact to="/random">
        <button type="button" className="btn btn-outline-dark mt-3">
          Explore Random Items
        </button>
      </Link>
      {user ? (
        <Link exact to="/treasures">
          <button type="button" className="btn btn-outline-dark mt-3">
            Explore Treasures
          </button>
        </Link>
      ) : (
        true
      )}
    </div>
  );
};

export default Home;
