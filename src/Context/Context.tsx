import React, { createContext } from 'react';
interface IVideoInfoProps {
    currentVideo: string;
    infoVideo: IInfoVideoProps;
    getVideoSrc: (currentVideoSrc: string) => void;
    getVideoInformations: (src: string, episode: number) => void
}

interface IInfoVideoProps {
    source: string,
    episodio: number;
}

export const VideoInfo = createContext<IVideoInfoProps>({
    currentVideo: "",
    infoVideo: {} as IInfoVideoProps,
    getVideoSrc() { },
    getVideoInformations() { }
})


function VideoInfoProvider({ children }) {
    const [infoVideo, setInfoVideo] = React.useState<IInfoVideoProps>({ source: "", episodio: 0 })

    const [currentVideo, setCurrentVideo] = React.useState("")

    function getVideoSrc(currentVideoSrc: string) {
        setCurrentVideo(currentVideoSrc)
    }

    function getVideoInformations(src: string, episode: number) {
        setInfoVideo({
            source: src,
            episodio: episode
        })
    }
    return (
        <VideoInfo.Provider value={{
            currentVideo,
            infoVideo,
            getVideoSrc,
            getVideoInformations
        }}>
            {children}
        </VideoInfo.Provider>
    )
}

export default VideoInfoProvider