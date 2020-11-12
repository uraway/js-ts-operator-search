// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

const basePath = path.join(
  serverRuntimeConfig.PROJECT_ROOT,
  "pages",
  "api",
  "markdown"
);

const contextCommentRegExp = /^<!--\nlabel: ([\s\S]*?)\ndescription: ([\s\S]*?)\nlink: ([\s\S]*?)-->/;
type Context = {
  label: string;
  description: string;
  link: string;
};

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;

  const data = fs.readdirSync(basePath).map((filename) => {
    console.log(`Reading file: ${filename}`);
    const content = fs
      .readFileSync(
        path.join(
          serverRuntimeConfig.PROJECT_ROOT,
          "pages",
          "api",
          "markdown",
          filename
        )
      )
      .toString();
    const { label, description, link } = parseContext(content);
    return {
      label,
      description,
      link,
      definition: content,
    };
  });

  res.json({ data });
};

function parseContext(content: string): null | Context {
  const comment = content.match(contextCommentRegExp);
  if (comment) {
    return {
      label: comment[1],
      description: comment[2],
      link: comment[3],
    };
  }
  return null;
}
