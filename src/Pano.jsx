import * as PANOLENS from "panolens";
import React from 'react'

const Pano = (props) => {

  let src = "https://terpconnect.umd.edu/~vchari/geomd/" + props.img_id + ".jpg"
  const [panorama, setPano] = React.useState(new PANOLENS.ImagePanorama(src));
  

  const [viewer, setViewer] = React.useState(new PANOLENS.Viewer({
    container: document.querySelector(`#viewer_${props.img_id}`)
  }));
  viewer.add(panorama);

  return (
    <>
      <div id={`viewer_${props.img_id}`} style={{ height: '100 %' }} />
    </>
  );
};

export default Pano;