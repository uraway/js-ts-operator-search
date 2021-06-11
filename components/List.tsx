import { NextComponentType, NextPageContext } from "next";
import React from "react";
import styled from "styled-components";
import { Data } from "../types/data";
import { Transition } from "react-transition-group";
import { Button } from "@chakra-ui/react";

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
  opacity: ${({ state }) => (state === "exited" ? 1 : 0)};
`;

export const List: NextComponentType<
  NextPageContext,
  unknown,
  Props
> = React.memo(({ value, options, onClick }) => {
  return (
    <Container className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
      {options.map((option, index) => (
        <Transition
          key={option.description.toString()}
          in={!!value}
          timeout={20 * index}
        >
          {(state) => (
            <StyledButton
              state={state}
              onClick={() => onClick(option)}
              data-cy="option-item"
            >
              {option.label}
            </StyledButton>
          )}
        </Transition>
      ))}
    </Container>
  );
});

List.displayName = "List";
