import { findAllInRenderedTree } from 'react-dom/test-utils';
import {useNavigate} from 'react-router-dom';
import './Landing.css';
import Play from './Play';

export default function Landing() {
    const navigate = useNavigate();
    const coursesPage = () => {
        navigate("/play")
    }
    let random = Math.floor(Math.random() * 19);
    if(random === 3 || random === 5  || random === 6)
    {
      random += 4;
    } 
    let src = "https://terpconnect.umd.edu/~vchari/geomd/" + random.toString() + ".jpg"
    return (<div>
        <div className="topbar">
            <img src="photos/maryland.svg"/>
        </div>
        <div className="contained">
            <img src={src} alt="Blurry scene of unknown umd scene"/>
            <button className="button" onClick={coursesPage}>PLAY!</button>
        </div>
    </div>);
    //navigate("./Play")
}