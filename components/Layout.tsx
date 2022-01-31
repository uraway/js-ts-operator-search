import React from 'react'
import { Header } from './'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

export const MainWrapper = styled.div`
    height: 100%;
    width: 100%;
`

export const ChildrenWrapper = styled.div`
    width: 100%;
    margin-top: 10vh;
`

export const Layout: NextComponentType<NextPageContext, unknown, unknown> = ({
    children,
}) => {
    return (
        <MainWrapper>
            <Header />
            <ChildrenWrapper>{children}</ChildrenWrapper>
        </MainWrapper>
    )
}
