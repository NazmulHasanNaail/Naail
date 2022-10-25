function PortfolioItem ({data}){

    const {name, title, img_url} = data;
    return(
        <div className="item" style={ {backgroundImage:`url( ${img_url} )`}}>
            <div className="desc">
                <h6>{name}</h6>
                <span>{title}</span>
            </div>
        </div>
        )
    }
    
    export default PortfolioItem;