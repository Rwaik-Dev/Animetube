import React, { createContext } from 'react';
interface IVideoInfoProps {
    infoVideo: IInfoVideoProps;
    episodeId: number;
    getVideoInformations: (src: string, episode: number, idAnime: number) => void;
    getEpisodeId: (episode: number) => void;
}

interface IInfoVideoProps {
    source?: string,
    episodio?: number,
    idAnime?: number,
}

export const VideoInfo = createContext<IVideoInfoProps>({
    infoVideo: {} as IInfoVideoProps,
    episodeId: undefined,
    getVideoInformations() { },
    getEpisodeId() { },
})


function VideoInfoProvider({ children }) {
    const [infoVideo, setInfoVideo] = React.useState<IInfoVideoProps>({ source: "", episodio: 0, idAnime: 0 })
    const [episodeId, setEpisodeId] = React.useState<number>()

    function getEpisodeId() {
        return console.log("Id Episodio:")
    }

    function getVideoInformations(src: string, episode: number, idAnime: number) {
        setInfoVideo({
            source: src,
            episodio: episode,
            idAnime: idAnime,
        })
    }
    return (
        <VideoInfo.Provider value={{
            infoVideo,
            episodeId,
            getVideoInformations,
            getEpisodeId
        }}>
            {children}
        </VideoInfo.Provider>
    )
}

export default VideoInfoProvider