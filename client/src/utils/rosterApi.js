import axios from "axios";

export default {
	Add: function(data) {
		console.log(data);
		// console.log("hello");
		return axios.post("/api/add",{
			name: data.name,
			age: data.age,
			team: data.team
		});
	},
	getAll: function(){
			return axios.get("/api/show");
	}
};