import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './ImageSlider.scss'

const ImageSlider = () => {
    const images = [
        'images/slider/1.jpg',
        'images/slider/2.jpg',
        'images/slider/3.jpg',
    ]
    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[0]})` }}>
                    <span>BEAUTY</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[1]})` }}>
                    <span>CULTURE</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[2]})` }}>
                    <span>EDITORIAL</span>
                </div>
            </div>
        </Slide>
    )
}
export default ImageSlider
