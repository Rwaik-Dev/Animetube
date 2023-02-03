import React from 'react'
import { Video } from 'expo-av';

import { Dimensions } from "react-native"

import { Container, VideoContainer } from './styles'
import { ResizeMode } from 'expo-av/build/Video.types';
import * as ScreenOrientation from "expo-screen-orientation"
import VideoContext from '../../Context/Context';

const VideoFrame: React.FC = () => {

    const videoRef = React.useRef(null)
    const [status, setStatus] = React.useState({})

    function setFullScreen() {
        if (Dimensions.get("window").height > Dimensions.get("window").width) {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
        } else {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
        }
    }

    return (
        <Container>
            <VideoContainer>
                <Video
                    ref={videoRef}
                    useNativeControls
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    onFullscreenUpdate={setFullScreen}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                    style={{ width: '100%', height: '100%' }}
                    source={{
                        uri: "./",
                    }}
                />
            </VideoContainer>

        </Container>
    )

}

export default VideoFrame