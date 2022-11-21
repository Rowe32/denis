import { useNav } from '../customHooks/useNav';
import DenisAtBar from '../assets/DenisAtBar.JPG'
import './views.css';

const About = () => {
    const aboutRef = useNav('About');

    return (
        <section ref={aboutRef} id='aboutContainer'>
            <img 
            src={DenisAtBar}
            alt='unsplash drinks' />
            <div>
                <h3>ABOUT</h3>
                <p>I am a professional barkeeper with 10years of experience working in bars, clubs, at festivals and private events.</p>
            </div>

        </section>
    )
};

export default About;