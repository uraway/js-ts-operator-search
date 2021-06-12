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

export const List: NextComponentType<NextPageContext, unknown, Props> =
  React.memo(({ value, options, onClick }) => {
    return (
      <Container className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        {options.map((option, index) => (
          <Transition
            key={option.description.toString()}
            in={!!value}
            timeout={20 * index}
          >
            {(state) => (
              <Button
                style={{
                  minWidth: "20px",
                  margin: "2px",
                  opacity: state === "exited" ? 1 : 0,
                }}
                onClick={() => onClick(option)}
                data-cy="option-item"
              >
                {option.label}
              </Button>
            )}
          </Transition>
        ))}
      </Container>
    );
  });

List.displayName = "List";
