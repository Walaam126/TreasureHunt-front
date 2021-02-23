import React from "react";
import { GiSkeletonKey } from "react-icons/gi";
import { NavList } from "../styles";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { signout } from "../store/actions/authAction";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  return (
    <nav
      className="navbar navbar-expand"
      style={{
        backgroundColor: "#fefafb", // main background color
      }}
    >
      <Link exact to="/" className="navbar-brand mt-4 mb-4">
        <GiSkeletonKey />
        Treasure Hunt
      </Link>
      <div className="navbar-nav ml-auto">
        {user ? (
          <>
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "15px 25px 0 0",
                // padding: "25px 25px 0 0",
              }}
            >
              <b>Welcome, {user.username} !</b>
              <FaSignOutAlt onClick={() => dispatch(signout())} />
            </p>
          </>
        ) : (
          <>
            <Link exact to={"/signup"}>
              <button type="button" class="btn btn-success mt-3 mr-2">
                Sign Up
              </button>
            </Link>

            <Link exact to={"/signin"}>
              <button type="button" class="btn btn-success mt-3 mr-4">
                Sign In
              </button>
            </Link>
          </>
        )}
        <NavList exact to="/">
          Home
        </NavList>
        <NavList exact to="/random">
          Random
        </NavList>
        {user && <NavList to="/treasures">Treasures</NavList>}
      </div>
    </nav>
  );
};

export default Navbar;
