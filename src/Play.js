// import logo from './logo.svg';
import './Landing.css';
import Pano from './Pano'
import Viewer from './Viewer'

function Play() {
  return (
    <div>
        <div class="topbar">
            <a class="button" href="blank.html">ABOUT</a>
            <a class="button" href="blank.html">CONTACT</a>
        </div>
        <div class="container">
          <Viewer></Viewer>
        </div>
    </div>
  );
}

export default Play;
