import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-lg font-mono">
          afdilSaputra
          <span className="ml-0 cursor">|</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-gray-300 transition duration-300 hover:text-white">
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex md:hidden items-center justify-center text-white transition duration-300 hover:text-gray-300">
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 top-16 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
          />

          {/* Sidebar */}
          <div className="fixed top-16 right-0 h-screen w-64 border-l border-white/10 bg-black/95 backdrop-blur-md md:hidden overflow-y-auto">
            <div className="space-y-2 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-lg text-gray-300 transition duration-300 hover:bg-white/10 hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;