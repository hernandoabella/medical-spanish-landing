import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4C8BFF]/70 via-30% to-transparent mb-12"></div>

        {/* Contact Info & Copyright - Better organized */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-12">
          <div className="text-center lg:text-left">
            <p className="text-xl font-semibold mb-4">Get in touch with us</p>
            <a 
              href="mailto:contact@praxmed.com" 
              className="text-[#4C8BFF] hover:text-[#8DA9FF] text-xl font-semibold transition-colors duration-300 inline-flex items-center justify-center gap-3 hover:gap-4"
            >
              <MdEmail className="text-2xl" />
              contact@praxmed.com
            </a>
          </div>
          
          {/* Enhanced Social Media Icons */}
          <div className="flex justify-center gap-8">
            <a 
              href="#" 
              className="text-3xl p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-[#4C8BFF] transition-all duration-300 hover:scale-110 transform"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a 
              href="#" 
              className="text-3xl p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-[#4C8BFF] transition-all duration-300 hover:scale-110 transform"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a 
              href="#" 
              className="text-3xl p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-[#4C8BFF] transition-all duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="#" 
              className="text-3xl p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-[#4C8BFF] transition-all duration-300 hover:scale-110 transform"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-white/90 text-lg">
            © {new Date().getFullYear()} PRAXMED Publishing. All rights reserved.
          </p>
          <p className="text-white/60 mt-3">
            Empowering healthcare through innovative medical publishing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;