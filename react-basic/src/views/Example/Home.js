import React from "react";
//import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/anh1.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.props.history.push("/todo");
  //     }, 3000);
  //   }
  handleDeleteUser = (user) => {
    console.log("check user : ", user);
    this.props.deleteUserRedux(user);
  };
  handleCreateUser = () => {
    this.props.createUserRedux();
  };
  render() {
    console.log("check props:", this.props.dataRedux);
    let listUsers = this.props.dataRedux;
    return (
      <div>
        <div>Hello work from Homepape with CUONG</div>
        <div>
          <img
            src={logo}
            alt=""
            style={{ width: "200px", height: "200px", marginTop: "20px" }}
          />
        </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}{" "}
                  <button
                    style={{ marginLeft: "20px" }}
                    onClick={() => this.handleDeleteUser(item)}
                  >
                    x
                  </button>
                </div>
              );
            })}
        </div>
        <button onClick={() => this.handleCreateUser()}>Add new</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userdelete) =>
      dispatch({ type: "DELETE_USER", payload: userdelete }),
    createUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
