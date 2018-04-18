import axios from "axios";

export default {
	Add: function(data) {
		console.log(data);
		// console.log("hello");s
		return axios.post("/api/add",{
			name: data.name,
			age: data.age,
			team: data.team
		});
	},
	getAll: function(req, res){
		console.log(req);
		return axios.get("/api/show");
	}
};