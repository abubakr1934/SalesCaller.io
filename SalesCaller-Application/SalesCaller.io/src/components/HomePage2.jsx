import image1 from "../assets/image.png"
import '../App.css';

const HomePage2 = () => {
    return (
        <div className="image-homepage2" style={{ height: "520px", width: "600px", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center",marginLeft:"450px" }}>
            <img src={image1} alt="" style={{ height: "500px", width: "900px", maxWidth: "100%", maxHeight: "100%" }} />
        </div>
    )
}

export default HomePage2;
