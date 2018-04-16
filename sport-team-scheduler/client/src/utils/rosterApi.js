import axios from "axios";

export default {
	create: function (data) {
		return axios.post("/api/add/");
	},
};