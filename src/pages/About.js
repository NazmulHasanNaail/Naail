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
            title: "Design Internship",
            description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',making it look like readable English. Many desktop publishing packages and web page editors now use."
        },
        {
            title: "Web Designer",
            description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',making it look like readable English. Many desktop publishing packages and web page editors now use."
        },
        {
            title: "Bachelor Degree of Design",
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
                            <h3 className="section-heading">About Me</h3>
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
                    <div className="counter-area">
                        <div className="counter-item text-center">
                            <div className="counter-number">120+</div>
                            <span>Projects Done</span>
                        </div>
                        <div className="counter-item text-center">
                            <div className="counter-number">100+</div>
                            <span>Satisfaction Client</span>
                        </div>
                        <div className="counter-item text-center">
                            <div className="counter-number">12+</div>
                            <span>Years Of Experience</span>
                        </div>
                        <div className="counter-item text-center">
                            <div className="counter-number">100</div>
                            <span>Expert Members</span>
                        </div>
                    </div>

                    <div className="skill-and-education-area">
                        <div className="education-area">
                            <h3 className="section-heading">Education & Experience</h3>
                            <Accordion accordions={accordions}/>
                        </div>
                        <div className="skill-area">
                            <h3 className="section-heading">My Advantage</h3>
                             <SkillBar skills={skills}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;