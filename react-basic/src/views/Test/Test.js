import React, { Component } from "react";

class Test extends Component {
  render() {
    const postItem = React.createElement(
      "div",
      {
        className: "post-item",
      },
      React.createElement("h2", { title: "Học React tại F8" }, "Học Reactjs"),
      React.createElement("p", {}, "Học React từ cơ bản đến")
    );

    const bai1 = React.createElement(
      "h1",
      { title: "Hello", className: "heading" },
      "Hello guys!"
    );
    const bai2 = React.createElement(
      "ul",
      null,
      React.createElement("li", null, "Javascript"),
      React.createElement("li", null, "ReactJs")
    );

    return (
      <div>
        <div>Xin chào mừng các bạn đến với cương chí</div>
        <div>{postItem}</div>
        <div>{bai1}</div>
        <div>{bai2}</div>
      </div>
    );
  }
}

export default Test;
