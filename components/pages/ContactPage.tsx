import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Sending...');
    // Simulate a network request
    setTimeout(() => {
      setFormStatus('Your message has been sent successfully!');
      setFormState({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-lg leading-6 text-foreground/70">
                Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
        </div>
        <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div className="bg-secondary p-8 rounded-lg border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Full Name</Label>
                <Input type="text" name="name" id="name" value={formState.name} onChange={handleChange} required placeholder="John Doe" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" value={formState.email} onChange={handleChange} required placeholder="you@example.com" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input type="tel" name="phone" id="phone" value={formState.phone} onChange={handleChange} placeholder="9876543210" />
              </div>
               <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea placeholder="Type your message here." name="message" id="message" value={formState.message} onChange={handleChange} required />
              </div>

              <div>
                <Button type="submit" className="w-full" size="lg">
                  {formStatus === 'Sending...' ? 'Sending...' : 'Submit'}
                </Button>
              </div>
              {formStatus && formStatus !== 'Sending...' && <p className="text-center text-green-600">{formStatus}</p>}
            </form>
          </div>
          <div className="mt-8 lg:mt-0">
             <div className="w-full h-full min-h-[400px] bg-gray-200 rounded-lg shadow-md flex items-center justify-center overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1572455322927-2c7a0ffa03b0?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Map placeholder" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;