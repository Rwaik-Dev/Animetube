import styled from "styled-components/native";
import { MyTheme } from "../../Theme/Theme";

export const Container = styled.Pressable`
    width: 100%;
    height: 45px;
    background-color: ${MyTheme.colors.card} ;
    border-radius: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`;

export const Textcontainer = styled.Text`
    margin-right: 10px ;
    font-size: 18px ;
    color: ${MyTheme.colors.text} ;
    text-align: center ;
    font-weight: bold ;
    text-transform: uppercase ;
`;