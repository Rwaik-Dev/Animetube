import React from 'react'

import BookMark from "react-native-vector-icons/MaterialCommunityIcons"
import { Container, Textcontainer } from './styles'
import { MyTheme } from '../../Theme/Theme'
import { VideoInfo } from "../../Context/Context"

const FlagEpisode: React.FC = () => {
    
    const {infoVideo} = React.useContext(VideoInfo)

    const NUM_EP = infoVideo.episodio
   
    return (
        <Container onPress={() => console.info('Pressed')}>
            <Textcontainer>Continuar no episodio: {NUM_EP} </Textcontainer>
            <BookMark name='bookmark-check-outline' color={MyTheme.colors.text} size={36} />
        </Container>
    )
}

export default FlagEpisode