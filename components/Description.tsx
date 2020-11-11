import React from "react";
import { Card } from "react-rainbow-components";
import styled from "styled-components";
import { Data } from "../types/data";
import { NextComponentType, NextPageContext } from "next";
import { CSSTransition } from "react-transition-group";

type Props = {
  value?: Data;
};

const Wrapper = styled.div`
  margin-top: 40px;
  transition: opacity 600ms ease-in-out;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
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
    <CSSTransition in={!!value} timeout={300}>
      {(state) => (
        <Wrapper state={state}>
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
      )}
    </CSSTransition>
  );
};
