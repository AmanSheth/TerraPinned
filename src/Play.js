// import logo from './logo.svg';
import './Landing.css';
import Viewer from './Viewer'
import Picker from './Picker.tsx'

function Play() {
  let random = Math.floor(Math.random() * 19);
  if (random === 3 || random === 5 || random === 6) {
    random += 4;
  }
  return (
    <div>
      <div className="topbar">
        <img src="photos/maryland.svg" />
      </div>
      <div className="container">
        <Viewer img_id={random}></Viewer>
        <Picker img_id={random}></Picker>
      </div>
    </div>
  );
}

export default Play;
