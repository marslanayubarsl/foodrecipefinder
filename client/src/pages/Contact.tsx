import { motion } from "framer-motion";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Map, Facebook, Twitter, Instagram, CircleDashed } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    // Show success message
    alert("Thanks for your message! We'll get back to you soon.");
  };

  return (
    <motion.div 
      className="animate-fade-in"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-black opacity-80"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h1" size="lg" emphasis="accent" className="mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Contact Us
            </Heading>
            <p className="text-lg md:text-xl mb-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">We'd love to hear from you</p>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h2" size="md" className="mb-6">Get In Touch</Heading>
            <p className="text-gray-700 mb-8">Have questions, feedback, or suggestions? We're here to help! Fill out the form and our team will get back to you as soon as possible.</p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="font-heading font-semibold text-lg">Address</h3>
                  <p className="text-gray-700">123 Recipe Street, Foodie City, FC 12345</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="font-heading font-semibold text-lg">Phone</h3>
                  <p className="text-gray-700">(123) 456-7890</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="font-heading font-semibold text-lg">Email</h3>
                  <p className="text-gray-700">hello@recipefinder.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Clock size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="font-heading font-semibold text-lg">Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 9am - 5pm<br />Weekend: Closed</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <h3 className="font-heading font-semibold text-xl mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 social-icon">
                  <Facebook size={18} />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 social-icon">
                  <Twitter size={18} />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 social-icon">
                  <Instagram size={18} />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 social-icon">
                  <CircleDashed size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h2" size="sm" className="mb-6">Send Us a Message</Heading>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" 
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" 
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="How can we help?"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full rounded-lg">Send Message</Button>
            </form>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md h-96">
            <MapContainer 
              center={[40.7128, -74.0060]} 
              zoom={13} 
              scrollWheelZoom={false}
              style={{ height: '100%', width: '100%' }}
              className="z-10"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[40.7128, -74.0060]}>
                <Popup>
                  <div className="p-2">
                    <h3 className="font-heading font-semibold text-base">Recipe Finder HQ</h3>
                    <p className="text-sm text-gray-700">123 Recipe Street<br/>Foodie City, FC 12345</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Heading as="h2" size="md" className="mb-8 text-center">Frequently Asked Questions</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              whileHover={{ y: -5 }}
            >
              <h3 className="font-heading font-semibold text-lg mb-3">How do I save my favorite recipes?</h3>
              <p className="text-gray-700 dark:text-gray-300">You can save recipes by clicking the heart icon on any recipe card or recipe detail page. Access your saved recipes anytime from your profile.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              whileHover={{ y: -5 }}
            >
              <h3 className="font-heading font-semibold text-lg mb-3">Can I submit my own recipes?</h3>
              <p className="text-gray-700 dark:text-gray-300">Yes! We welcome community contributions. Simply create an account and use the "Submit Recipe" feature in your profile dashboard.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              whileHover={{ y: -5 }}
            >
              <h3 className="font-heading font-semibold text-lg mb-3">How accurate are the cooking times?</h3>
              <p className="text-gray-700 dark:text-gray-300">Cooking times are estimates based on average conditions. They may vary depending on your equipment and experience.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              whileHover={{ y: -5 }}
            >
              <h3 className="font-heading font-semibold text-lg mb-3">Are there options for dietary restrictions?</h3>
              <p className="text-gray-700 dark:text-gray-300">Yes, you can filter recipes by various dietary needs including vegetarian, vegan, gluten-free, dairy-free, and more.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
