import { parse } from "leasot";
import * as logger from "./logger";

import { getAllSourceFiles, getRelativeSourceFilePath, readFile } from "./file-utils";
import path from "path";

export async function getAllTodos() {
  const sourceFiles = await getAllSourceFiles();
  const todos = [];

  for await (const filename of sourceFiles) {
    const content = await readFile(filename, "utf8");
    const extension = path.extname(filename);

    const sourceFileTodos = parse(content, {
      extension,
      filename,
    });

    if (sourceFileTodos.length > 0) {
      todos.push(sourceFileTodos);
    }
  }

  logger.log(`Found "TODO's" in ${todos.length} of ${sourceFiles.length} source files.`);

  return todos;
}
