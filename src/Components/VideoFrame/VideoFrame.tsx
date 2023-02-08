import React, { useContext } from 'react'
import { Video } from 'expo-av';

import { Dimensions} from "react-native"

import { ResizeMode } from 'expo-av/build/Video.types';
import * as ScreenOrientation from "expo-screen-orientation"

import { Container, VideoContainer } from './styles'
import { VideoInfo } from "../../Context/Context"

const VideoFrame: React.FC = () => {

    const { infoVideo } = useContext(VideoInfo)

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
                    onFullscreenUpdate={setFullScreen}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    source={{
                        uri: infoVideo.source
                    }}
                />
            </VideoContainer>
        </Container>
    )

}

export default VideoFrame