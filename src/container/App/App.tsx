import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { Container, StyledEngineProvider } from '@mui/material'
import ImageSlider from 'components/ImageSlider/ImageSlider'
import Home from 'container/pages/Home/Home'

type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <ImageSlider />

            <Container
                sx={{
                    padding: '60px 0',
                }}
            >
                <Home />
            </Container>

            <Footer />
        </StyledEngineProvider>
    )
}
export default App
