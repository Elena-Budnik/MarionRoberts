
import Typography from '@mui/material/Typography'
import logo from 'assets/logo.webp'
import './Logo.scss'

type Props = {}
const Logo = (props: Props) => {
  return (
   
        <Typography
        variant="h6"
        component="div"
        sx={{flexGrow: 1}}
        >
           <img src={logo} alt="Fake shop" className='logo' />
        </Typography>
  )
}
export default Logo