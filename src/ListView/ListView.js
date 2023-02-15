import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Form, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import userNam from "../images/nam.jpg";
import userNu from "../images/nu.jpg";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";

const ListView = (props) => {
  const history = useNavigate();
  const [users, setUsers] = useState([]);
  const [showData, setShowData] = useState([]);
  const [total, setTotal] = useState(6);
  const [totalNut, setTotalNut] = useState(0);
  const [keyword, setKeyword] = useState("");
  const setDetail = useContext(ThemeContext);

  useEffect(() => {
    (async function () {
      try {
        let res = await axios.get("http://localhost:8000/api/customers");
        let data = res && res.data ? res.data : [];
        setUsers(data);
        setShowData(res.data.slice(0, total));
        setTotalNut(Math.ceil(res.data.length / total));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  const taoDaySo = (number) => {
    let arr = [];
    for (let i = 1; i <= number; i++) {
      arr.push(i);
    }
    return arr.map((item) => {
      return (
        <div key={item}>
          <button onClick={() => chuyenTrang(item)}>{item}</button>
        </div>
      );
    });
  };
  const chuyenTrang = (item) => {
    let end = total * item;
    setShowData(users.slice(end - total, end));
  };
  return (
    <div className="container" style={{ width: "100%", marginLeft: "120px" }}>
      <div className="filter mb-3">
        <div>Filter</div>
        <input type="text" onChange={(e) => setKeyword(e.target.value)} />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>img</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Order Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {showData
            .filter((val) => {
              if (keyword === "") {
                return val;
              } else if (
                val.firstName.toLowerCase().includes(keyword.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    {item.gender === "male" ? (
                      <Card.Img
                        variant="top"
                        src={userNam}
                        style={{ width: "50px", hight: "40px" }}
                      />
                    ) : (
                      <Card.Img
                        variant="top"
                        src={userNu}
                        style={{ width: "50px", hight: "40px" }}
                      />
                    )}
                  </td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>

                  <td>{item.state.name} </td>

                  <td>
                    $
                    {parseFloat(
                      item.orders?.[0].itemCost + item.orders?.[1].itemCost
                    ).toFixed(2)}
                  </td>

                  <td
                    className="back text-primary "
                    onClick={() => {
                      history(`/card/${item.id}/CardDetail`);
                      setDetail(true);
                    }}
                  >
                    Order View
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <div className="bottom text-black ms-1">{taoDaySo(totalNut)}</div>
    </div>
  );
};

export default ListView;
