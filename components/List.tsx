import { NextComponentType, NextPageContext } from "next";
import React from "react";
import { Button } from "react-rainbow-components";
import styled from "styled-components";
import { Data } from "../types/data";

type Props = {
  value: Data;
  options: Data[];
  onClick: (value: Data) => void;
};

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
`;

export const List: NextComponentType<
  NextPageContext,
  unknown,
  Props
> = React.memo(({ options, onClick }) => {
  return (
    <Container>
      {options.map((option) => (
        <Button
          variant="brand"
          key={option.label}
          label={option.label}
          onClick={() => onClick(option)}
        />
      ))}
    </Container>
  );
});

List.displayName = "List";
