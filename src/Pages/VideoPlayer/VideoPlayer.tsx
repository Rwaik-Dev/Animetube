import React from 'react'
import FlagEpisode from '../../Components/FlagEpisode/FlagEpisode'

import ListVideos from '../../Components/ListVideos/ListVideos'
import VideoFrame from '../../Components/VideoFrame/VideoFrame'
import VideoInfoProvider from '../../Context/Context'

import { Container } from './Styles'

const VideoPlayer = () => {
  return (
    <Container>
      <VideoInfoProvider>
        <VideoFrame />
        <ListVideos />
        <FlagEpisode/>
      </VideoInfoProvider>
    </Container>
  )
}

export default VideoPlayer