import React from 'react'
import FlagEpisode from '../../Components/FlagEpisode/FlagEpisode'

import ListVideos from '../../Components/ListVideos/ListVideos'
import VideoFrame from '../../Components/VideoFrame/VideoFrame'
import VideoInfoProvider from '../../Context/Context'

import { Container } from './Styles'

const VideoPlayer = ({route}) => {
  
  const {animeId} = route.params

  console.log(animeId)
  return (
    <Container>
      <VideoInfoProvider>
        <VideoFrame />
        <ListVideos animeId={animeId}/>
        <FlagEpisode/>
      </VideoInfoProvider>
    </Container>
  )
}

export default VideoPlayer