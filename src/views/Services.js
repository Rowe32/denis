import { useNav } from '../customHooks/useNav';
import Feier from '../assets/Feier.jpg'
import './views.css';

const Services = () => {
    const servicesRef = useNav('Services');

    return (
        <section className="middleSection" ref={servicesRef} id='servicesContainer'>
            <img 
            src={Feier}
            alt='party at night' />
            <div>
                <h3>SERVICES</h3>
                <p>You have a special occasion coming up? Take your party to the next level and hire a professional barkeeper. Get all your and your guests' favorite drinks and discover new longdrinks and cocktails with me!<br/> I work in Freiberg, Leipzig and the surounding area.</p>
            </div>

        </section>
    )
};

export default Services;