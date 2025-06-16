import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), "weather-data.json");

const readFile = async () => {
  const file = await promises.readFile(filePath);
  return JSON.parse(file);
};
const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (e) {
    return false;
  }
};

const saveKeyValue = async ({ key, value }) => {
  let data = {};

  if (await isExist(filePath)) {
    data = await readFile();
  }
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};
const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const data = await readFile();
    return data[key];
  }
  return;
};

export { saveKeyValue, getKeyValue };
