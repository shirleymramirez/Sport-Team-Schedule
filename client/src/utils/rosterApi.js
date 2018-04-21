import axios from "axios";

export default {
	Add: function(data) {
		console.log(data);
		// console.log("hello");
		// add
		return axios.post("/api/rosters",{
			name: data.name,
			age: data.age,
			team: data.team
		});
	},
	getAll: function(){
			// show or get
			return axios.get("/api/rosters");
	}
};