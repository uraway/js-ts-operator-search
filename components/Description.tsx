import React from "react";
import { Card, RenderIf } from "react-rainbow-components";
import styled from "styled-components";
import { Data } from "../types/data";
import { NextComponentType, NextPageContext } from "next";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  value?: Data;
};

const Wrapper = styled.div`
  margin-top: 50px;
`;

const Content = styled.div`
  padding: 2rem;
`;

const Link = styled.a`
  color: #1de9b6;
`;

export const Description: NextComponentType<
  NextPageContext,
  unknown,
  Props
> = ({ value }) => {
  return (
    <RenderIf isTrue={value}>
      <Wrapper>
        <Card
          title={value?.description}
          footer={
            <div>
              <Link target="_blank" rel="noreferrer" href={value?.link}>
                MDN
              </Link>
              でもっと詳しく
            </div>
          }
        >
          <Content>
            <ReactMarkdown
              renderers={{
                // eslint-disable-next-line react/display-name
                code: ({ language, value }) => {
                  return (
                    <SyntaxHighlighter style={a11yDark} language={language}>
                      {value}
                    </SyntaxHighlighter>
                  );
                },
              }}
              escapeHtml={false}
              plugins={[gfm]}
            >
              {value?.definition}
            </ReactMarkdown>
          </Content>
        </Card>
      </Wrapper>
    </RenderIf>
  );
};
