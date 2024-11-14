import React from 'react' ;
import './intro.css'
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I am <span className="introName">Niladri</span><br />Software Developer</span>
            <p className="introPara"> Iam a Software Developer With a strong foundation in programming,<br /> problem-solving, debugging and finding solutions and saving time,</p>
            <Link to="contactPage" spy={true} smooth={true} offset={-85} duration={500}>
    <button className="btn"><img src={btnImg} alt="Hire me" className="btnImg" />Hire me</button>
</Link>
</div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}

export default Intro;