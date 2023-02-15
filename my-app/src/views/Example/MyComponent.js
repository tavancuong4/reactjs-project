import React from "react";
import Child from "./Child";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    array: [
      { id: "01", title: "developer", salary: "400" },
      { id: "02", title: "tester", salary: "600" },
      { id: "03", title: "manager", salary: "1000" },
    ],
  };
  addNewJob = (job) => {
    this.setState({
      array: [...this.state.array, job],
    });
  };
  deleteAJob = (job) => {
    let arrJob = this.state.array;
    arrJob = arrJob.filter((item) => item.id !== job.id);
    this.setState({
      array: arrJob,
    });
  };
  render() {
    return (
      <div>
        <AddComponent addNewJob={this.addNewJob}></AddComponent>

        <Child array={this.state.array} deleteAJob={this.deleteAJob}></Child>
      </div>
    );
  }
}

export default MyComponent;
