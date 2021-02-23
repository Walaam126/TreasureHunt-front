import React from "react";
import { GiSkeletonKey } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { signout } from "../store/actions/authAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const user = useSelector((state) => state.authReducer.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const usersignout = () => {
    dispatch(signout());
    history.push("/");
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <GiSkeletonKey />
            Treasure Hunt
          </a>
          <form className="d-flex">
            <Link to="/">
              <button type="button" className="btn btn-outline-primary me-3">
                Home
              </button>
            </Link>

            {user ? (
              <>
                <p style={{ padding: "1.5em 1em" }}> {user.username}</p>
                <button className="btn btn-light" onClick={usersignout}>
                  logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <button
                    type="button"
                    className="btn btn-outline-primary me-3"
                  >
                    Sign in
                  </button>
                </Link>
                <Link to="/signup">
                  <button type="button" className="btn btn-outline-secondary">
                    Sign up
                  </button>
                </Link>
              </>
            )}
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
