import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { Container, StyledEngineProvider } from '@mui/material'
import ImageSlider from 'components/ImageSlider/ImageSlider'
import Home from 'container/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import BeautyPage from 'container/pages/Beauty/BeautyPage'



type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="beauty" element={<BeautyPage/>}/>
                </Routes>
             
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
