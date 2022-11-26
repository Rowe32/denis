import { useNav } from '../customHooks/useNav';
import DenisAtBar from '../assets/DenisAtBar.JPG'
import './views.css';

const About = () => {
    const aboutRef = useNav('About');

    return (
        <section className="middleSection" ref={aboutRef} id='aboutContainer'>
            <img 
            src={DenisAtBar}
            alt='denis at the bar' />
            <div>
                <h3>ABOUT</h3>
                <p>Hi! My name is Denis Fröbel and I am a professional barkeeper with more than ten years experience working in bars, clubs, at festivals and private events.</p>
            </div>

        </section>
    )
};

export default About;