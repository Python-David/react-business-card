import DesignImage from "../assets/image.png"
import Twitter from "../assets/Twitter.png"
import Facebook from "../assets/Facebook.png"
import Instagram from "../assets/Instagram.png"
import GitHub from "../assets/GitHub.png"

function Footer() {
    return (
      <div className="footer">
        <a href="https://twitter.com/iambarzini_"><img src={Twitter} className="footer-img"></img></a>
        <a href="https://www.facebook.com/nwobodoamechidavid"><img src={Facebook} className="footer-img"></img></a>
        <a href="https://www.instagram.com/iambarzini/"><img src={Instagram} className="footer-img"></img></a>
        <a href="https://github.com/Python-David"><img src={GitHub} className="footer-img"></img></a>
      </div>
    )
  }

export default Footer