import React from "react";
import "./SubscribeForm.css";
import { useState } from "react";
import { subscribe } from "./services/api";

function SubscribeForm() {
  const defaultValue = {
    userId: "",
    city: "",
  };
  const [subscriber, setSubscriber] = useState(defaultValue);

  const onValueChange = (e) => {
    // we are using "...subscriber" so that new parameter gets append into it
    var settingSubscriber = { ...subscriber, [e.target.name]: e.target.value };
    setSubscriber(settingSubscriber);
  };

  const handleSubscribe = async () => {
    var response = await subscribe(subscriber);
    console.log(response.data);
    window.location.reload(false);
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
        <button type="submit" onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  );
}

export default SubscribeForm;
