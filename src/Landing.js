import './Landing.css';

export default function Landing() {
    return (<div>
        <div className="topbar">
            <a className="button" href="blank.html">ABOUT</a>
            <a className="button" href="blank.html">CONTACT</a>
        </div>
        <div className="container">
            <img name="backgr" className="bgimg" src=".\photos\0.jpg" alt="Blurry scene of unknown umd scene" />
            <button className="play">PLAY!</button>
        </div>
    </div>)
}