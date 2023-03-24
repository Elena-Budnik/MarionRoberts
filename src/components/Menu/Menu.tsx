import { useAppSelector } from 'redux/hooks'
import newsArray from 'utils/newsArray'
import MenuItem from './MenuItem'
import { News } from 'utils/newsArray'

type Props = {}

const Menu = (props: Props) => {
    const productsLikeState = useAppSelector(
        (state) => state.productsLikeState
    )
    const likedNews = newsArray.filter(
        ({id}:News) => productsLikeState[id]
    )
    const likeCounter = likedNews.length
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/beauty">Beauty</MenuItem>
            <MenuItem to="/culture">Culture</MenuItem>
            <MenuItem to="/editorial">Editorial</MenuItem>
            <MenuItem to="/fashion">Fashion</MenuItem>
            <MenuItem to="/shopping">Shopping</MenuItem>
            <MenuItem to="/likes">Likes:{likeCounter}</MenuItem>
        </>
    )
}
export default Menu
