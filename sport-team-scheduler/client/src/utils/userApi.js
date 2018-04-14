import axios from "axios";

export default {
  signup: function(userData) {
    return axios.post("/api/signup", userData);
  },
  login: function(userData) {
    return axios.post("/api/login", userData);
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  saveUsers: function(userData) {
    return axios.post("api/users/", {
      username: userData.username,
      password: userData.password
    });
  }
};