import { Button, Card, CardActions, CardContent } from '@mui/material'
import './NewsListItem.scss'

type Props = {
    category: string
    date: string
    article: string
}
const NewsListItem = ({
    category,date,article,
}: Props) => {
    return (
        <Card variant="outlined" className="newsCards">
            <CardContent>
                <div className="category">{category}</div>
                <div className="date">{date}</div>
                <div className="article">{article}</div>
            </CardContent>

            <CardActions className='btn-newsListItem'>
                <Button variant="outlined" >Add to like</Button>
            </CardActions>
        </Card>
    )
}
export default NewsListItem
