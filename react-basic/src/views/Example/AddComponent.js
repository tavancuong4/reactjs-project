import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleClick = (event) => {
    event.preventDefault();
    console.log("check data: ", this.state);
    if (!this.state.title || !this.state.salary) {
      alert("vui long nhap gia tri ");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="fname">title :</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleTitle(event)}
          />
          <br />
          <label htmlFor="lname">Salary :</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleSalary(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="submit"
            onClick={(event) => this.handleClick(event)}
          />
        </form>
      </div>
    );
  }
}
export default AddComponent;
