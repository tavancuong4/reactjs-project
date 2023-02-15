import logo from "./logo.svg";
import "./App.scss";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/Todo">
              <ListTodo></ListTodo>
            </Route>
            <Route path="/about">
              <MyComponent></MyComponent>
            </Route>
            <Route path="/user" exact>
              <ListUser></ListUser>
            </Route>
            <Route path="/user/:id">
              <DetailUser></DetailUser>
            </Route>
          </Switch>
          {/* <p>Hello word with cuong chi co</p> */}

          {/* <MyComponent></MyComponent> */}
          {/* <ListTodo></ListTodo> */}
          {/* <Home></Home> */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
