import axios from "axios";

export default {
  // Gets the conversation with the given id
  getMessages: function() {
    return axios.get("/api/messages/");
  },
};

