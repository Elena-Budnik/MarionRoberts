import Logo from 'components/Logo/Logo'
import './Footer.scss'
type Props = {}
const Footer = (props: Props) => {
    return (
        <div className="footer-title">
            <Logo />© 2021 The Voux Magazine Theme. All Rights Reserved.
        </div>
    )
}
export default Footer
