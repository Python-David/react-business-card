import DesignImage from "../assets/image.png"
import Twitter from "../assets/Twitter.png"
import Facebook from "../assets/Facebook.png"
import Instagram from "../assets/Instagram.png"
import GitHub from "../assets/GitHub.png"

function Footer() {
    return (
      <div className="footer">
        <img src={Twitter} className="footer-img"></img>
        <img src={Facebook} className="footer-img"></img>
        <img src={Instagram} className="footer-img"></img>
        <img src={GitHub} className="footer-img"></img>
      </div>
    )
  }

export default Footer