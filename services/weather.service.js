import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
import axios from "axios";
const getWeather = async (city) => {
  let token = await getKeyValue(TOKEN_DICTIONARY.token);
if (!token) {
    token = process.env.TOKEN;
    console.log("Using default token from environment.");
  }

  if (!token) {
    throw new Error("API token is missing. Provide one with 'weather token <API_KEY>' or via .env");
  }
  const {data} = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token ,
        lang: "en",
        units: "metric",
      },
    }
  );
  return data

};

export { getWeather };
