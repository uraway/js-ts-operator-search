import React from "react";
import { ButtonIcon } from "react-rainbow-components";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NextComponentType, NextPageContext } from "next";

const gitUrl = "https://github.com/uraway/js-ts-operant-search/";

export const Wrapper = styled.div`
  width: 100%;
  text-align: end;
`;

export const TopAction = styled.a`
  margin-left: auto;
`;

type Props = null;

export const Header: NextComponentType<
  NextPageContext,
  unknown,
  Props
> = () => {
  return (
    <Wrapper>
      <TopAction href={gitUrl} target="_blank">
        <ButtonIcon size="large" icon={<FontAwesomeIcon icon={faGithub} />} />
      </TopAction>
    </Wrapper>
  );
};
