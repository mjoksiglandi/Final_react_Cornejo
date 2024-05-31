import { Link } from "react-router-dom";
import cosplay from "../assets/images/cosplay.jpg";
import props from "../assets/images/props.jpg";
import wild from "../assets/images/wild.jpg";

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${cosplay})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:480
                , marginRight:20}}>
                    <Link to={"/category/about"} className="text-decoration-none">
                    <span className="bg-black text-white text-uppercase px-3 py-2"style={{alignSelf: 'flex-end'}}>Cosplay</span>
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${props})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:480}}>
                    <Link to={"/category/props"}className="text-decoration-none">
                    <span className="bg-black text-white text-uppercase px-3 py-2" style={{alignSelf: 'flex-end'}}>Props</span>
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${wild})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:480, marginLeft:20}}>
                    <Link to={"/category/Cosplay"}className="text-decoration-none">
                    <span className="bg-black text-white text-uppercase px-3 py-2" style={{alignSelf: 'flex-end'}}>Wild</span>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Banner;