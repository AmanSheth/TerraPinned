import logo from './logo.svg';
import './App.css';
import Pano from './Pano'

function Viewer() {
  let random = Math.floor(Math.random() * 19);
  if(random === 3 || random === 5  || random === 6)
  {
    random += 4;
  } 
  return (
    <div className="Viewer">
      <Pano img_id={random.toString()} />
    </div>
  );
}

export default Viewer;