import React from 'react'

const About = () => {
    return (
        <div className="container mx-auto px-4 py-10 prose">
          <h1>About Us</h1>
          <p>Welcome to Final Project, your one-stop shop for Products! We're a passionate team dedicated to providing you with high-quality Products at affordable prices.</p>
          <p>Our story began in 1121 when Beka Tsertsvadze saw a need for reason for starting the shop. Since then, we've grown into a trusted online retailer, offering a wide selection of Products to meet your every need.</p>
          <h2>Why Choose Us?</h2>
          <ul className="list-disc pl-4">
            <li>High-Quality Products: We source our products from reliable vendors to ensure you receive the best possible quality.</li>
            <li>Affordable Prices: We believe everyone should have access to great products, so we offer competitive prices on all our items.</li>
            <li>Excellent Customer Service: We're committed to providing you with a positive shopping experience. Our friendly customer service team is always happy to help with any questions or concerns you may have.</li>
            <li>Secure Shopping: We use secure payment processing to ensure your financial information is always protected.</li>
          </ul>
          <h2>Join Our Community!</h2>
          <p>Stay up-to-date on the latest products, promotions, and more by following us on social media:</p>
          <div className="flex space-x-4 mt-4">
           <a  href="https://github.com/Nakamura1121" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/btsertsvadze/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            LinkedIn
          </a>
          </div>
        </div>
      );
}

export default About;
