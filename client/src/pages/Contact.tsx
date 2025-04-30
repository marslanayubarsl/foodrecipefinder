import { motion } from "framer-motion";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
            <Heading as="h1" size="lg" emphasis="accent" color="white" className="mb-4">
              Contact Us
            </Heading>
            <p className="text-lg md:text-xl mb-0 text-gray-200">We'd love to hear from you</p>
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
                  <i className="fas fa-map-marker-alt"></i>
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
                  <i className="fas fa-phone-alt"></i>
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
                  <i className="fas fa-envelope"></i>
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
                  <i className="fas fa-clock"></i>
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
                <a href="#" className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h2" size="sm" className="mb-6">Send Us a Message</Heading>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                  placeholder="How can we help?"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
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
          <div className="bg-white rounded-xl overflow-hidden shadow-md h-96">
            {/* This would be a real map integration in production */}
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
              <div className="text-center px-4">
                <i className="fas fa-map-marked-alt text-primary text-5xl mb-4"></i>
                <p className="text-gray-700">Interactive map would be displayed here</p>
              </div>
            </div>
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
              className="bg-white p-6 rounded-xl shadow-md"
              whileHover={{ y: -5 }}
            >
              <h3 className="font-heading font-semibold text-lg mb-3">How do I save my favorite recipes?</h3>
              <p className="text-gray-700">You can save recipes by clicking the heart icon on any recipe card or recipe detail page. Access your saved recipes anytime from your profile.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              whileHover={{ y: -5 }}
            >
              <h3 className="font-heading font-semibold text-lg mb-3">Can I submit my own recipes?</h3>
              <p className="text-gray-700">Yes! We welcome community contributions. Simply create an account and use the "Submit Recipe" feature in your profile dashboard.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              whileHover={{ y: -5 }}
            >
              <h3 className="font-heading font-semibold text-lg mb-3">How accurate are the cooking times?</h3>
              <p className="text-gray-700">Cooking times are estimates based on average conditions. They may vary depending on your equipment and experience.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md"
              whileHover={{ y: -5 }}
            >
              <h3 className="font-heading font-semibold text-lg mb-3">Are there options for dietary restrictions?</h3>
              <p className="text-gray-700">Yes, you can filter recipes by various dietary needs including vegetarian, vegan, gluten-free, dairy-free, and more.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
