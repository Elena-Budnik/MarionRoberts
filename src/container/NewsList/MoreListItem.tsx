import Reviews from 'components/Reviews/Reviews'
import { Button, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ImageSlider from 'components/ImageSlider/ImageSlider'

type News = {
    id: number
    category: string
    date: string
    article: string
    image: string
    autor: string
    tags: string
    text: string
}
const MoreListItem = ({
    id,
    category,
    date,
    article,
    image,
    autor,
    tags,
    text,
}: News) => {
    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispath = useAppDispatch()
    return (
        <div>
            <ImageSlider></ImageSlider>
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    margin: '60px 0',
                }}
            >
                {article}
                <div>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            isLiked
                                ? dispath(removeLike(id))
                                : dispath(addLike(id))
                        }
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                </div>
            </Typography>
            <span className="news-image">
                <img src={image} alt="" />
            </span>
            {category} - {date} - by {autor}
            <div>{text}</div>
            <div>{tags}</div>
            <div>
                <Reviews />
            </div>
        </div>
    )
}
export default MoreListItem
