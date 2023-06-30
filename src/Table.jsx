import * as React from "react";
import { useState, useEffect } from "react";
import { getSubscriber, unsubscribe, updateCity } from "./services/api";
import SubscribeForm from "./SubscribeForm";
import EditCity from "./EditCity";
import "./Table.scss";

const Table = () => {
  const defaultValue = [
    {
      _id: "",
      city: "",
      lastUpdated: "",
    },
    {},
  ];
  const [subcriberList, setSubcriberList] = useState(defaultValue);

  const getSubcriberList = async () => {
    var response = await getSubscriber();
    setSubcriberList(response.data.reverse());
  };

  useEffect(() => {
    getSubcriberList();
  }, []);

  const handleunsubscribe = async (userId) => {
    var response = await unsubscribe(userId);
    alert(response.data);
    getSubcriberList();
  };
  const handleEdit = async (userId) => {
    // var response = await updateCity(user);
    console.log()
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <SubscribeForm />
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>City</th>
            <th>Edit</th>
            <th>unsubscribe</th>
          </tr>
        </thead>
        <tbody>
          {subcriberList.map((props, index) => (
            <tr key={index}>
              <td key={props._id}>{props._id}</td>
              <td>{props.city}</td>
              <td>
                <span
                  className="btn"
                  onClick={() => handleEdit(props._id)}
                >
                  Edit
                </span>
              </td>
              <td>
                <span
                  className="btn-del"
                  onClick={() => handleunsubscribe(props._id)}
                >
                  Remove
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
