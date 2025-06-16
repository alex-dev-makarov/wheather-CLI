import chalk from "chalk";
import dedent from "dedent-js";
const printError = (error) => {
  console.log(`${chalk.bgRed('ERROR')} ${error}`);
};
const printSuccess = (message) => {
  console.log(`${chalk.bgGreen('Success')} ${message}`);
};
const printHelp = () => {
  console.log(
    dedent(`${chalk.bgCyan(" HELP ")} 
    No parameters: Display the current weather for the default city
    -s [CITY] Set the default city for weather lookups
    -h  Display this help message
    -t [API_KEY] Save your API key for accessing weather data
    `)
  );
};

export { printError, printSuccess, printHelp };
