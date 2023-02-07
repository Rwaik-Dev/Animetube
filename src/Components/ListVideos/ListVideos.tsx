import React, { useContext } from 'react'
import { ListRenderItemInfo } from "react-native"

import { Container, VideosList } from './styles'

import VideoItem from '../VideoItem/VideoItem'
import { List, episodeList } from '../../Services/Data/animeList'
import { MyTheme } from '../../Theme/Theme'
import { VideoInfo } from '../../Context/Context'


const ListVideos: React.FC = () => {


    const {getVideoSrc} = useContext(VideoInfo)

    const handleChangeEpisodes = (srcVideo) => {
        getVideoSrc(srcVideo)
    }
    
    const [currentEpisode, setCurrentEpisode] = React.useState(1)

    const renderItem = ({ item }: ListRenderItemInfo<List>) => {
        return (
            <VideoItem {...item}
                backgroundColor={
                    item.episodio === currentEpisode
                        ? MyTheme.colors.card
                        : MyTheme.colors.background}
                onPress={() => {
                    setCurrentEpisode(item.episodio);
                    handleChangeEpisodes(item.source);
                }} />
        )
    }
    return (
        <Container>
            <VideosList
                data={episodeList}
                renderItem={renderItem}
            />
        </Container>
    )
}

export default ListVideos