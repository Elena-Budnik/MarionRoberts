import { Grid, Typography } from '@mui/material'
import NewsListItem from 'container/NewsList/NewsListItem'
import newsArray from 'utils/newsArray'

type Props = {}
const EditorialPage = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                component="h2"
                padding="20px"
            >
                EDITORIAL
            </Typography>
            <Grid container spacing={3}>
                {newsArray
                    .filter((news) => news.category === 'EDITORIAL')
                    .map(({ id, category, date, article, image }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <NewsListItem
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
export default EditorialPage
