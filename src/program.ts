import { getAllTodos } from "./extract-todo-comment";
import { getProjectAndFileName, getRelativeSourceFilePath } from "./file-utils";
import { createMultipleIssues, GithubIssue } from "./github-utils";
import * as logger from "./logger";

export async function createGithubIssuesFromTodosInSource() {
  const todos = await getAllTodos();

  const issues: GithubIssue[] = todos.flatMap((f) =>
    f.map((t) => {
      if (!t.text) {
        throw new Error(`Invalid TODO in file: ${t.file}:${t.line}, ${JSON.stringify(t)}`);
      }

      const relativeFilePath = getRelativeSourceFilePath(t.file);
      const { file, project } = getProjectAndFileName(t.file);
      const title = `[file:${file}] ${t.text}`;
      const link = `[${relativeFilePath}](${relativeFilePath}#L${t.line})`;
      const labels: string[] = [t.tag, project];
      const body = t.ref
        ? `
      ${link}        
    
    REF: ${t.ref}
    `
        : link;

      return {
        body,
        labels,
        title,
      };
    })
  );

  if (!!issues) {
    await createMultipleIssues(issues);
  }

  logger.log(`Created ${issues.length} issues on github`);
}
