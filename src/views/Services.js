import { useNav } from '../customHooks/useNav';
import './views.css';

const Services = () => {
    const servicesRef = useNav('Services');

    return (
        <section ref={servicesRef} id='servicesContainer'>
            <img 
            src='https://images.unsplash.com/photo-1486428263684-28ec9e4f2584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='unsplash drinks' />
            <div>
                <h3>Services</h3>
                <p>Special occasion coming up? Take your party to the next level and hire me as a professional barkeeper to mix all your and your guests' favorite drinks - or to discover new longdrinks and cocktails!<br/> I work in Freiberg and Leipzig.</p>
            </div>

        </section>
    )
};

export default Services;