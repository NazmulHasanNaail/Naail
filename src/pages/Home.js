import '../assets/scss/home.scss';
import { Link } from "react-router-dom";

function Home (){
    return(
       <>
           <div className="naail-Home d-flex content-center align-center">
                <div className="container">
                    <div className="home-content text-center">
                        <span>Hello, I'm</span>
                        <h1>Nazmul Hasan Naail</h1>
                        <p>WordPress Developer</p>
                        <Link className="naail-btn" to="/portfolio" >See Portfolio</Link>
                    </div>
                </div>
           </div>
       </>
    )
}

export default Home;