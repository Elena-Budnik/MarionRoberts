import {
    Card,
    CardContent,
    TextField,
    Typography,
    Button,
} from '@mui/material'
import { Container } from '@mui/system'
import { useState } from 'react'
import './Revires.scss'

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
            <Container>
                <div className="form-reviews">
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            margin: '60px 0',
                        }}
                    >
                        Reviews
                    </Typography>

                    {reviews.map((item, i) => (
                        <Card
                            variant="outlined"
                            sx={{ margin: '20px 0' }}
                            key={i}
                        >
                            <CardContent>
                                <div>{item.name}:</div>
                                <div>{item.text}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <form onSubmit={onSend} className="form-reviews">
                    <h2>Please leave a review</h2>
                    <div className="name">
                        <TextField
                            label="Name"
                            variant="standard"
                            value={newReview.name}
                            onChange={handleName}
                        />
                    </div>
                    <br />
                    <div className="text">
          
                        <TextField
                            id="standard-multiline-static"
                            label="Your massage:"
                            multiline
                            rows={4}
                            defaultValue="Text"
                            variant="standard"
                            minRows={5}
                            placeholder="Text"
                            value={newReview.text}
                            onChange={handleText}
                        />
                    </div>
                    <div className="btn-send">
                        <Button variant="outlined" type="submit">
                            Send
                        </Button>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default Reviews
