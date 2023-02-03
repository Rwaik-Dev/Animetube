import React from 'react'

import ListVideos from '../../Components/ListVideos/ListVideos'
import VideoFrame from '../../Components/VideoFrame/VideoFrame'

import { Container } from './Styles'

const VideoPlayer = () => {
  return (
    <Container>
      <VideoFrame/>
      <ListVideos/>
    </Container>
  )
}

export default VideoPlayer