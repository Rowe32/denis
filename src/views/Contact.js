import { useNav } from '../customHooks/useNav';
import { useState } from 'react';
import Bottles from '../assets/Bottles.JPG'
import { Box, TextField, Button, formControlClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import './views.css';


const FormFields = styled(TextField)({
    '& label.Mui-focused': { 
        // Schriftfarbe placeholder
        color: '#282c34',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
        // Umrandung
        borderColor: '#282c34',
        },
    },
});

const StyledButton = styled(Button)({
color: '#282c34',
backgroundColor: 'rgba(255, 255, 255, 0.807)',
'&:hover': {
    // transform fehlt noch
        color: 'rgba(255, 255, 255, 0.807)',
        backgroundColor: '#282c34',
    },
});

const Contact = () => {
    const contactRef = useNav('Contact');

    const [input, setInput] = useState({ name: "", email: "", subject: "", message: ""});

    function handleInput(event) {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        })
    };

    return (
        <section className="bottomSection" ref={contactRef} id='contactContainer'>
            <img 
            src={Bottles}
            alt='bottles and equipment for cocktails' />

            <div className="formContainer">
                <Box
                component="form"
                sx={{'& > :not(style)': { m: 1, width: '40vw' },}}
                noValidate
                autoComplete="off">
                    <div className="formTop">
                     <FormFields required size="small" id="form-name" name="name" label="Name" variant="outlined" value={input.name} onChange={handleInput}/>
                     <FormFields required size="small" id="form-email" name="email" label="Email" variant="outlined" value={input.email} onChange={handleInput}/>
                    </div>
                    <FormFields required size="small" id="form-subject" name="subject" label="Subject" variant="outlined" value={input.subject} onChange={handleInput}/>
                    <FormFields required fullWidth id="form-message" name="message" label="Message" multiline rows={6} value={input.message} onChange={handleInput} />
                    <StyledButton variant="contained" size="small" /*href={`mailto:${input.email}?subject=${input.email}&body=${input.message}`}*/>
                        GET IN TOUCH {<span class="material-symbols-outlined">send</span>}
                    </StyledButton>
                </Box>
            </div>
        </section>
    )
};

export default Contact;