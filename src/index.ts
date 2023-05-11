import chalk from "chalk";
import app from "./server/index.js";

const port = 4000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${chalk.green(`http://localhost:${port}`)}`);
});
