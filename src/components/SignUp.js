import React from "react";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { UserForm } from "../styles";
import { signup } from "../store/actions/authAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  const [pass, setpass] = useState("password");
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleChange = (event) =>
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  const showPass = () => {
    pass === "password" ? setpass("text") : setpass("password");
  };

  const Submit = (event) => {
    // event.preventDefault();
    dispatch(signup(user, history));
    return false;
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            {" "}
            <UserForm onSubmit={handleSubmit(Submit)}>
              <h1 className="mb-5">Sign up</h1>
              <div class="input-group mb-3">
                <input
                  type="text"
                  // class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon2"
                  onChange={handleChange}
                  value={user.username}
                  name="username"
                  ref={register({ required: true })}
                />
                <span class="input-group-text" id="basic-addon2">
                  <FiUser size="1.5em" />
                </span>
                {errors.username && "*User name is required"}
              </div>
              <div class="input-group mb-3">
                <input
                  type="email"
                  // class="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon2"
                  onChange={handleChange}
                  value={user.email}
                  name="email"
                  ref={register({ required: true })}
                />
                <span class="input-group-text" id="basic-addon2">
                  <AiOutlineMail size="1.5em" />
                </span>
                {errors.email && "*Email Address is required"}
              </div>
              <div class="input-group mb-3">
                <input
                  type={pass}
                  // class="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon2"
                  onChange={handleChange}
                  value={user.password}
                  name="password"
                  ref={register({ required: true })}
                />
                <span class="input-group-text" id="basic-addon2">
                  {pass === "password" ? (
                    <AiFillEye size="1.5em" onClick={showPass} />
                  ) : (
                    <AiFillEyeInvisible size="1.5em" onClick={showPass} />
                  )}
                </span>
                {errors.password && "*Password is required"}
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block mb-4 float-end"
              >
                Sign Up
              </button>
            </UserForm>
          </div>

          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
