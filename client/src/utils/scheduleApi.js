import axios from "axios";

export default {
  getSchedules: function() {
    return axios.get("/api/schedules");
  },
  saveSchedules: function(scheduleData) {
  	console.log(scheduleData);
    return axios.post("api/schedules/", {
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