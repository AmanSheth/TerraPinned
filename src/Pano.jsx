import * as PANOLENS from "panolens";

console.log(PANOLENS);
const panorama = new PANOLENS.ImagePanorama("photos/11.jpg");
console.log(panorama);
const viewer = new PANOLENS.Viewer({
  container: document.querySelector("#IMAGE")
});
console.log(viewer);
viewer.add(panorama);
const Pano = () => {
  return (
    <>
      <p>IMAGE</p>
      <div id="IMAGE" htmlstyle="height:100%">
        {}
      </div>
    </>
  );
};

export default Pano;