import { Grid, Typography } from '@mui/material'
import NewsListItem from 'container/NewsList/NewsListItem'
import newsArray from 'utils/newsArray'
import { useAppSelector } from 'redux/hooks'

type newsProps = {
    id: number
    category: string
    date: string
    article: string
    image: string
}

const Likes = () => {
    const newsLikeState = useAppSelector((state) => state.productsLikeState)
    const likedNews = newsArray.filter(({ id }: newsProps) => newsLikeState[id])

    return (
        <>
            <Typography
                variant="h4"
                align="center"
                component="h2"
                padding="20px"
            >
                LIKES
            </Typography>
            <Grid container spacing={3}>
                {likedNews.map(
                    ({ id, category, date, article, image }: newsProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <NewsListItem
                                id={id}
                                category={category}
                                date={date}
                                article={article}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default Likes
