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
// import Test from "./Test/Test";
import Covid from "./Function/Covid";
import FormikForm from "./Form/FormikForm";

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
            {/* <Route path="/test">
              <Test></Test>
            </Route> */}
            <Route path="/user" exact>
              <ListUser></ListUser>
            </Route>
            <Route path="/user/:id">
              <DetailUser></DetailUser>
            </Route>
            <Route path="/covid">
              <Covid />
            </Route>
            <Route path="/form">
              <FormikForm />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
