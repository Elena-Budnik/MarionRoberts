import {
    Card,
    CardContent,
    TextField,
    Typography,
    TextareaAutosize,
    Button,
} from '@mui/material'
import { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReview: Review[] = [
        {
            name: 'Ira',
            text: 'Wow',
        },
        {
            name: 'Lena',
            text: 'Cool',
        },
        {
            name: 'Rita',
            text: 'I like this news',
        },
        {
            name: 'Natalia',
            text: 'Cool news',
        },
        {
            name: 'Olha',
            text: 'Supper',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReview)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }
    console.log(newReview)
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required!')
        } else {
            setReviews((prevState) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }
    return (
        <>
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    margin: '60px 0',
                }}
            >
                Reviews
            </Typography>
            <div>
                {reviews.map((item, i) => (
                    <Card variant="outlined" sx={{ margin: '20px 0' }} key={i}>
                        <CardContent>
                            <div>{item.name}:</div>
                            <div>{item.text}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <form onSubmit={onSend}>
                <h3>Please leave a review</h3>
                <div>
                    <TextField
                        label="Name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Text"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="outlined" type="submit">
                    Send
                </Button>
            </form>
        </>
    )
}

export default Reviews
