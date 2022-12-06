import { useNav } from '../customHooks/useNav';
import { useState } from 'react';
import Bottles from '../assets/Bottles.JPG'
import './views.css';

const Contact = () => {
    const contactRef = useNav('Contact');

    const [input, setInput] = useState({ name: "", email: "", subject: "", message: ""});
    const [msgToSave, setMsgToSave] = useState({})
    const [hideForm, setHideForm] = useState(false)

    function handleInput(event) {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        })
    };

// i dont need the handle submit - it happens in the handleinput
    const handleSubmit = (event) => {
        event.preventDefault();
        setMsgToSave(input);
        setInput({ name: "", email: "", subject: "", message: ""});
        setHideForm(true);
        setTimeout(() => {
            setHideForm(false);
            }, 5000);
    }

    return (
        <section className="bottomSection" ref={contactRef} id='contactContainer'>
            <img 
            src={Bottles}
            alt='bottles and equipment for cocktails' />
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                { hideForm ? 
                (<>
                    <p>Your message has been sent. Cheers</p>
                    <span class="material-symbols-outlined">liquor</span>
                </>
                )
                :
                (<>
                    <div className="formTop">
                        <input type="text" name="name" placeholder='Name' value={input.name} onChange={handleInput}></input>
                        <input type="email" name="email" placeholder='Email' value={input.email} onChange={handleInput}></input>
                    </div>
                    <div className="formBottom">
                        <input type="text" name="subject" placeholder='Subject' value={input.subject} onChange={handleInput}></input>
                    </div>
                    <div>
                        <textarea placeholder='Message' name="message" value={input.message} onChange={handleInput}></textarea>
                    </div>
                    
                    {/*<button type="submit" value="submit">GET IN TOUCH</button>*/}
                    <button><a href={`mailto: ${input.email}`}>send mail </a></button>


                </>)}
                </form>
            </div>

        </section>
    )
};

export default Contact;