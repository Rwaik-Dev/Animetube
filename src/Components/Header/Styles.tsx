import styled from "styled-components/native";
import { MyTheme } from "../../Theme/Theme";

export const Container = styled.View`
    height: 140px;
    width: 100%;
    padding: 10px; ;
    border-bottom-right-radius: 10px; 
    border-bottom-left-radius: 10px; 
    align-items: center ;
    background-color: ${MyTheme.colors.card};
`;


export const TextTitle = styled.Text`
    color: ${MyTheme.colors.text};
    font-size: 40px;
    font-weight: bold;
    text-align: center ;
`;

export const SubTitle = styled.Text`
    color: ${MyTheme.colors.text};
    font-size: 16px;
    margin-top: 8px;
    text-align: center;
    font-weight: bold;
    width: 80%;

    `;