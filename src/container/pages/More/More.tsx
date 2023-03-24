import MoreListItem from 'container/NewsList/MoreListItem'
import NewsListItem from 'container/NewsList/NewsListItem'
import newsArray from 'utils/newsArray'

const More = () => {
    const articleId = new URLSearchParams(window.location.search).get('id')
    const element = newsArray.find((el) => el.id.toString() === articleId)
    console.log(window.location.search)
    console.log(articleId)
    console.log(element)
    return (
        <>
            {element && (
                <MoreListItem
                    id={element.id}
                    category={element.category}
                    date={element.date}
                    article={element.article}
                    image={element.image}
                    autor= {element.autor}
                    tags={element.tags}
                    text={element.text}
                    
                />
            )}
        </>
    )
}
export default More
