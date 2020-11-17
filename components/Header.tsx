import React from "react";
import { ButtonIcon } from "react-rainbow-components";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { NextComponentType, NextPageContext } from "next";
import { useColorMode } from "@chakra-ui/react";

const gitUrl = "https://github.com/uraway/js-ts-operator-search/";

export const Wrapper = styled.div`
  width: 100%;
  text-align: end;
`;

export const TopAction = styled.a`
  margin-left: auto;
`;

export const Header: NextComponentType<
  NextPageContext,
  unknown,
  unknown
> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const switchIcon = colorMode === "light" ? faMoon : faSun;
  return (
    <Wrapper>
      <TopAction>
        <ButtonIcon
          onClick={toggleColorMode}
          size="large"
          icon={<FontAwesomeIcon icon={switchIcon} />}
        />
      </TopAction>
      <TopAction href={gitUrl} target="_blank">
        <ButtonIcon size="large" icon={<FontAwesomeIcon icon={faGithub} />} />
      </TopAction>
    </Wrapper>
  );
};
