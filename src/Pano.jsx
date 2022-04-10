import * as PANOLENS from "panolens";
import React from 'react'

const Pano = (props) => {

  const [panorama, setPano] = React.useState(new PANOLENS.ImagePanorama(`photos/${props.img_id
    }.jpg`));

  const [viewer, setViewer] = React.useState(new PANOLENS.Viewer({
    container: document.querySelector(`#viewer_${props.img_id}`)
  }));
  viewer.add(panorama);

  return (
    <>
      <p>IMAGE</p>
      <div id={`viewer_${props.img_id}`} style={{ height: '100 %' }} />
    </>
  );
};

export default Pano;