import { NextComponentType, NextPageContext } from 'next'
import React from 'react'
import styled from 'styled-components'
import { Data } from '../types/data'
import { Button } from '@chakra-ui/react'

type Props = {
  value: Data
  options: Data[]
  onClick: (value: Data) => void
}

const Container = styled.div`
  margin-top: 40px;
`

export const List: NextComponentType<NextPageContext, unknown, Props> =
  React.memo(({ options, onClick }) => {
    return (
      <Container className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
        {options.map((option, index) => (
          <Button
            key={index}
            style={{
              minWidth: '20px',
              margin: '2px',
            }}
            onClick={() => onClick(option)}
            data-cy="option-item"
          >
            {option.label}
          </Button>
        ))}
      </Container>
    )
  })

List.displayName = 'List'
