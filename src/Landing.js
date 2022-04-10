import './Landing.css';
import Play from './Play';

export default function Landing() {
    let random = Math.floor(Math.random() * 13);
    let src = ".\\photos\\" + random.toString() + ".jpg"
    return (<div>
        <div class="topbar">
            <img class="logo" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/237/pile-of-poo_1f4a9.png">
            </img>
        </div>
        <div class="container">
            <img name="backgr" class="bgimg" src={src} alt="Blurry scene of unknown umd scene"/>
            <button class="play">PLAY!</button>
        </div>
    </div>);
}