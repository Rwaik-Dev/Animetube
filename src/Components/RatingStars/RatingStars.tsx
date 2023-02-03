import React from 'react'
import { Container, TextValid } from './Styles'
import StarFull from "react-native-vector-icons/MaterialIcons"
import EmptyStar from "react-native-vector-icons/MaterialIcons"
import { MyTheme } from '../../Theme/Theme'


interface IRatingStarsProps {
    rating?: number;
}


const RatingStars: React.FC<IRatingStarsProps> = ({ rating }) => {
    const ICON_SIZE = 14
    if (rating === 0 || rating > 5 ) {
        return (
            <Container>
                <EmptyStar name="star-border" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <EmptyStar name="star-border" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <EmptyStar name="star-border" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <EmptyStar name="star-border" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <EmptyStar name="star-border" size={ICON_SIZE} color={MyTheme.colors.notification} />
            </Container>
        )
    }
    if (rating === 1) {
        return (
            <Container>
                <StarFull name="star" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <EmptyStar name="star-border" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <EmptyStar name="star-border" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <EmptyStar name="star-border" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <EmptyStar name="star-border" size={ICON_SIZE} color={MyTheme.colors.notification} />
            </Container>
        )
    }
    if (rating === 2) {
        return (
            <Container>
                <StarFull name="star" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <StarFull name="star" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <EmptyStar name="star-border" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <EmptyStar name="star-border" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <EmptyStar name="star-border" size={ICON_SIZE} color={MyTheme.colors.notification} />
            </Container>
        )
    }
    if (rating === 3) {
        return (
            <Container>
                <StarFull name="star" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <StarFull name="star" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <StarFull name="star" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <EmptyStar name="star-border" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <EmptyStar name="star-border" size={ICON_SIZE} color={MyTheme.colors.notification} />
            </Container>
        )
    }
    if (rating === 4) {
        return (
            <Container>
                <StarFull name="star" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <StarFull name="star" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <StarFull name="star" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <StarFull name="star" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <EmptyStar name="star-border" size={ICON_SIZE} color={MyTheme.colors.notification} />
            </Container>
        )
    }
    if (rating === 5) {
        return (
            <Container>
                <StarFull name="star" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <StarFull name="star" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <StarFull name="star" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <StarFull name="star" size={ICON_SIZE} color={MyTheme.colors.notification} />
                <StarFull name="star" size={ICON_SIZE} color={MyTheme.colors.notification} />
            </Container>
        )
    }

}
export default RatingStars;