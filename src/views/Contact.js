import { useNav } from '../customHooks/useNav';
import Bottles from '../assets/Bottles.JPG'
import './views.css';

const Contact = () => {
    const contactRef = useNav('Contact');

    return (
        <section ref={contactRef} id='contactContainer'>
            <img 
            src={Bottles}
            alt='unsplash drinks' />
            <div>
                <h3>Contact</h3>
                <p>This is the contact section</p>
            </div>

        </section>
    )
};

export default Contact;