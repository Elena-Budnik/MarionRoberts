import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material'
import Home from 'container/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import BeautyPage from 'container/pages/Beauty/BeautyPage'
import CulturePage from 'container/pages/Culture/CulturePage'
import EditorialPage from 'container/pages/Editorial/EditorialPage'
import FashionPage from 'container/pages/Fashion/FashionPage'
import ShoppingPage from 'container/pages/Shopping/ShoppingPage'
import Likes from 'container/pages/Likes/Likes'
import More from 'container/pages/More/More'

type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="beauty" element={<BeautyPage />} />
                <Route path="culture" element={<CulturePage />} />
                <Route path="editorial" element={<EditorialPage />} />
                <Route path="fashion" element={<FashionPage />} />
                <Route path="shopping" element={<ShoppingPage />} />
                <Route path="likes" element={<Likes />} />
                <Route path="more" element={<More />} />
            </Routes>

            <Footer />
        </StyledEngineProvider>
    )
}
export default App
