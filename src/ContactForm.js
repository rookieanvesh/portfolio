import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';

const ContactForm = () => {
    const [emailForm, setEmailForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [sending, setSending] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);

        try {
        await fetch('https://formspree.io/f/xzzzqppv', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(emailForm)
        });
        
        toast.success('Message sent successfully!');
        setEmailForm({ name: '', email: '', message: '' });
        setSubmitted(true);
        } catch (error) {
        toast.error('Failed to send message');
        } finally {
        setSending(false);
        }
    };

    if (submitted) {
        return (
        <div className="p-4 space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <FaCheckCircle className="mx-auto text-green-500 text-4xl mb-3" />
            <h3 className="font-semibold text-xl text-green-700 mb-2">Message Sent Successfully!</h3>
            <p className="text-green-600 mb-4">Thank you for reaching out. I'll get back to you soon.</p>
            <button
                onClick={() => setSubmitted(false)}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
                Send Another Message
            </button>
            </div>
        </div>
        );
    }

    return (
        <div className="p-4 space-y-4">
        <h3 className="font-semibold text-xl">Contact Me</h3>
        <p className="text-gray-600">Email: srivastavaanvesh13@gmail.com</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
                type="text"
                value={emailForm.name}
                onChange={(e) => setEmailForm({...emailForm, name: e.target.value})}
                className="w-full p-2 border rounded-md"
                required
            />
            </div>
            
            <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
                type="email"
                value={emailForm.email}
                onChange={(e) => setEmailForm({...emailForm, email: e.target.value})}
                className="w-full p-2 border rounded-md"
                required
            />
            </div>
            
            <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
                value={emailForm.message}
                onChange={(e) => setEmailForm({...emailForm, message: e.target.value})}
                className="w-full p-2 border rounded-md h-32"
                required
            />
            </div>
            
            <button
            type="submit"
            disabled={sending}
            className={`w-full p-2 rounded-md ${
                sending 
                ? 'bg-gray-400' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white transition-colors`}
            >
            {sending ? 'Sending...' : 'Send Message'}
            </button>
        </form>
        </div>
    );
};

export default ContactForm;