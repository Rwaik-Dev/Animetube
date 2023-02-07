import styled from "styled-components/native";
import { MyTheme } from "../../Theme/Theme";


interface IContainerProps {
    backgroundColor: string;
}


export const Container = styled.Pressable<IContainerProps>`
    width: 100%;
    height: 60px;
    background-color: #000 ;
    border: 1.5px solid ${props => props.backgroundColor};
    margin-bottom: 4px ;
`;

export const TitleEpisode = styled.Text`
    font-size: 18px ;
    font-weight: bold ;
    color: ${MyTheme.colors.text};
    margin-left: 6px;
`;

export const EpNumber = styled.Text`
    margin-left: 10px ;
    color: ${MyTheme.colors.text};
`;

export const Category = styled.Text`
    margin-left: 10px ;
    font-weight: bold ;
    color: ${MyTheme.colors.text};

`;