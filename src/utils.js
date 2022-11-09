import axios from "axios";

const omdb = axios.create({
    baseURL:"https://www.omdbapi.com/",
    timeout:15000,
    params:{
        apikey:"3d4aee3"
    }
});

export default omdb;