import { useState } from "react";
import PortfolioItem from "./PortfolioItem";

const portfolios = [
    {
        id: 1,
        name: 'project name',
        title:'project tile',
        category: 'web Design',
        img_url:'https://www.fillmurray.com/640/360',
    },
    {
        id:2,
        name: 'project name',
        title:'project tile',
        category: 'WordPress',
        img_url:'https://loremflickr.com/640/360',
    },
    {
        id: 3,
        name: 'project name',
        title:'project tile',
        category: 'web Design',
        img_url:'https://loremflickr.com/640/360',
    },
    {
        id: 4,
        name: 'project name',
        title:'project tile',
        category: 'web Design',
        img_url:'https://www.fillmurray.com/640/360',
    },
    {
        id: 5,
        name: 'project name',
        title:'project tile',
        category: 'react',
        img_url:'https://www.fillmurray.com/640/360',
    },
    {
        id: 6,
        name: 'project name',
        title:'project tile',
        category: 'WordPress',
        img_url:'https://www.fillmurray.com/640/360',
    }
]

//get all categoy from portfolio
const get_categories = () => {
    let allCat= [];
    let prevCat = [];
    
    for (let item of portfolios){
    
        if(!prevCat.includes(item.category)){
            allCat.push(item.category);
        }
        prevCat.push(item.category);
    }
    return allCat;
}
const menus = get_categories();


function Portfolio (){

    const[items, setItems] = useState(portfolios);
    const[activeMenu, setActiveMenu] = useState(menus);


    const filterItems = (catItem)=> {

        const updateItems = portfolios.filter((curElem) => {
            return curElem.category == catItem;
        });
        setItems(updateItems);

        setActiveMenu(catItem);
    }

        return(

        <div className="portfolio-wrapper">
        <ul className="portfolio-menu d-flex flex-wrap content-center align-center">
            <li className={activeMenu == menus ? 'active' : ''} onClick={()=>{ setItems(portfolios); setActiveMenu(menus) } }>All</li>
            {menus.map(cat => {
               return <li className={activeMenu === cat ? 'active' : ''} key={cat} onClick={()=>filterItems(cat)} >{cat}</li>
            })}
        </ul>
        <div className="portfolios">
        {items.map(item =><PortfolioItem key={item.id} data={item} />)}
        </div>
        </div> 

        )
}

export default Portfolio;