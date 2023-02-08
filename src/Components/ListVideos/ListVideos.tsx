import React, { useContext } from 'react'
import { ListRenderItemInfo } from "react-native"

import { Container, VideosList } from './styles'

import VideoItem from '../VideoItem/VideoItem'
import { List, episodeList } from '../../Services/Data/animeList'
import { MyTheme } from '../../Theme/Theme'
import { VideoInfo } from '../../Context/Context'


const ListVideos: React.FC = () => {

    const {getVideoInformations, infoVideo} = useContext(VideoInfo)

    const handleChangeEpisodes = (srcVideo, episodio) => {
        getVideoInformations(srcVideo, episodio)
    }

    const renderItem = ({ item }: ListRenderItemInfo<List>) => {
        return (
            <VideoItem {...item}
                backgroundColor={
                    item.episodio === infoVideo.episodio
                        ? MyTheme.colors.card
                        : MyTheme.colors.background}
                onPress={() => {
                    handleChangeEpisodes(item.source , item.episodio);
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