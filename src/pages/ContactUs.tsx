import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out to us!</p>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
            <h2>Contact Information</h2>
            <p>Email: support@example.com</p>
            <p>Phone: (123) 456-7890</p>
        </div>
    );
};

export default ContactUs;