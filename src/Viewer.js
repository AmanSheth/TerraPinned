import logo from './logo.svg';
import './App.css';
import Pano from './Pano'

function Viewer() {
  let random = Math.floor(Math.random() * 13);
  return (
    <div className="Viewer">
      <Pano img_id={random.toString()} />
    </div>
  );
}

export default Viewer;