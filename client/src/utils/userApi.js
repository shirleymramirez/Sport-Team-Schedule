import axios from "axios";

export default {
  parentsignup: function(userData) {
    return axios.post("/api/parent/signup", userData)
  },

  coachsignup: function(userData) {
    return axios.post("/api/coach/signup", userData)
  },

  parentlogin: function(userData) {
    return axios.post("/api/parent/login", userData);
  },

  coachlogin: function(userData) {
    return axios.post("/api/coach/login", userData);
  },

  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },

  getUsers: function() {
    return axios.get("/api/users");
  },

  saveUsers: function(userData) {
    return axios.post("api/users/", {
      username: userData.username,
      password: userData.password
    });
  }
};
