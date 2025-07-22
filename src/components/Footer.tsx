const Footer = () => {
    return (
      <footer className="bg-Dark-Accent text-white py-10 px-6 mt-20 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-Primary-Red mb-4">PizzaFlame</h3>
            <p className="text-sm text-gray-300">
              Serving delicious hot pizzas made with love and fresh ingredients. Order now and experience the flavor!
            </p>
          </div>
  
          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/menu" className="hover:text-white">Menu</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
  
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-300">📍 123 Pizza Street, Food City</p>
            <p className="text-sm text-gray-300">📞 +1 (800) 123-4567</p>
            <p className="text-sm text-gray-300">✉️ hello@pizzaflame.com</p>
          </div>
        </div>
  
        <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} PizzaFlame. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  