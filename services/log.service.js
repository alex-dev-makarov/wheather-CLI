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
    Use:  npm start -- -s YOUR CITY
    `)
  );
};
const printWeather = ({data}) => {
  console.log(
    dedent(`${chalk.bgBlueBright(" WEATHER ") } 
   City: ${data.name} ${data.weather[0].description} 
   Temparture: ${data.main.temp}
   Feel like ${data.main.feels_like}
    `)
  );
};

export { printError, printSuccess, printHelp,printWeather };
