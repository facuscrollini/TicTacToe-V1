import React from "react";

export const Navbar = () => {

    return (
        <nav className="navbar bg-body-tertiary" style={{background : "rgb(241, 241, 239)"}}>
  <div className="container my-2 d-flex">
    <div className="ms-auto flex-grow-1 me-5">
        <div className="ps-5 border border rounded-pill"style={{background: "rgb(50, 50, 50)"}}>
    <img src="https://www.svgrepo.com/show/510273/tic-tac-toe.svg" alt="Logo" width="30" height="30" className="bg-white rounded-circle m-1 position-relative align-text-center"></img>
    <a className="navbar-brand align-middle fs-2 " href="#" style={{fontFamily : "Pacifico", color: "rgb(241, 241, 239)"}}>TicTacToe</a>
    </div>
    </div>
    <div className=" justify-content-end">
      <div className="d-flex justify-content-end flex-row">

        <a className="p-2 nav-link" href="#">Contact</a>
        <a className="p-2 nav-link disabled fs-5" aria-disabled="true" style={{fontFamily: "Bebas Neue", color: "rgb(50, 50, 50)"}}>#TICTACBROTHERS</a>
      </div>
    </div>
  </div>
</nav>
    )
}