import React, { createContext } from 'react';
interface IVideoInfoProps {
    videoSrc: string;
    currentVideo: string;
    getVideoSrc: (currentVideoSrc: string) => void;
}


export const VideoInfo = createContext<IVideoInfoProps>({
    videoSrc: "",
    currentVideo: "",
    getVideoSrc() { }
})


function VideoInfoProvider({ children }) {
    const [currentVideo, setCurrentVideo] = React.useState("")
    function getVideoSrc(currentVideoSrc: string) {
        setCurrentVideo(currentVideoSrc)
    }

    return (
        <VideoInfo.Provider value={{ 
            videoSrc: "https://lightspeedst.net/s2/mp4/dragon-ball-z-dublado/sd/1.mp4",
            getVideoSrc,
            currentVideo }}>
            {children}
        </VideoInfo.Provider>
    )
}

export default VideoInfoProvider