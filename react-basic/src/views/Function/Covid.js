import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Covid.css";
import moment from "moment";

function Covid() {
  const [dataCovid, setDataCovid] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        let res = await axios.get(
          "https://api.covid19api.com/country/vietnam?from=2021-10-20T00%3A00%3A00Z&to=2021-11-10T00%3A00%3A00Z"
        );
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
        }
        setDataCovid(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  //   useEffect(async () => {
  //     let res = await axios.get(
  //       "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
  //     );
  //     let data = res && res.data ? res.data : [];
  //     if (data && data.length > 0) {
  //       data.map((item) => {
  //         item.Date = moment(item.Date).format("DD/MM/YYYY");
  //         return item;
  //       });
  //     }
  //     setDataCovid(data);
  //   }, []);
  return (
    <>
      <h2> Danh sách Covid Các ngày dịch đỉnh điểm </h2>
      <table>
        {console.log(">> check data :", dataCovid)}
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Xác nhận</th>
            <th>Tích cực</th>
            <th>Ko qua khỏi</th>
            <th>Quốc gia</th>
          </tr>
        </thead>
        <tbody>
          {dataCovid.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Date}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Active}</td>
                <td>{item.Deaths}</td>
                <td>{item.Country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Covid;
