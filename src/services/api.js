import axios from "axios";

const URL = "https://tiny-cyan-hedgehog-suit.cyclic.app/";

export const getSubscriber = async () =>{
    try{
        return await axios.get(`${URL}`);
        
    } catch (error){
        console.log('Error while calling getTasks API', error);
    }
  }