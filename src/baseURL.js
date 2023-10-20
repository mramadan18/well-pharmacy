import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://backend.well-medic.com",
});

export default baseUrl;
