import Footer from "container/Footer/Footer"
import Header from "container/Header/Header"
import CssBaseline from '@mui/material/CssBaseline';

type Props = {}
const App = (props: Props) => {
  return (
    <>
    <CssBaseline/>
       <Header/>
       <Footer/>
    </>
  )
}
export default App