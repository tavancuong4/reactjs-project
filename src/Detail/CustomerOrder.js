import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "../App";

const CustomerOrder = (props) => {
  const [dataUser, setDataUser] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const setDetail = useContext(ThemeContext);
  useEffect(() => {
    (async function () {
      try {
        let res = await axios.get(`http://localhost:8000/api/customers/${id}`);
        let data = res && res.data ? res.data : [];
        setDataUser(data);
      } catch (e) {
        console.error(e);
      }
    })();
    console.log("check data:", dataUser);
  }, [dataUser, id]);
  //   console.log(dataUser);
  let isEmptyObj = Object.keys(dataUser).length === 0;
  return (
    <div className="list-detail">
      <div className="contain">
        {isEmptyObj === false && (
          <>
            <div className="title">
              Orders for {dataUser.firstName} {dataUser.lastName}
            </div>
            <div className="product">
              <div>
                {dataUser.orders?.[0].productName}{" "}
                <span>$ {dataUser.orders?.[0].itemCost}</span>
              </div>
              <div>
                {dataUser.orders?.[1].productName}{" "}
                <span>$ {dataUser.orders?.[1].itemCost}</span>
              </div>
            </div>

            <hr />
            <div>
              <span>
                ${" "}
                {parseFloat(
                  dataUser.orders?.[0].itemCost + dataUser.orders?.[1].itemCost
                ).toFixed(2)}
              </span>
            </div>
          </>
        )}
      </div>
      <div
        className="back"
        onClick={() => {
          navigate("/card");
          setDetail(false);
        }}
      >
        View all Customers
      </div>
    </div>
  );
};

export default CustomerOrder;
