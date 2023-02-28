import { Grid, Typography } from '@mui/material'
import NewsListItem from './NewsListItem'
import newsArray from 'utils/newsArray'

type Props = {}

const NewsList = (props: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                component="h2"
                padding="20px"
            >
                NewsList
            </Typography>

            <Grid container spacing={3}>
                {newsArray.map(({id, category, date, article}) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        {' '}
                        <NewsListItem
                            category={category}
                            date={date}
                            article={article}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default NewsList
