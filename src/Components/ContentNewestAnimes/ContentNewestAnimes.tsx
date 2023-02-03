import React from 'react'
import { Container } from './Styles'

interface INewestAnimesProps{
    children: React.ReactNode
}

const ContentNewestAnimes:React.FC<INewestAnimesProps> = ({children}) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default ContentNewestAnimes