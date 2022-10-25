import { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import img1 from '../assets/images/stellar-free-template-353x278.jpg';
import img2 from '../assets/images/personal-website-templates-353x276.jpg';
import img3 from '../assets/images/knuford-free-template-353x278.jpg';
import img4 from '../assets/images/create-free-template-353x278.jpg';
import img5 from '../assets/images/beckham-free-template.jpg';

const portfolios = [
    {
        id: 1,
        name: 'Beckham',
        title:'Portfolio',
        category: 'web Design',
        img_url: img1,
    },
    {
        id:2,
        name: 'Create',
        title:'Business · One Page · Portfolio',
        category: 'WordPress',
        img_url: img2,
    },
    {
        id: 3,
        name: 'Knuford',
        title:'Bootstrap 5 · One Page · Personal Website',
        category: 'web Design',
        img_url: img3,
    },
    {
        id: 4,
        name: 'Schmidt',
        title:'Bootstrap Templates · Personal Website',
        category: 'web Design',
        img_url: img4,
    },
    {
        id: 5,
        name: 'Personal WordPress Themes',
        title:'Blog · Creative · Personal Website Templates ·',
        category: 'react',
        img_url: img5,
    },
    {
        id: 6,
        name: 'Ronin',
        title:'Landing Page Templates · Personal Website',
        category: 'WordPress',
        img_url: img3,
    },
    {
        id: 7,
        name: 'Schmidt',
        title:'Bootstrap Templates · Personal Website',
        category: 'web Design',
        img_url: img4,
    },
    {
        id: 8,
        name: 'Beckham',
        title:'Portfolio',
        category: 'web Design',
        img_url: img1,
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