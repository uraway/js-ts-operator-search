import React from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NextComponentType, NextPageContext } from 'next'
import { useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const gitUrl = 'https://github.com/uraway/js-ts-operator-search/'

const TopAction = styled.a`
  margin: 0.25rem;
`

export const Header: NextComponentType<
  NextPageContext,
  unknown,
  unknown
> = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const ThemeIcon = colorMode === 'light' ? MoonIcon : SunIcon
  return (
    <Box w="100%" textAlign="end">
      <TopAction>
        <IconButton
          variant="ghost"
          aria-label="switch theme"
          onClick={toggleColorMode}
          size="lg"
          icon={<ThemeIcon />}
        />
      </TopAction>
      <TopAction href={gitUrl} target="_blank">
        <IconButton
          variant="ghost"
          aria-label="github link"
          size="lg"
          icon={<FontAwesomeIcon icon={faGithub} />}
        />
      </TopAction>
    </Box>
  )
}
