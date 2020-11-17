import React from "react";
import { Header } from "./";
import { NextComponentType, NextPageContext } from "next";
import styled from "styled-components";

export const MainWrapper = styled.main`
  position: relative;
`;

export const ChildrenWrapper = styled.main`
  width: 100%;
`;

export const Layout: NextComponentType<NextPageContext, unknown, unknown> = ({
  children,
}) => {
  return (
    <MainWrapper>
      <Header />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </MainWrapper>
  );
};
