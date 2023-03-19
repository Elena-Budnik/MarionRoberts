import { Button, Card, CardActions, CardContent } from '@mui/material'
import './NewsListItem.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'

type Props = {
    id: number
    category: string
    date: string
    article: string
    image: string
}

const NewsListItem = ({ id, category, date, article, image }: Props) => {
    const isLiked:boolean = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()

    return (
        <Card variant="outlined" className="newsCards">
            <CardContent>
                <Button
                    variant="outlined"
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="news-image">
                    <img src={image} alt="" />
                </div>
                <div className="category">{category}</div>
                <div className="date">{date}</div>
                <div className="article">{article}</div>
            </CardContent>

            {/* <CardActions className="btn-newsListItem">
                <Button variant="outlined">Add to like</Button>
            </CardActions> */}
        </Card>
    )
}
export default NewsListItem
