import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/fevicon-logo1.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-secondary shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3" >
          <img
            src={logo}
            alt="Mangalam Construction Logo"
            width={100}
            height={100}
            className="w-16 h-18 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain -mt-3"
          /> 

          <span className="sm:block text-center font-display text-[20px] md:text-xl lg:text-2xl font-bold text-primary-foreground tracking-wide">
            Mangalam <span className="text-gradient-gold">Construction</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gold-dark transition-colors"
            >
              Get Quote
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-md pb-6">
          <ul className="flex flex-col items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-primary-foreground/90 hover:text-primary font-medium text-lg"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold"
              >
                Get Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
