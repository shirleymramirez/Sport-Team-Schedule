import axios from "axios";

export default {
  schedule: function(scheduleData) {
    console.log(scheduleData);
    return axios.post("/api/schedule", {
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