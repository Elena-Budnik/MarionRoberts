import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material'
import './NewsListItem.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import MenuItem from 'components/Menu/MenuItem'

import { NavLink } from 'react-router-dom'

type Props = {
    id: number
    category: string
    date: string
    article: string
    image: string
}

const NewsListItem = ({ id, category, date, article, image }: Props) => {
    const isLiked: boolean = useAppSelector(
        (state) => state.productsLikeState[id]
    )
    const dispatch = useAppDispatch()

    return (
        <Card variant="outlined" className="newsCards">
            <div className="buttons">
                <Button
                    className="btn-like"
                    variant="outlined"
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
            </div>
            <CardContent>
                <div className="news-image">
                    <img src={image} alt="" />
                </div>
                <div className="line1">
                    <MenuItem to={'/' + category}>
                        <div className="category">{category}</div>
                    </MenuItem>
                    <div className="date">{date}</div>
                </div>
                
                <Typography variant="h5" align="left" padding="10px">
                    <div className="article">{article}</div>
                </Typography>
            </CardContent>
            <div className="buttons">
                <Button
                    className="btn-more"
                    variant="outlined"
                    component={NavLink}
                    to={`/more?id=${id}`}
                >
                    more...
                </Button>
            </div>
        </Card>
    )
}
export default NewsListItem
