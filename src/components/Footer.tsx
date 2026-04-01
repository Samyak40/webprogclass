import { Share2, Mail } from "lucide-react";
import stanfordLogo from "../assets/stanford.png";

export default function Footer() {
  return (
    <footer className="bg-stone-100 dark:bg-stone-950 font-body text-sm leading-relaxed py-16">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img 
              src={stanfordLogo} 
              alt="Stanford Logo" 
              className="h-8 w-auto object-contain"
            />
            <h2 className="text-xl font-bold font-headline text-primary">Stanford University</h2>
          </div>
          <p className="text-on-surface-variant max-w-xs">
            A world-class institution dedicated to pushing the boundaries of knowledge and preparing future leaders.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-on-surface uppercase tracking-widest text-[0.7rem] mb-2">General Info</h3>
          {["Contact Us", "Campus Map", "Work at Stanford", "Visit Campus"].map((item) => (
            <a key={item} className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200" href="#">
              {item}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-on-surface uppercase tracking-widest text-[0.7rem] mb-2">Policies</h3>
          {["Privacy Policy", "Accessibility", "Nondiscrimination Policy"].map((item) => (
            <a key={item} className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-transform duration-200" href="#">
              {item}
            </a>
          ))}
        </div>

        <div>
          <h3 className="font-bold text-on-surface uppercase tracking-widest text-[0.7rem] mb-6">Stay Connected</h3>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
              <Share2 size={18} />
            </a>
            <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
              <Mail size={18} />
            </a>
          </div>
          <p className="mt-8 text-[0.75rem] text-stone-500">
            © Stanford University. Stanford, California 94305.
          </p>
        </div>
      </div>
    </footer>
  );
}
