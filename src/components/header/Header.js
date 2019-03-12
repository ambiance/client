import React from "react";

class MessageBoardApp extends React.Component{
    render() {
        return(
            <header>
    <a href="index.html"><img src="./assets/img/auraLogo.png" alt="auraLogo" class="headerLogo" href="#home" /></a>

    <nav>
      <ul>
        <li class="liActive">
          <a class="btnActive" href="./index.html">Home</a>
        </li>
        <li>
          <a class="btn" href="./about.html">About Aura</a>
        </li>
        <li>
          <a class="btn" href="./meetTheTeam.html">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
        );
    }
}