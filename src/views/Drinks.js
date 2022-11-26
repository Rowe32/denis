import { useNav } from '../customHooks/useNav';
import specialties from '../assets/specialties.JPG'
import './views.css';

const Drinks = () => {
    const drinksRef = useNav('Drinks');

    return (
        <section className="middleSection" ref={drinksRef} id='drinksContainer'>
            <img 
            src={specialties}
            alt='board with handwriting' />
            <div>
                <h3>SPECIALTIES <span>for conoisseurs</span></h3>
                <p>
                Whiskey Sour
                <br/>Amaretto Sour
                <br/>Moscow Mule
                <br/>Espresso Martini</p>
            </div>
        </section>
    )
};

export default Drinks;