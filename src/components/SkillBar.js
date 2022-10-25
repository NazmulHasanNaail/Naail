function SkillBar ({skills}) {
    let i = 0;
    return(
        <ul className="skill-wrap">
        {skills.map(item => {
           return <li className="naail-skill-item" key={i++}>
                <span>{item.type}</span>
                <div className="skillbar">
                    <div className="skill-progress" data-progress={item.level+"%"} style={{width:item.level+"%"}}></div>
                </div>
            </li>
        })}
        </ul>
    )
}

export default SkillBar;