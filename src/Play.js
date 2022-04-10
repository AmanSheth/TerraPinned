// import logo from './logo.svg';
import './Landing.css';
import Viewer from './Viewer'

function Play() {
  return (
    <div>
        <div className="topbar">
          <img src="photos/maryland.svg"/>
        </div>
        <div className="container">
          <Viewer></Viewer>
        </div>
    </div>
  );
}

export default Play;
