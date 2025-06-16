#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, printSuccess, printError,printWeather } from "./services/log.service.js";
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { getWeather } from "./services/weather.service.js";
const saveToken = async (token) => {
  if (!token.length) {
    printError("Token was not given");
    return;
  }
  try {
    await saveKeyValue({ key: TOKEN_DICTIONARY.token, value: token });
    printSuccess("Token saved");
  } catch (e) {
    printError(e.message);
  }
};
const saveCity = async (city) => {
  if (!city.length) {
    printError("City was not given");
    return;
  }
  try {
    await saveKeyValue({ key: TOKEN_DICTIONARY.city, value: city });
    printSuccess("City saved");
  } catch (e) {
    printError(e.message);
  }
};
const getForcast = async () => {
  try {
    const city = await getKeyValue(TOKEN_DICTIONARY.city)
    const weather = await getWeather(city);
    printWeather({data: weather})
  } catch (e) {
    console.log(e?.response?.status , 'ss');
    
    if (e?.response?.status == 404) {
      printError("City is not correct");
    } else if (e?.response?.status == 401) {
      printError("Token is not correct");
    } else {
      printError(e.message);
    }
  }
};
const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
    return;
  }
if(args.s) {
    return saveCity(args.s)
}
  if (args.t) {
    return saveToken(args.t);
  }
  return getForcast()
};

initCLI();
