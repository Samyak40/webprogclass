import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function NewsAnnouncements() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-headline text-[2.75rem] font-bold text-on-surface mb-4">News & Announcements</h2>
            <div className="h-1.5 w-24 bg-primary"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Feature News */}
          <motion.div 
            whileHover={{ y: -5 }}
            onClick={() => navigate("/research")}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-surface-container-high editorial-shadow cursor-pointer"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0JuX2KrQHJnhUuY3OlUkon97N9pPBNuoy1MuLjLGHTsRkIsbfU4HC_EBXfVnJ5wk7Jpo7CYvuMyUXne0-pjBCNAvnXUFSceaWTCj7m9NrF53kdqb992Xe9zNJFltAyK3bFkT86n-yxyQW5ml9V-uplJuSpbcw5cN0ej4LZ67IdHdwlhCk8bIVakr7ke8EZX3R19GQjj6XYRkceShfaUcrsMqXBMZQBY5lAn4kFmfZnz3VPopxuY84oZrLy167POrxUHAeJDX_HkhT" 
              alt="Scientific Discovery"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 p-10 text-white">
              <span className="text-[0.75rem] font-bold tracking-widest uppercase mb-4 block">Scientific Discovery</span>
              <h3 className="font-headline text-2xl font-bold leading-tight mb-4">New Breakthrough in Quantum Computing Efficiency</h3>
              <p className="text-white/80 line-clamp-2">Stanford researchers have developed a new method to reduce noise in quantum processors, bringing us closer to practical applications.</p>
            </div>
          </motion.div>

          {/* News Card 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            onClick={() => navigate("/campus-life")}
            className="bg-surface-container-low p-8 rounded-xl editorial-shadow hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <span className="text-[0.7rem] font-bold tracking-widest uppercase text-primary mb-4 block">Campus Life</span>
            <h3 className="font-headline text-xl font-bold mb-4">Renovations Begin on Main Quad Historic Arches</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Preservation efforts focus on maintaining the aesthetic integrity of the iconic sandstone structures.</p>
          </motion.div>

          {/* News Card 3 */}
          <motion.div 
            whileHover={{ y: -5 }}
            onClick={() => navigate("/admissions")}
            className="bg-surface-container-low p-8 rounded-xl editorial-shadow hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            <span className="text-[0.7rem] font-bold tracking-widest uppercase text-primary mb-4 block">Admissions</span>
            <h3 className="font-headline text-xl font-bold mb-4">Class of 2028: Diversity and Academic Excellence</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">The incoming class represents 72 countries and all 50 states, marking a historic year for the university.</p>
          </motion.div>

          {/* News Card 4 (Horizontal across bottom) */}
          <motion.div 
            whileHover={{ y: -5 }}
            onClick={() => navigate("/academics")}
            className="md:col-span-2 bg-surface-container-low p-8 rounded-xl editorial-shadow flex gap-6 items-center cursor-pointer"
          >
            <div className="hidden sm:block w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjHe4sMIw68G6d7tVfVLFNnl645Egodlugr8if-5Dk2jZvSksuPAVjM0dCq2fSTHTkMdYLahcfX1X6qvM8yXDhOHn16Pp63d-zkjjNzJXpk516Vgo93rTfY_p1byhBA3fS6GwJsAXS8llZKJ6NZfGZyQONxvZyMHpY0PrGnGgaVZK7VbZBE2InnKUp9Kty3SMBjBOVkAwfzMCL3g2uHc5fr0QDWhDSArpRRinQi71X145WoiCRB98hJpWF_TiEnmKEXQWKjvvUXxk5" 
                alt="Academics"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-[0.7rem] font-bold tracking-widest uppercase text-primary mb-2 block">Academics</span>
              <h3 className="font-headline text-xl font-bold mb-2">Major Gift to Support New Sustainable Finance Initiative</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">The endowment will provide scholarships and research grants for students focused on environmental economics.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

