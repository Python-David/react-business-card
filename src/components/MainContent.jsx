import DesignImage from "../assets/image.png"

function MainContent() {
    return (
        <main className="MainContent">
            <div>
                <h1>David Nwobodo</h1>
                <h3>Blockchain Developer</h3>
                <p className="p-header">Solidity | Python | Javascript</p>
            </div>
            <div className="div-button">
                <a href="mailto:mrnwobodo@gmail.com"><button className="email-button"><i class="fa-solid fa-envelope"></i>Email</button></a>
                <a href="https://www.linkedin.com/in/python-david/"><button href="" className="linkedin-button"><i class="fa-brands fa-linkedin"></i>LinkedIn</button></a>
            </div>
            <h2>About</h2>
            <p className="p-text1">I am a blockchain developer with a particular interest in DeFi. I like to find simple and efficient solutions to seemingly complex problems. I am a lifelong learner with a huge appetite for knowledge.</p>
            <h2>Interests</h2>
            <p className="p-text2">Music (Guitar). Chess. People. Poetry. Internet fanatic. Nkwobi enthusiast. Entrepreneur. Travel geek. Pop culture ninja.</p>
        </main>
    )
  }

export default MainContent