import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-surface-container-low overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 z-10"
        >
          <span className="inline-block px-3 py-1 bg-primary text-white text-[0.75rem] font-bold tracking-widest mb-6 rounded-sm">
            SINCE 1891
          </span>
          <h1 className="font-headline text-[3.5rem] md:text-[4.5rem] leading-[1.1] font-bold text-on-surface mb-8">
            A Place for Discovery
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl mb-10">
            Stanford is a place for learning, discovery, innovation, expression and discourse. Located in the heart of Northern California's Silicon Valley.
          </p>
          <div className="flex flex-wrap gap-6">
            <button 
              onClick={() => navigate("/academics")}
              className="px-8 py-4 bg-primary text-white font-bold rounded-lg editorial-shadow hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Explore Programs
            </button>
            <button 
              onClick={() => navigate("/campus-life")}
              className="px-8 py-4 border-b-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors cursor-pointer"
            >
              Virtual Tour
            </button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow transform translate-x-4 md:translate-x-8">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVMVw_phiCl3gXURqBULKtQt8rTqKvez0JMUvPgPYFhlquH7befh7Qgra3_oioIg3FR8DzMsptChQu3h6NyZhTxYiBhJessb2h_-5ITy3yugKCjv5MTGSWlLHqO6qwMDPrA7wzXyTkkvw1-_BGq9pqYCaS7WNJjA3sr6R5KczZPhf2FFqcHCyoE6aLPO9G-WxmSIquoW737hFabLDM45kGKlUQ7QN9TyRKbsNJZQx3j13PO11mBDmXLPXIASZ3mlHDKqpIM-7g07nK" 
              alt="Stanford University Memorial Court"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-surface-container-highest rounded-xl -z-10 transform -rotate-6 hidden md:block"></div>
        </motion.div>
      </div>
    </section>
  );
}

