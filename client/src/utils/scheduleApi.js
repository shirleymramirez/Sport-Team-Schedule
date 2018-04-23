import axios from "axios";

export default {
<<<<<<< HEAD
  schedule: function(scheduleData) {
    console.log(scheduleData);
    return axios.post("/api/schedule", {
=======
  // schedule: function(scheduleData) {
  //   return axios.post("/api/schedule", scheduleData);
  // },
  // login: function(userData) {
  //   return axios.post("/api/login", userData);
  // },
  // getSchedule: function(id) {
  //   return axios.get("/api/schedule/" + id);
  // },
  getSchedules: function() {
    return axios.get("/api/schedules");
  },
  saveSchedules: function(scheduleData) {
  	console.log(scheduleData);
    return axios.post("api/schedules/", {
>>>>>>> 916bc10eca43d77bfc77e789ad9a179b2e1902a7
      place: scheduleData.place,
      date: scheduleData.date,
      time: scheduleData.time,
      snack: scheduleData.snack
    });
  },
  getSchedules: function() {
    // show or get
    return axios.get("/api/schedule");
  }
};