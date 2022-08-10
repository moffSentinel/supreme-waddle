import * as path from "path";
import { promises } from "fs";
import { PACKAGES_FOLDER, WORKSPACE_FOLDER } from "./args";

import glob from "glob";
import { promisify } from "util";

const globAsync = promisify(glob);
export const readFile = promises.readFile;

export async function getAllSourceFiles() {
  const files = await globAsync(`${PACKAGES_FOLDER}/**/src/**/*.@(ts|tsx)`);

  return files;
}

export function getRelativeSourceFilePath(fullPath: string) {
  const relativePath = path.relative(WORKSPACE_FOLDER, fullPath);

  return relativePath;
}

export function getProjectAndFileName(fullPath: string) {
  const pathParts = path.relative(PACKAGES_FOLDER, fullPath).split(path.sep);

  const project = pathParts[0];
  const file = pathParts[pathParts.length - 1];

  return { project, file };
}
