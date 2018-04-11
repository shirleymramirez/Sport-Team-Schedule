import axios from "axios";

export default {
  // Gets all conversation
  getConversationsByUser: function(userId) {
    return axios.get("/api/conversations/user" + userId);
  },
  // Gets the conversation with the given id
  getConversation: function(id) {
    return axios.get("/api/conversations/" + id);
  },
  // Deletes the conversation with the given id
  deleteConversation: function(id) {
    return axios.delete("/api/conversations/" + id);
  },
  // Saves a conversation to the database
  saveConversation: function(conversationData) {
    return axios.post("/api/conversations", conversationData);
  }
};


// export default {
//   // Gets all books
//   conversation: {
//     getConversations: function() {
//         return [
//             {   persons: ["Shirley ", "Kassi ", "Derrick ", "Bryant "], 
//                 message: "", 
//                 id: 1 
//             }, 
//             {   persons: ["She ", "Kas ", "Der ", "Bry"], 
//                 message: "", 
//                 id: 2 
//             }, 
//             {   persons: ["John ", "Nick"], 
//                 message: "", 
//                 id: 3 
//             }
//         ];
//         //axios.get("/api/conversations");
//     },
//     // Gets the conversation with the given id
//     getConversation: function(id) {
//         return [
//             { message: "Hello", name: "Shirley", id: "01", date: "" }, 
//             { message: "From", name: "Kassi", id:"02", date: "" }, 
//             { message: "Here", name: "Bryant", id: "03", date: "" }, 
//             { message: "Hello", name: "Derrick", id: "04", date: "" }
//         ];
//     //   return axios.get("/api/conversations/" + id);
//     },
//     // Deletes the conversation with the given id
//     delete: function(id) {

//       return axios.delete("/api/conversations/" + id);
//     },
//     // Saves a conversation to the database
//     save: function(conversationData) {

//       return axios.post("/api/conversations", conversationData);
//     }
//   }
// };
