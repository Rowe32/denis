import { useNav } from '../customHooks/useNav';
import { useState } from 'react';
import Bottles from '../assets/Bottles.JPG'
import { Box, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import './views.css';


const FormFields = styled(TextField, {
    //to prevent passing info down to html
    shouldForwardProp: (prop) => !["fieldWidth"].includes(prop),
})((props) => ({
    width: props.fieldWidth || '100%',
    fontFamily: '"Verdana"',
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
}));

// inherit from formfields and just style width... for the top input fields

const StyledButton = styled(Button)({
color: 'rgba(255, 255, 255, 0.807)',
backgroundColor: '#151515',
fontFamily: '"Verdana"',
'&:hover': {
        color: '#151515',
        backgroundColor: 'rgba(255, 255, 255, 0.807)',
        border: '1px solid',
        borderColor: '#151515',
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
                     <FormFields required size="small" fieldWidth='49%' id="form-name" name="name" label="Name" variant="outlined" value={input.name} onChange={handleInput}/>
                     <FormFields required size="small" fieldWidth='49%' id="form-email" name="email" label="Email" variant="outlined" value={input.email} onChange={handleInput}/>
                    </div>
                    <FormFields required size="small" id="form-subject" name="subject" label="Subject" variant="outlined" value={input.subject} onChange={handleInput}/>
                    <FormFields required id="form-message" name="message" label="Message" multiline rows={6} value={input.message} onChange={handleInput} />
                    <StyledButton variant="contained" size="small" onClick={()=> window.open(`mailto:denis@froebel.de?subject=${input.subject}&body=${input.message}`, "_blank")}>
                        GET IN TOUCH {<span className="material-symbols-outlined">send</span>}
                    </StyledButton>
                </Box>
            </div>
        </section>
    )
};

export default Contact;