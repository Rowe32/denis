import { useNav } from '../customHooks/useNav';
import Bottles from '../assets/Bottles.JPG'
import './views.css';

const Contact = () => {
    const contactRef = useNav('Contact');

    return (
        <section className="bottomSection" ref={contactRef} id='contactContainer'>
            <img 
            src={Bottles}
            alt='bottles and equipment for cocktails' />
            <div className="formContainer">
                <form>
                    <div className="formTop">
                        <input type="text" name="name" placeholder='Name'></input>
                        <input type="email" name="email" placeholder='Email'></input>
                    </div>
                    <div className="formBottom">
                        <input type="text" name="subject" placeholder='Subject'></input>
                    </div>
                    <div>
                        <textarea placeholder='Message'></textarea>
                    </div>
                        <button type="submit" value="submit">GET IN TOUCH</button>
                </form>
            </div>

        </section>
    )
};

export default Contact;