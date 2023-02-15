import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";

class DetailUser extends React.Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      console.log("check : id", this.props.match);
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : [],
      });
    }
  }

  handleBackButton = () => {
    this.props.history.push("/user");
  };
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <div>
        <div>Hello Detail USER MAN id: {this.props.match.params.id}</div>
        {isEmptyObj === false && (
          <>
            <div>
              User's name : {user.first_name} - {user.last_name}
            </div>
            <div>User's email : {user.email}</div>
            <div>
              <img src={user.avatar} alt="" />
            </div>
            <div>
              <button type="button" onClick={() => this.handleBackButton()}>
                Back
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}
export default withRouter(DetailUser);
