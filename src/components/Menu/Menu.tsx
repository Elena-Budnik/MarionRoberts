import MenuItem from './MenuItem'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/beauty">Beauty</MenuItem>
            <MenuItem to="/culture">Culture</MenuItem>
            <MenuItem to="/editorial">Editorial</MenuItem>
            <MenuItem to="/fashion">Fashion</MenuItem>
            <MenuItem to="/shopping">Shopping</MenuItem>
        </>
    )
}
export default Menu
