import React from "react";
import "./SubscribeForm.css";
import { useState } from "react";
import { subscribe } from "./services/api";

function SubscribeForm() {
  const defaultValue = {
    userId: "",
    city: "",
    lastUpdated: new Date(),
  };

  const [subscriber, setSubscriber] = useState(defaultValue);

  const onValueChange = (e) => {
    // we are using "...subscriber" so that new parameter gets append into it
    var settingSubscriber = { ...subscriber, [e.target.name]: e.target.value };
    setSubscriber(settingSubscriber);
    console.log(subscriber);
  };

  // const subscribe = async () => {
  //   var response = await subscribe(userId, city);
  // };
  return (
    <div class="container">
      <div class="inputs">
        <label>Enter UserId</label>
        {/* <input type="number" placeholder="e.g. 123" /> */}
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
        <button type="submit">Subscribe</button>
      </div>
    </div>
  );
}

export default SubscribeForm;
