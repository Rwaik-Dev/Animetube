import React, { useContext } from 'react'
import { ListRenderItemInfo } from "react-native"

import { Container, VideosList } from './styles'

import VideoItem from '../VideoItem/VideoItem'
import { List, episodeList } from '../../Services/Data/animeList'
import { MyTheme } from '../../Theme/Theme'
import VideoContext from '../../Context/Context'


const ListVideos: React.FC = () => {
    const [currentEpisode, setCurrentEpisode] = React.useState(1)
    const [videoSource, setVideoSource] = React.useState(".")


    const renderItem = ({ item }: ListRenderItemInfo<List>) => {
        return (
            <VideoContext.Provider value={videoSource}>
                <VideoItem {...item}
                    backgroundColor={item.episodio === currentEpisode ? MyTheme.colors.card : MyTheme.colors.background}
                    onPress={() => setCurrentEpisode(item.episodio)} />
            </VideoContext.Provider>
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