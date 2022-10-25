import { useState } from "react";

function Accordion ({accordions}) {
    const [activeItem, setActiveItem] = useState("0");
    const handleToggle = (index) => {
        if(activeItem === index){
            return setActiveItem("0");
        }
        setActiveItem(index);
    }

    return(
        <div className="accrodio-wrap">
            {accordions.map((item , index) => {
                return <div className="naail-accordion-item" key={index}>
                <div className="naail-accordion-header d-flex align-items-center justify-content-between" onClick={()=> handleToggle(index)}>
                    <div className="title">{item.title}</div>
                    <div className="accordion-icon d-flex align-items-center">
                    {activeItem === index ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>}
                    </div>
                </div>
                {activeItem  === index && <div className="naail-accordion-body">{item.description}</div> }
            </div>
            })}
        </div>
    )
}

export default Accordion;