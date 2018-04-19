import axios from "axios";

export default {
  schedule: function(scheduleData) {
    return axios.post("/api/schedule", scheduleData);
  },
  // login: function(userData) {
  //   return axios.post("/api/login", userData);
  // },
  getSchedule: function(id) {
    return axios.get("/api/schedule/" + id);
  },
  getSchedules: function() {
    return axios.get("/api/schedule");
  },
  saveSchedules: function(scheduleData) {
  	console.log(scheduleData);
    return axios.post("api/schedules/", {
      place: scheduleData.place,
      date: scheduleData.date,
      time: scheduleData.time,
      snack: scheduleData.snack
    });
  }
};