import React from "react";
import { Header } from "./";
import { NextComponentType, NextPageContext } from "next";
import styled from "styled-components";
import { Application } from "react-rainbow-components";

export const MainWrapper = styled.main`
  position: relative;
  width: 100%;
  padding-bottom: 43px;
  font-family: Lato, sans-serif;
  font-weight: 400;
  min-height: 100vh;
`;

export const ChildrenWrapper = styled.main`
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Layout: NextComponentType<NextPageContext, unknown, unknown> = ({
  children,
}) => {
  return (
    <Application>
      <MainWrapper>
        <Header />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </MainWrapper>
    </Application>
  );
};
