import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import userNam from "../images/nam.jpg";
import userNu from "../images/nu.jpg";
import "./CardView.scss";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";

const CardView = (props) => {
  const [users, setUsers] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  const [showData, setShowData] = useState([]);
  const [total, setTotal] = useState(4);
  const [totalNut, setTotalNut] = useState(0);
  const history = useNavigate();
  let select = React.createRef();
  const setDetail = useContext(ThemeContext);

  useEffect(() => {
    (async function () {
      try {
        let res = await axios.get("http://localhost:8000/api/customers");
        let data = res && res.data ? res.data : [];
        setUsers(data);
        setShowData(res.data.slice(0, total));
        setTotalNut(Math.ceil(res.data.length / total));
      } catch (error) {}
    })();
  }, []);
  const taoDaySo = (number) => {
    const arr = [];
    for (let i = 1; i <= number; i++) {
      arr.push(i);
    }
    return arr.map((element) => {
      return (
        <div key={element}>
          <button onClick={() => chuyenTrang(element)}> {element}</button>
        </div>
      );
    });
  };
  const chuyenTrang = (element) => {
    console.log("set Element:", element);
    let end = total * element;
    setShowData(users.slice(end - total, end));
  };
  const thayDoiSoLuong = () => {
    console.log(select.current.value);
    setTotal(select.current.value);
    setShowData(users.slice(0, select.current.value));
    setTotalNut(Math.ceil(users.length / select.current.value));
  };
  return (
    <div className="container">
      <div className="filter">
        <div>Filter</div>
        <input type="text" onChange={(e) => setKeyWord(e.target.value)} />
      </div>
      <div className="list-user">
        {showData
          .filter((val) => {
            if (keyWord === "") {
              return val;
            } else if (
              val.firstName.toLowerCase().includes(keyWord.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item, index) => {
            return (
              <Card style={{ width: "30rem" }} className="contain" key={index}>
                <Card.Title className="bg-success one">
                  {item.firstName} {item.lastName}
                </Card.Title>

                <Row className="tow ">
                  <Col md={4}>
                    {item.gender === "male" ? (
                      <Card.Img
                        variant="top"
                        src={userNam}
                        style={{ width: "120px", hight: "120px" }}
                      />
                    ) : (
                      <Card.Img
                        variant="top"
                        src={userNu}
                        style={{ width: "120px", hight: "120px" }}
                      />
                    )}
                  </Col>
                  <Col md={8} className="fw-normal">
                    <>
                      <Card.Text>{item.city}</Card.Text>
                      <Card.Text>{item.state.name}</Card.Text>
                      <Card.Link
                        onClick={() => {
                          history(`/card/${item.id}/CardDetail`);
                          setDetail(true);
                        }}
                      >
                        View Orders
                      </Card.Link>
                    </>
                  </Col>
                </Row>
              </Card>
            );
          })}
      </div>
      <div className="bottom">
        {taoDaySo(totalNut)}
        <select name="" ref={select} onChange={thayDoiSoLuong}>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
      </div>
    </div>
  );
};

export default CardView;
