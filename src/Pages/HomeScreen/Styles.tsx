import styled from 'styled-components/native'
import { MyTheme } from '../../Theme/Theme';

const { colors } = MyTheme

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.background} ;
`;

export const Scroller = styled.ScrollView`
    
`;
export const TitleViewContainer = styled.Text`
    margin-top: 10px ;
    color: ${colors.text};
    margin-left: 6px ;
    width: 100% ;
    height: 30px;
    font-size: 17px;
    font-weight: bold;
`;

export const Content = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    width: 100% ;
    border-radius: 8px ;
    height: 120px ;
    background-color: ${MyTheme.colors.card} ;

`;

export const ContentViewContainer = styled.View`
    width: 100% ;
    border-radius: 8px ;
    height: 120px ;
    background-color: ${colors.card} ;
 
`