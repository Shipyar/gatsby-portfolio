import React from "react"

import { StyledBurger } from "./styles"

const Burger = ({ onClick, menuOpen }) => (
  <StyledBurger
    onClick={onClick}
    menuOpen={menuOpen}
    href="#"
    aria-label="Oliver Abraham"
    className={`menu${menuOpen ? "-toggle" : ""}`}
  >
    <div />
    <div />
    <div />
  </StyledBurger>
)

export default Burger
