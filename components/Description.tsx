import React from "react";
import { Card, RenderIf } from "react-rainbow-components";
import styled from "styled-components";
import { Data } from "../types/data";
import { NextComponentType, NextPageContext } from "next";

type Props = {
  value?: Data;
};

const Wrapper = styled.div`
  transition: all 300ms ease;
  margin: 30px 0;
`;

const Content = styled.div`
  display: flex;
  padding: 3rem;
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
    <RenderIf isTrue={!!value}>
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
          <Content>{value?.definition}</Content>
        </Card>
      </Wrapper>
    </RenderIf>
  );
};
