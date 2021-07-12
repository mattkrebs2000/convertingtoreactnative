import axios from "axios"; 

export default {
  //get users from the database
    getTodos: function () {
        console.log("looks like a connection")
      return axios.get("/api/todos");
    },
}