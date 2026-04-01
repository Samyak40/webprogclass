import { X, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import stanfordLogo from "../assets/stanford.png";

export default function TopNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/" },
    { name: "Admissions", path: "/admissions" },
    { name: "Academics", path: "/academics" },
    { name: "Research", path: "/research" },
    { name: "Campus Life", path: "/campus-life" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="fixed top-0 z-50 w-full glass-nav transition-colors duration-300">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <Link className="flex items-center gap-3 text-xl md:text-2xl font-bold font-headline text-primary group" to="/">
              <img 
                src={stanfordLogo} 
                alt="Stanford Logo" 
                className="h-8 md:h-10 w-auto object-contain"
              />
              <span className="hidden sm:inline">Stanford University</span>
            </Link>
          </div>
          <nav className="hidden lg:flex items-center gap-8 h-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                className={`relative h-full flex items-center font-medium font-headline text-lg tracking-tight transition-all duration-300 ${
                  isActive(item.path) 
                    ? "text-primary" 
                    : "text-on-surface-variant hover:text-primary"
                }`}
                to={item.path}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"
                  />
                )}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 md:gap-6">
            <Link 
              to="/apply"
              className={`hidden sm:block px-6 py-2.5 rounded-lg font-semibold transition-all active:scale-95 ${
                isActive("/apply")
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-primary text-white hover:opacity-90"
              }`}
            >
              Apply Now
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-surface flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <img 
                  src={stanfordLogo} 
                  alt="Stanford Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold font-headline text-primary">Menu</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              >
                <X size={32} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-bold font-headline transition-colors ${
                    isActive(item.path) ? "text-primary" : "text-on-surface hover:text-primary"
                  }`}
                  to={item.path}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              <Link 
                to="/apply"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-center py-4 rounded-xl font-bold text-xl transition-all ${
                  isActive("/apply")
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-primary text-white"
                }`}
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}




