import logo from './logo.svg';
import './App.css';
import Pano from './Pano'

function Viewer({img_id}) {
  
  return (
    <div className="Viewer">
      <Pano img_id={img_id} />
    </div>
  );
}

export default Viewer;