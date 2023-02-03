import styled from "styled-components/native";
import { MyTheme } from "../../Theme/Theme";


export const Container = styled.Pressable`
    height: 100% ;
    width: 370px;
    margin-right: 10px;
    border-radius: 8px ;
`;

export const Background = styled.ImageBackground.attrs({
    resizeMode: "cover",
    borderRadius: 8,
    opacity: 0.6 
})`
    flex: 1;
    padding: 8px ;
    

`;

export const TitleAnime = styled.Text`
    color: ${MyTheme.colors.text};
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px; ;

`;
export const Description = styled.Text`
    color: ${MyTheme.colors.text};
    font-size: 18px;
`;