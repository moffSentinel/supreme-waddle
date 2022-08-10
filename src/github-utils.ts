import { Octokit } from "@octokit/rest";
import { GITHUB_OWNER, GITHUB_PROJECT_NAME, GITHUB_TOKEN } from "./args";
import * as logger from "./logger";

const delay = (interval: number) => new Promise((resolve) => setTimeout(resolve, interval));

const octokit = new Octokit({ auth: GITHUB_TOKEN });

export interface GithubIssue {
  body: string;
  title: string;
  labels: (
    | string
    | {
        id?: number | undefined;
        name?: string | undefined;
        description?: string | null | undefined;
        color?: string | null | undefined;
      }
  )[];
}

async function createIssue({ body, title, labels }: GithubIssue) {
  const response = await octokit.rest.issues.create({
    owner: GITHUB_OWNER,
    repo: GITHUB_PROJECT_NAME,
    body,
    title,
    labels,
  });

  logger.log(response);
}

export async function createMultipleIssues(issues: GithubIssue[]) {
  const issuePromises = [];

  for (const issue of issues) {
    await delay(1000);
    const i = await createIssue(issue);
    issuePromises.push(i);
  }

  await Promise.all(issuePromises);
}
