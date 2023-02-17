import React, { useContext } from 'react'
import { ListRenderItemInfo } from "react-native"

import { Container, VideosList } from './styles'

import VideoItem from '../VideoItem/VideoItem'
import {
    List,
    dragonBallList,
    jujutsuList,
    cyberpunkList,
    narutoList,
    onePieceList,
    codeGeassList,
    attackOfTitansList,
    fullmetalAlchemistList,
    spyXFamilyList,
    fairyTailList,
    swordArtOnlineList,
    tokyoGhoulList,
    reZeroList,
    inuYashaList,
    hunterXhunterList,
    blackCloverList,
    digimonList,
    chainsawManList,
    demonSlayerList
} from '../../Services/Data/animeList'
import { MyTheme } from '../../Theme/Theme'
import { VideoInfo } from '../../Context/Context'

interface IAnimeListProps {
    animeId: number;
}



const ListVideos: React.FC<IAnimeListProps> = ({ animeId }) => {

    var sourceAnime = []

    switch (animeId) {
        case 1:
            sourceAnime = dragonBallList
            break;
        case 2:
            sourceAnime = jujutsuList
            break;
        case 3:
            sourceAnime = cyberpunkList
            break;
        case 4:
            sourceAnime = narutoList
            break;
        case 5:
            sourceAnime = onePieceList
            break;
        case 6:
            sourceAnime = codeGeassList
            break;
        case 7:
            sourceAnime = attackOfTitansList
            break;
        case 8:
            sourceAnime = fullmetalAlchemistList
            break;
        case 9:
            sourceAnime = spyXFamilyList
            break;
        case 10:
            sourceAnime = fairyTailList
            break;
        case 11:
            sourceAnime = swordArtOnlineList
            break;
        case 12:
            sourceAnime = tokyoGhoulList
            break;
        case 13:
            sourceAnime = reZeroList
            break;
        case 14:
            sourceAnime = inuYashaList
            break;
        case 15:
            sourceAnime = hunterXhunterList
            break;
        case 16:
            sourceAnime = blackCloverList
            break;
        case 17:
            sourceAnime = digimonList
            break;
        case 18:
            sourceAnime = chainsawManList
            break;
        case 19:
            sourceAnime = demonSlayerList
            break;
        default:
            break;
    }
    console.log(sourceAnime)
    const { getVideoInformations, infoVideo } = useContext(VideoInfo)

    const handleChangeEpisodes = (srcVideo, episodio, idAnime) => {
        getVideoInformations(srcVideo, episodio, idAnime)
    }

    const renderItem = ({ item }: ListRenderItemInfo<List>) => {
        return (
            <VideoItem {...item}
                backgroundColor={
                    item.episodio === infoVideo.episodio
                        ? MyTheme.colors.card
                        : MyTheme.colors.background}
                onPress={() => {
                    handleChangeEpisodes(item.source, item.episodio, item.idAnime);
                }} />
        )
    }
    return (
        <Container>
            <VideosList
                data={sourceAnime}
                renderItem={renderItem}
            />
        </Container>
    )
}

export default ListVideos