import axios from "axios";

const URL = "https://tiny-cyan-hedgehog-suit.cyclic.app";
// const URL = "http://localhost:8000";

export const getSubscriber = async () => {
  try {
    return await axios.get(`${URL}/`);
  } catch (error) {
    console.log("Error while calling getSubscriber API", error);
  }
};

export const subscribe = async (subscriber) => {
  const userData = { chatId: subscriber.userId, location: subscriber.city};
  try {
    return await axios.post(`${URL}/subscribe`, userData);
  } catch (error) {
    console.log("Error while subcribing", error);
  }
};

export const unsubscribe = async(userId) =>{
  const userData = {chatId: userId};
  try {
    return await axios.post(`${URL}/unsubscribe`, userData);
  } catch (error) {
    console.log("Error while unsubcribing", error);
  }
}

export const updateCity = async(subscriber) => {
  const userData = { chatId: subscriber.userId, location: subscriber.city};
  console.log("userData", userData);
  try{
    return await axios.put(`${URL}/${userData.chatId}`, userData);
  } catch (error) {
    console.log("Error while updating city", error);
  }
}

export const getOneSubscriber = async(userId) => {
  try{
    console.log("Fetching detail of", userId);
    return await axios.get(`${URL}/${userId}`);
  } catch (error) {
    console.log("Error while getting one subscriber detail", error);
  }
}