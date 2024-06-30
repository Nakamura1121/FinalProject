import React from 'react'

const contact = () => {
    return (
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Feel free to reach out using the information below, or fill out the contact form.</p>
            <ul className="list-none space-y-2">
              <li className="flex items-center">
                <i className="fas fa-phone-alt text-gray-500 mr-2"></i>
                <span>57777****</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-gray-500 mr-2"></i>
                <span>beka.tsertsvadze.1@btu.edu.ge</span>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/Business+and+Technology+University/@41.7065737,44.7360921,17z/data=!3m1!4b1!4m6!3m5!1s0x40447344e8047ced:0xb53d8ecd4495903f!8m2!3d41.7065697!4d44.738667!16s%2Fg%2F11c1rtb70k?entry=ttu" target="_blank" className="text-blue-500 hover:text-blue-700">
                  BTU EDU GE
                </a>
              </li>
            </ul>
          </div>
          <form className="flex flex-col space-y-4">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" className="border border-gray-300 rounded-md px-3 py-2" required />
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" className="border border-gray-300 rounded-md px-3 py-2" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" className="border border-gray-300 rounded-md px-3 py-2" required></textarea>
            <button type="submit" className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded-md font-bold">Send Message</button>
          </form>
        </div>
      );
}

export default contact;
