// 6fee53da09c6e243558fd176ff63e8eb

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
