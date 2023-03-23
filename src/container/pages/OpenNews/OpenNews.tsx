import { Grid, Typography } from '@mui/material'
import NewsListItem from 'container/NewsList/NewsListItem'
import newsArray from 'utils/newsArray'

type Props = {
    text:string,
}

const OpenNews = ({text}: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                component="h2"
                padding="20px"
            >
                {text}
            </Typography>
            <Grid container spacing={3}>
                {newsArray
                    .filter((news) => news.category === text)
                    .map(({ id, category, date, article, image }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <NewsListItem
                                id={id}
                                category={category}
                                date={date}
                                article={article}
                                image={image}
                            />
                        </Grid>
                    ))}
            </Grid>
        </>
    )
}
export default OpenNews