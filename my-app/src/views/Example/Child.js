import React from "react";

class Child extends React.Component {
  state = {
    showJobs: false,
  };

  handleShow = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleDelete = (job) => {
    this.props.deleteAJob(job);
  };
  render() {
    let { array } = this.props;
    let { showJobs } = this.state;
    return (
      <div>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShow()}>Show</button>
          </div>
        ) : (
          <div>
            <div>
              {array.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <></> <></>{" "}
                    <span
                      onClick={() => this.handleDelete(item)}
                      style={{ color: "red" }}
                    >
                      &nbsp; x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShow()}>Hide</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Child;
