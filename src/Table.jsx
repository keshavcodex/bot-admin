import * as React from "react";
import { useState, useEffect } from "react";
import { getSubscriber } from "./services/api";
import "./Table.scss";

const Table = () => {
  const defaultValue = [
    {
      _id: 0,
      city: "",
      lastUpdated: "",
    },
    {},
  ];
  const [subcriberList, setSubcriberList] = useState(defaultValue);
  console.log(subcriberList);
  console.log(subcriberList[0].city);
  const getSubcriberList = async () => {
    var response = await getSubscriber();
    setSubcriberList(response.data);
  };
  useEffect(() => {
    getSubcriberList();
  }, []);

  return (
    <div>
      <h1>Subcriber List</h1>

      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {subcriberList.map((props, index) => (
            <tr key={index}>
              <td key={props._id}>{props._id}</td>
              <td>{props.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
