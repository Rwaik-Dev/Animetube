import React, { useContext } from 'react'
import { ListRenderItemInfo } from "react-native"

import { Container, VideosList } from './styles'

import VideoItem from '../VideoItem/VideoItem'
import { List, dragonBallList, jujutsuList } from '../../Services/Data/animeList'
import { MyTheme } from '../../Theme/Theme'
import { VideoInfo } from '../../Context/Context'



const ListVideos: React.FC = () => {



    const { getVideoInformations, infoVideo, episodeId } = useContext(VideoInfo)

    const handleChangeEpisodes = (srcVideo, episodio, idAnime) => {
        getVideoInformations(srcVideo, episodio, idAnime)
    }


        console.log(infoVideo.idAnime)

    const renderItem = ({ item }: ListRenderItemInfo<List>) => {
        return (
            <VideoItem {...item}
                backgroundColor={
                    item.episodio === infoVideo.episodio
                        ? MyTheme.colors.card
                        : MyTheme.colors.background}
                onPress={() => {
                    handleChangeEpisodes(item.source, item.episodio,item.idAnime);
                }} />
        )
    }
    return (
        <Container>
            <VideosList
                data={dragonBallList}
                renderItem={renderItem}
            />
        </Container>
    )
}

export default ListVideos