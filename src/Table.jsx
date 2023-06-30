import * as React from "react";
import { useState, useEffect } from "react";
import { getSubscriber } from "./services/api";
import SubscribeForm from "./SubscribeForm";
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
  const getSubcriberList = async () => {
    var response = await getSubscriber();
    setSubcriberList(response.data);
  };
  // const subscribe = async () => {
    // var response = await subscribe(chatId, city);
  // };
  useEffect(() => {
    getSubcriberList();
  }, []);

  return (
    <div>
      <h1>Admin Panel</h1>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>City</th>
            <th>Edit</th>
            <th>Unsubscribe</th>
          </tr>
        </thead>
        <tbody>
          {subcriberList.map((props, index) => (
            <tr key={index}>
              <td key={props._id}>{props._id}</td>
              <td>{props.city}</td>
              <td>
                <span type="submit" className="btn" >
                  Edit
                </span>
              </td>
              <td>
                <span type="submit" className="btn-del">
                  Remove
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <SubscribeForm />
    </div>
  );
};

export default Table;
