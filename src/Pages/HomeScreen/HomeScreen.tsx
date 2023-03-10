import React from 'react'

import AnimeCard from '../../Components/AnimeCard/AnimeCard'
import Header from '../../Components/Header/Header'
import ContentNewestAnimes from '../../Components/ContentNewestAnimes/ContentNewestAnimes'
import NewAnime from '../../Components/NewAnime/NewAnime'

import { Container, Scroller, TitleViewContainer, Content } from './Styles'
import { VideoInfo } from '../../Context/Context' 

const HomeScreen: React.FC = ({ navigation }) => {

  const {getVideoInformations} = React.useContext(VideoInfo)

  return (
    <Container>
      <Scroller>
        <Header
          title="Bem Vindo ao Anitube"
          subtitle='Aqui você encontra tudo de novo no mundo dos animes, confira abaixo nosso catalogo e divirta-se com a gente, venha conferir.'
        />
        <TitleViewContainer>Animes de Ação</TitleViewContainer>

        <Content>
          <AnimeCard
            title='Dragon Ball Z'
            image='https://meups.com.br/wp-content/uploads/2021/11/Dragon-Ball-Breakers-900x503.jpg'
            rating={5}
            onPress={() => {
              navigation.navigate('VideoPlayer', {
                animeId :1
              })
            }}
          />
          <AnimeCard
            title='Jujutsu Kaisen'
            image='https://viciados.net/wp-content/uploads/2022/01/Jujutsu-Kaisen-2-temporada.webp'
            rating={5}
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 2
            })}
          />
          <AnimeCard
            title='Cyberpunk: Edgerunners'
            image='https://techraptor.net/sites/default/files/styles/image_header/public/2022-11/Cyberpunk%20Edgerunners%20Mission%20Kit%20Announcement%20Image.jpg?itok=63DIVgUb'
            rating={3}
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 3
            })}
          />
          <AnimeCard
            title='Naruto'
            image='https://akamai.sscdn.co/uploadfile/letras/playlists/c/8/d/2/c8d2c68c37e14169b08f2fe288bcda53.jpg'
            rating={5}
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 4
            })}
          />
          <AnimeCard
            title='One Piece'
            image='https://img.olhardigital.com.br/wp-content/uploads/2021/09/one-piece-1920x1080.jpg'
            rating={4}
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 5
            })}
          />
          <AnimeCard
            title='Code Geass'
            image='https://www.jornalismo.ufv.br/cinecom/wp-content/uploads/2020/04/7eaf15dea3e549bc95260ce8a455eea9.jpg'
            rating={3}
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 6
            })}
          />
          <AnimeCard
            title='Attack on Titan'
            image='https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9daa2f17d7ad2727d72fdeaae6e232de.jpe'
            rating={4}
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 7
            })}
          />
          <AnimeCard
            title='Fullmetal Alchemist'
            image='https://criticalhits.com.br/wp-content/uploads/2021/09/fullmetal-alchemist-ou-brotherhood.jpg'
            rating={3}
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 8
            })}
          />
          <AnimeCard
            title='Spy X Family'
            image='https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2SK4PY4FHBHLDCJ24HED5EJF7U.jpg'
            rating={4}
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 9
            })}
          />
        </Content>

        <TitleViewContainer>Animes de Aventura</TitleViewContainer>

        <Content>
          <AnimeCard
            title='Fairy Tail'
            image='https://hbomax-images.warnermediacdn.com/images/GYoy0UgG9-YeAHgEAAACA/tileburnedin?size=1280x720&partner=hbomaxcom&v=5413634fb8d77d9c64ad11e8a2fadb3f&host=art-gallery.api.hbo.com&language=pt-br&w=1280'
            rating={2}
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 10
            })}
          />
          <AnimeCard
            title='Sword Art Online'
            image='http://pixelnerd.com.br/wp-content/uploads/2022/07/sword_art_online.jpg'
            rating={4}
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 11
            })}
          />
          <AnimeCard
            title='Tokyo Ghoul'
            image='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7e9bea6bffee425ddbe014980d6f0bd803bea68a13840a648514a840cc8db104._RI_V_TTW_.jpg'
            rating={1}
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 12
            })}
          />
          <AnimeCard
            title='Re: Zero'
            image='https://i0.wp.com/heroisx.com/wp-content/uploads/2016/12/re-zero-poster.jpg?fit=1024%2C557&ssl=1'
            rating={0}
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 13
            })}
          />
          <AnimeCard
            title='Inuyasha'
            image='https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a194834918b5ea14dd3874fc0597f5a1.jpe'
            rating={0}
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 14
            })}
          />
          <AnimeCard
            title='Hunter X Hunter'
            image='https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2e54344c7cc1675af721b4021222230f.jpe'
            rating={0}
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 15
            })}
          />
          <AnimeCard
            title='Black Clover'
            image='https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0273e80242d80b0218f640e038269c18.jpe'
            rating={0}
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 16
            })}
          />
          <AnimeCard
            title='Digimon Adventure'
            image='https://muramasa.com.br/wp-content/uploads/2022/09/digimon-adventure.webp'
            rating={0}
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 17
            })}
          />

        </Content>

        <TitleViewContainer>Novos Animes</TitleViewContainer>
        <ContentNewestAnimes>
          <NewAnime
            title='Chainsaw Man'
            description='Chainsaw Man é um anime cheio de ação, comédia e aventura. Acompanhe o jovem Takimata Denji enquanto ele luta contra os demônios e outras forças malignas e tenta sobreviver ao seu dia-a-dia com sua habilidade única de transformar a si mesmo e aos demônios em armas. Venha conferir essa incrível história!'
            backgroundImageSource='https://tm.ibxk.com.br/2022/09/19/19092554443034.jpg?ims=1200x675'
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 18
            })}
          />

          <NewAnime
            title='Re:Zero'
            description='Começando a Vida em Outro Mundo: Re: Zero é um anime de ação e aventura que se passa em um mundo fantástico onde o protagonista Subaru Natsuki é transportado para um novo mundo. O anime segue as aventuras de Subaru enquanto ele tenta descobrir o segredo deste novo mundo e encontrar respostas para as suas perguntas.'
            backgroundImageSource='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWsPBiN8Xpuo2YAs2V4g8yjPqoOWLy5QqGA&usqp=CAU'
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 13
            })}
          />
          <NewAnime
            title='Demon Slayer'
            description='Kemono Friends é um anime de aventura e comédia em que um grupo de amigos, conhecidos como os Kemono Friends, embarcam em uma jornada divertida para descobrir o segredo do parque de animais onde vivem. Durante sua viagem, eles encontram várias criaturas, amigos e inimigos, enquanto desvendam segredos que farão com que eles façam amizades que durarão para sempre.'
            backgroundImageSource='https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/d48d4a62b0ac6381c87bd040b69b0a89.jpe'
            onPress={() => navigation.navigate('VideoPlayer', {
              animeId: 19
            })}
          />
        </ContentNewestAnimes>
      </Scroller>
    </Container>
  )
}

export default HomeScreen