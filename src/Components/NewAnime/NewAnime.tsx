import React from 'react'
import { Container, TitleAnime, Description, Background } from './Styles'

interface INewAnimeProps {
    title: string;
    description: string;
    backgroundImageSource: string;
    onPress: () => void;
}

const NewAnime: React.FC<INewAnimeProps> = ({ title, description, backgroundImageSource, onPress }) => {
    return (
        <Container onPress={() => onPress()}>
            <Background source={{ uri: backgroundImageSource }}>
                <TitleAnime>{title}</TitleAnime>
                <Description>{description}</Description>
            </Background>
        </Container>
    )
}

export default NewAnime