import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0F2137] px-6 py-16 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-[#4C8BFF]/70 to-transparent" />

        <div className="mb-12 flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="mb-4 text-xl font-semibold">Get in touch with us</p>
            <a
              href="mailto:contact@praxmedpublishing.com"
              className="inline-flex items-center justify-center gap-3 text-xl font-semibold text-[#4C8BFF] transition-colors duration-300 hover:text-[#8DA9FF]"
            >
              <MdEmail className="text-2xl" />
              contact@praxmedpublishing.com
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="transform rounded-full bg-white/5 p-3 text-3xl transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-[#4C8BFF]"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="transform rounded-full bg-white/5 p-3 text-3xl transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-[#4C8BFF]"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="transform rounded-full bg-white/5 p-3 text-3xl transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-[#4C8BFF]"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="transform rounded-full bg-white/5 p-3 text-3xl transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-[#4C8BFF]"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-lg text-white/90">
            © {new Date().getFullYear()} PRAXMED Publishing. All rights reserved.
          </p>
          <p className="mt-3 text-white/60">
            Empowering healthcare through innovative medical publishing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
