import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <div className="container  mt-5">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <Link to="/random">
            <button type="button" className="btn btn-outline-dark me-3">
              Explore Random Items
            </button>
          </Link>
          {user ? (
            <button type="button" className="btn btn-outline-dark me-3">
              Explore Treasurs
            </button>
          ) : (
            true
          )}
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Home;
