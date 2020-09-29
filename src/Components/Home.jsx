import React, { Component } from "react";
import "./../Css/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div class="topic">
          <h1 className="app-name">My Diary</h1>
          <p className="app-discription">Online Journal</p>
          <p className="record">
            Whether you're looking for a tool to record your daily emotions....
          </p>
        </div>
        <div className="signinBtnWrapper">
          <button className="home-button">Signin</button>
          <p className="account">
            Don't have an account? <span className="home-signup">Signup</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
