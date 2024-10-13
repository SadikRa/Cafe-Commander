import { Link } from "react-router-dom";
import logo from "../../assets/Cafe_Commander_logo1.jpg";
import { FaAmazon, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-amber-300 bg-opacity-50 text-white py-12 mt-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          
          {/* About Section */}
          <div>
            <Link to={'/'}><img className="h-16 mb-4 w-28  rounded-md hover:shadow-white hover:shadow-md"  src={logo} alt="" /></Link>
            <p>
              Experience the finest blend of modern cuisine and timeless classics in the heart of the city. Our chefs create dishes with passion and precision, ensuring every bite is a masterpiece.
            </p>
          </div>
  
          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Address: 123 Dhaka, Food Town</p>
            <p>Phone: 01784565871</p>
            <p>Email: sadikrahman494@gmail.com</p>
          </div>
  
          {/* Opening Hours Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <p>Saturday - Thursday: 10am - 10pm</p>
            <p>Friday:  11am - 8pm</p>
          </div>
  
          {/* Social Links and Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-2xl hover:text-gray-300">
                <i className="fab fa-facebook"><FaFacebook /></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-300">
                <i className="fab fa-instagram"> <FaInstagram /></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-300">
                <i className="fab fa-twitter"><FaTwitter /></i>
              </a>
            </div>
  
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/menu" className="hover:text-gray-300">Our Menu</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">Contact Us</a>
              </li>
              <li>
                <a href="/reservations" className="hover:text-gray-300">Reservations</a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Copyright Section */}
        <div className="text-center mt-8 border-t border-white pt-4">
          <p>© {new Date().getFullYear()} Cafe Commander. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  