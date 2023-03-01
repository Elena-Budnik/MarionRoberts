import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">
                <NavLink to="/" style={{color:"black", textDecoration: 'none'}}> Home </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink to="beauty" style={{color:"black", textDecoration: 'none'}}>Beauty</NavLink>
            </Button>
            <Button color="inherit">Culture</Button>
            <Button color="inherit">Editorial</Button>
            <Button color="inherit">Fashion</Button>
            <Button color="inherit">Shopping</Button>
        </>
    )
}
export default Menu
