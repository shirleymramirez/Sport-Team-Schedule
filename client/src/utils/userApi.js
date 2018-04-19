import axios from "axios";

export default {
  signup: function(userData) {
    return axios.post("/api/auth/signup", userData);
    // .then(response =>{
    //   // successful signup, redirect to
    //   if(response.userData.success){
    //     response.redirect("/api/parent");
    //   } else {
    //     console.log("error", )
    //   }
    // })
    // .catch(response => {
    //   // handle error response from the server
    //     console.log("error")
    // });
    // }
  },
  login: function(userData) {
    return axios.post("/api/auth/login", userData);
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
