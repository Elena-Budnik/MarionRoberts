// import MenuItem from 'components/Menu/MenuItem'
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
                    {/* <MenuItem to={'/beauty'} >
                    <div className="category">Beauty</div>
                </MenuItem> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[1]})` }}>
                    {/* <MenuItem to={'/culture'} >
                    <div className="category">Culture</div>
                </MenuItem> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${images[2]})` }}>
                    {/* <MenuItem to={'/editorial'} >
                    <div className="category">Editorial</div>
                </MenuItem> */}
                </div>
            </div>
        </Slide>
    )
}
export default ImageSlider
