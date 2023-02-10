import styled from "styled-components/native";
import { MyTheme } from "../../Theme/Theme";

export const Container = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    removeClippedSubviews: true,
    contentContainerStyle: {
        padding: 10,
        overflow: 'hidden',
    }
})`

    width: 100%;
    height: 280px;
    background-color: ${MyTheme.colors.background};
    border-radius: 10px;
    border: 2px solid ${MyTheme.colors.card};
    margin-bottom:10px
`;