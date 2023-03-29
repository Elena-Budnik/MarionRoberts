import { Container } from '@mui/material'
import ImageSlider from 'components/ImageSlider/ImageSlider'
import Reviews from 'components/Reviews/Reviews'

import NewsList from 'container/NewsList/NewsList'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <ImageSlider />
            <Container
                sx={{
                    padding: '60px 0',
                }}
            >
                <NewsList />
                <Reviews />
            </Container>
        </>
    )
}
export default Home
