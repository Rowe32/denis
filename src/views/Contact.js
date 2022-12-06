import { useNav } from '../customHooks/useNav';
import { useState } from 'react';
import Bottles from '../assets/Bottles.JPG'
import { Box, TextField, Button } from '@mui/material';
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
                    <Box
                    component="form"
                    sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                    noValidate
                    autoComplete="off">
                        
                        <TextField color="" required size="small" id="outlined-basic" label="Name" variant="outlined" value={input.name} onChange={handleInput}/>
                        <TextField required size="small" id="outlined-basic" label="Email" variant="outlined" value={input.email} onChange={handleInput}/>
                        <TextField required size="small" id="outlined-basic" label="Subject" variant="outlined" value={input.subject} onChange={handleInput}/>
                        <TextField required fullWidth id="outlined-multiline-static" label="Message" multiline rows={8} value={input.message} onChange={handleInput} />
                        <Button variant="contained"><a href={`mailto: ${input.email}`}>GET IN TOUCH</a></Button>
                    </Box>
                </>)}
                </form>
            </div>

        </section>
    )
};

export default Contact;