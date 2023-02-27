import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material'
import ImageSlider from 'components/ImageSlider/ImageSlider'

type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />

            <div>
            <ImageSlider/>
            </div>

            <Footer />
        </StyledEngineProvider>
    )
}
export default App
