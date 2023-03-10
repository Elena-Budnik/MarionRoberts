import { Grid, Typography } from '@mui/material'
import NewsListItem from './NewsListItem'
import newsArray from 'utils/newsArray'

type Props = {}
type NewsProps = {
    category: string
    date: string
    article: string
}
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
                {newsArray.map(({ category, date, article }: NewsProps) => (
                    <Grid item xs={12} sm={6} md={4}>
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
