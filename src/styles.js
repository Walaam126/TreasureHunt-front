import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const UserForm = styled.form`
  //   width: 500px;
  padding: 60px;
  padding-top: 50px;
  padding-bottom: 80px;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  background: #e9ecef;
  text-align: center;
  //   transition: 0.25s;
  //   margin-top: 100px;
`;

export const List = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const Navitem = styled(NavLink)`
  // color: white;
  padding: 0.2em 1em;
  // font-size: 18px;

  text-decoration: none !important;
`;
