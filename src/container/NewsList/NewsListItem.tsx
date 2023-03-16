import { Button, Card, CardActions, CardContent } from '@mui/material'
import './NewsListItem.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAppSelector } from 'redux/hooks';

type Props = {
    id:number
    category: string
    date: string
    article: string
    image: string
}

const NewsListItem = ({ id, category, date, article, image }: Props) => {

    const isLiked = useAppSelector((state) => state.productsLikeState[id])

    return (
        <Card variant="outlined" className="newsCards">
            <CardContent>
                <Button variant='outlined'>
                    {isLiked ? <FavoriteIcon/> : <FavoriteBorderIcon/> }
                </Button>
                <div className="news-image">
                    <img src={image} alt="" />
                </div>
                <div className="category">{category}</div>
                <div className="date">{date}</div>
                <div className="article">{article}</div>
            </CardContent>

            <CardActions className="btn-newsListItem">
                <Button variant="outlined">Add to like</Button>
            </CardActions>
        </Card>
    )
}
export default NewsListItem
