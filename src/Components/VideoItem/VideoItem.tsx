import React from 'react'
import { Category, Container, EpNumber, TitleEpisode } from './styles';
import { List } from '../../Services/Data/animeList';

interface IVideoItemProps extends List {
    backgroundColor: string;
    onPress: () => void;
}

const VideoItem: React.FC<IVideoItemProps> = ({ title, episodio, categoria, backgroundColor, onPress, source, id }) => {
    return (
        <Container backgroundColor={backgroundColor} onPress={onPress}>
            <TitleEpisode>{title}</TitleEpisode>
            <EpNumber>Episodio: {episodio}</EpNumber>
            <Category>{categoria}</Category>
        </Container>
    )
}

export default VideoItem