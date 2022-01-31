import React from "react";
import styled from "styled-components";
import { Data } from "../types/data";
import { NextComponentType, NextPageContext } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Box, Divider, Heading } from "@chakra-ui/react";

type Props = {
  value?: Data;
};

const Link = styled.a`
  color: #1de9b6;
  font-weight: 700;
`;

const Card = styled(Box)`
  p,
  table,
  pre {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  tr {
    white-space: nowrap;
  }
`;

export const Description: NextComponentType<NextPageContext, unknown, Props> =
  ({ value }) => {
    if (!value) return null;
    return (
      <Card
        borderRadius="12px"
        borderWidth="1px"
        p="0.75rem"
        mt="1.25rem"
        overflowX="scroll"
      >
        <Heading size="md" p="0.25rem" data-cy="heading">
          {value?.description}
        </Heading>
        <Box p="1.2rem" fontSize="14px" data-cy="description">
          <ReactMarkdown
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={a11yDark}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props} />
                );
              },
            }}
            remarkPlugins={[remarkGfm]}
            skipHtml
          >
            {value?.definition}
          </ReactMarkdown>
        </Box>
        <Divider />
        <Box pt="0.75rem" textAlign="center">
          <Link target="_blank" rel="noreferrer" href={value?.link}>
            MDN
          </Link>
          でもっと詳しく
        </Box>
      </Card>
    );
  };

Description.displayName = "Description";
