import React from 'react'
import { Container, ImageAnime, Title } from './styles'
import RatingStars from '../RatingStars/RatingStars'

interface IAnimeCardProps{
    title: string;
    image: string;
    rating: number;
    onPress: () => void;
}

const AnimeCard: React.FC<IAnimeCardProps> = ({title, image,rating, onPress}) => {
    return (
        <Container onPress={() => onPress()}>
            <Title>{title}</Title>
            <ImageAnime
                source={{
                    uri: image
                }}
            />
            <RatingStars rating={rating} />
        </Container>
    )
}

export default AnimeCard