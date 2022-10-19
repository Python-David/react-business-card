import DesignImage from "../assets/image.png"

function MainContent() {
    return (
      <main className="MainContent">
        <div>
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <p className="p-header">laurasmith.website</p>
        </div>
        <div className="div-button">
            <button className="email-button"><i class="fa-solid fa-envelope"></i>Email</button>
            <button className="linkedin-button"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
        </div>
        <h2>About</h2>
        <p className="p-text1">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h2>Interests</h2>
        <p className="p-text2">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </main>
    )
  }

export default MainContent