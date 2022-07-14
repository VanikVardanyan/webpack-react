import axios from "axios";
const url = "https://worldtimeapi.org/api/";

export const request = axios.create({
  baseURL: url,
});
