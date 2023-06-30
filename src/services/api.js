import axios from "axios";

const URL = "https://tiny-cyan-hedgehog-suit.cyclic.app/";

export const getSubscriber = async () => {
  try {
    return await axios.get(`${URL}`);
  } catch (error) {
    console.log("Error while calling getSubscriber API", error);
  }
};

export const subscribe = async () => {
  try {
    return await axios.post(`${URL}/subscribe`);
  } catch (error) {
    console.log("Error while subcribing", error);
  }
};
