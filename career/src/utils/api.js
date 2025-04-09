import axios from "axios";

const API_URL = "http://localhost:5000/api/chat";

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(API_URL, { message });
    return response.data.reply;
  } catch (error) {
    console.error("Error sending message:", error);
    return "Sorry, I am unable to respond at the moment.";
  }
};