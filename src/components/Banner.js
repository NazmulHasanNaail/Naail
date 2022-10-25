import '../assets/scss/banner.scss';

function Banner ({title, subtitle}){
    return(
    <div className="naail-banner text-center">
        <div className="banner-content">
            <span>{subtitle}</span>
            <h1>{title}</h1>
        </div>
    </div>
    )
}

export default Banner;