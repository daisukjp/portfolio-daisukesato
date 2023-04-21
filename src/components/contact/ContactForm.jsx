import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import "./contact.css"

const ContactInfo = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });
    const [open, setOpen] = useState(false);

    const form = useRef();

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateEmail(formData.user_email)) {
            alert("Please enter a valid email address");
            return;
        }
        
        emailjs
        .sendForm(
            "service_dbuxol8",
            "template_tczbd9k",
            form.current,
            "PtyEl5CsXsyffWq-3"
        )
        .then(
            (result) => {
            console.log(result.text);
            console.log("message sent");
            clearForm();
            setOpen(true); // set open state to true to show the success snackbar
            },
            (error) => {
            console.log(error.text);
            }
        );
    };

    const clearForm = () => {
        setFormData({
        user_name: '',
        user_email: '',
        message: '',
        });
    };

    const handleClose = () => {
        setOpen(false); // set open state to false to hide the success snackbar
    };

    const validateEmail = (email) => {
        // email validation regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    return (
        <div className="contact__form-section">
        <h3 className="contact__title">Send me a message!</h3>

        <form ref={form} className="contact__form" onSubmit={sendEmail}>
            <div className="contact__form-div">
            <TextField
                id="user_name"
                label="Name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Type your name"
                variant="outlined"
                required
                className="contact__form-input"
            />
            </div>

            <div className="contact__form-div">
            <TextField
                id="user_email"
                label="Email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Type your email"
                variant="outlined"
                type="email"
                required
                className="contact__form-input"
            />
            </div>

            <div className="contact__form-div contact__form-area">
            <TextField
                id="message"
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message"
                multiline
                rows={4}
                variant="outlined"
                required
                className="contact__form-input"
            />
            </div>
            <Button
            variant="contained"
            type="submit"
            className="contact__form-button button__flex"
            >
            Send
            </Button>
        </form>

        {/* Snackbar to show message sent alert */}
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Message sent!
                </MuiAlert>
            </Snackbar>
        </div>
        </div>
    );
};

export default ContactInfo;