import styled from "styled-components/native";
import { MyTheme } from "../../Theme/Theme";

export const Container = styled.Pressable`
    width: 120px ;
    height: 110px ;
    margin: 5px 5px;
    border-radius: 5px ;
    background-color:${MyTheme.colors.background} ;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 1,
    lineHeight: "20px"
})`
    width:  100%;
    height: 19px;
    font-size: 16px;
    font-weight: bold;
    color: ${MyTheme.colors.text};
    text-align: center;
    
`;

export const ImageAnime = styled.Image.attrs({
    resizeMode: "stretch",
})`
    width: 100% ;
    height: 70px;
`;

