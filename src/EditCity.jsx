import React from "react";
import "./SubscribeForm.css";
import { useState, useEffect } from "react";
import { updateCity, getOneSubscriber } from "./services/api";
import { useNavigate, useParams } from "react-router-dom";

const EditCity = async() => {
  const defaultValue = {
    userId: "",
    city: "",
  };
  const [subscriber, setSubscriber] = useState(defaultValue);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    subscriberDetail();
  },[]);

  const subscriberDetail = async () => {
    var response = await getOneSubscriber(id);
    // setSubscriber(userId = reponse.data._id)
    // setSubscriber(city = reponse.data.city);
    console.log(response.data);
    console.log("getting 1 data: ", id);
  }


  const onValueChange = (e) => {
    // we are using "...subscriber" so that new parameter gets append into it
    var settingSubscriber = { ...subscriber, [e.target.name]: e.target.value };
    setSubscriber(settingSubscriber);
  };

  const handleEdit = async () => {
    // var response = await updateCity(subscriber);
    // console.log(response.data);
    console.log("handle edit hit");
    navigate("/");
    
  };

  return (
    <div class="container">
      <div class="inputs">
        <label>Enter userId</label>
        <input
          onChange={(e) => onValueChange(e)}
          name="userId"
          type="number"
          placeholder="e.g. 123"
          value={subscriber.userId}
        />
        <label>Enter City</label>
        <input
          onChange={(e) => onValueChange(e)}
          name="city"
          placeholder="e.g. Delhi"
          value={subscriber.city}
        />
        {/* <button type="submit" onClick={handleEdit}>Edit User</button> */}
        <button type="submit" >Edit User</button>
      </div>
    </div>
  );
}

export default EditCity;
