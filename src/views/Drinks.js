import { useNav } from '../customHooks/useNav';
import specialties from '../assets/specialties.JPG'
import './views.css';

const Drinks = () => {
    const drinksRef = useNav('Drinks');

    return (
        <section ref={drinksRef} id='drinksContainer'>
            <img 
            src={specialties}
            alt='unsplash drinks' />
            <div>
                <h3>My specialties</h3>
                <p>For conoisseurs: <br/>
                Whiskey Sour
                <br/>Amaretto Sour</p>
            </div>

        </section>
    )
};

export default Drinks;