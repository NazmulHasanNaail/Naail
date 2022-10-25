import Banner from "../components/Banner";
import Portfolio from "../components/Portfolio";
import '../assets/scss/portfolio.scss';

function PortfolioPage (){
    return(
        <div className="naail-portfolio">
            <Banner title='recent work' subtitle='my work' />
            <div className="container">
                <Portfolio />
            </div>
        </div>
    )
}

export default PortfolioPage;