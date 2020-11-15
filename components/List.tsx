import { NextComponentType, NextPageContext } from "next";
import React from "react";
import { Button, RenderIf } from "react-rainbow-components";
import styled from "styled-components";
import { Data } from "../types/data";

type Props = {
  value: Data;
  options: Data[];
  onClick: (value: Data) => void;
};

const Container = styled.div`
  margin-top: 40px;
`;

const StyledButton = styled(Button)`
  min-width: 20px;
  margin: 2px;
`;

export const List: NextComponentType<
  NextPageContext,
  unknown,
  Props
> = React.memo(({ value, options, onClick }) => {
  return (
    <RenderIf isTrue={!value}>
      <Container className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        {options.map((option) => (
          <StyledButton
            key={option.description.toString()}
            label={option.label}
            onClick={() => onClick(option)}
          />
        ))}
      </Container>
    </RenderIf>
  );
});

List.displayName = "List";
