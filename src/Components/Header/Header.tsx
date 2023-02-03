import { View, Text } from 'react-native'
import React from 'react'
import { Container, TextTitle, SubTitle } from './Styles'

interface IHeaderProps {
    title: string;
    subtitle: string;
}

const Header: React.FC<IHeaderProps> = ({ title, subtitle }) => {
    return (
        <Container>
            <TextTitle>{title}</TextTitle>
            <SubTitle>{subtitle}</SubTitle>
        </Container>
    )
}

export default Header