import Banner from "../components/Banner";
import aboutImg from '../assets/images/profile-shot-aside.jpg';
import { Link } from "react-router-dom";
import SkillBar from "../components/SkillBar";
import Accordion from "../components/Accordion";
import '../assets/scss/about.scss';

function About (){
    const skills = [
        {type : "Photoshop", level: 80},
        {type : "Web Design", level: 90},
        {type : "Wordpress", level: 80},
        {type : "React", level: 60},
        {type : "Node", level: 70},
    ]
    
    const accordions = [
        {
            title: "accordion title",
            description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',making it look like readable English. Many desktop publishing packages and web page editors now use."
        },
        {
            title: "accordion title",
            description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',making it look like readable English. Many desktop publishing packages and web page editors now use."
        },
        {
            title: "accordion title",
            description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',making it look like readable English. Many desktop publishing packages and web page editors now use."
        }
    ]

    return(
        <div className="naail-about">
            <Banner title='Who Am I?' subtitle='About us' />
            <div className="container">
                <div className="about-wrapper">
                    <div className="about-area">
                        <div className="about-image">
                            <img src={aboutImg} alt="about me" />
                        </div>
                        <div className="about-content">
                            <h2 className="section-heading">About Me</h2>
                            <p>Hi, I am Nazmul Hasan.On her way she met a copy. 
                            The copy warned the Little Blind Text, that where 
                            it came from it would have been rewritten a thousand 
                            times and everything that was left from its origin
                            would be the word "and" and the Little Blind Text 
                            should turn around and return to its own, safe country.</p>
                        <Link className="naail-btn btn-fill" to="/contact" >Hire Me</Link>
                        <Link className="naail-btn" to="" >Donwload CV</Link>
                        </div>
                    </div>
                    <div className="skill-and-education-area">
                        <div className="education-area">
                            <h2 className="section-heading">MY EDUCATION</h2>
                            <Accordion accordions={accordions}/>
                        </div>
                        <div className="skill-area">
                            <h2 className="section-heading">MY SPECIALTY</h2>
                             <SkillBar skills={skills}/>
                        </div>
                    </div>
                    <div className="counter-area">
                        <div className="counter-item text-center">
                            <div className="counter-number">120</div>
                            <span>Projects done</span>
                        </div>
                        <div className="counter-item text-center">
                            <div className="counter-number">100</div>
                            <span>Client</span>
                        </div>
                        <div className="counter-item text-center">
                            <div className="counter-number">12</div>
                            <span>Partners</span>
                        </div>
                        <div className="counter-item text-center">
                            <div className="counter-number">100</div>
                            <span>Client</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;