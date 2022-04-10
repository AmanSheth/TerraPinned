import {useNavigate} from 'react-router-dom';
import './Landing.css';
import Play from './Play';

export default function Landing() {
    const navigate = useNavigate();
    const coursesPage = () => {
        navigate("/play")
    }
    let random = Math.floor(Math.random() * 19);
  //  if(random === 3 || random === 5  || random === 6)
  //  {
  //    random += 4;
   // } 
    let src = ".\\photos\\" + random.toString() + ".jpg"
    return (<div>
        <div class="topbar">
            <img className="logo" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/237/pile-of-poo_1f4a9.png"/>
        </div>
        <div className="container">
            <img src={src} alt="Blurry scene of unknown umd scene"/>
            <button onClick={coursesPage}>PLAY!</button>
        </div>
    </div>);
    //navigate("./Play")
}