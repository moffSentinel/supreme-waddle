// This files only starts the program (to enable async)
import { createGithubIssuesFromTodosInSource } from "./src/program";
import * as logger from "./src/logger";

createGithubIssuesFromTodosInSource()
  .then(() => logger.log("Done"))
  .catch(logger.error);
