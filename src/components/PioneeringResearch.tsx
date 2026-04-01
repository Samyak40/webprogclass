import { motion } from "motion/react";

const researchItems = [
  {
    id: "01",
    title: "Human-Centered AI",
    description: "Bridging the gap between artificial intelligence and human ethics.",
  },
  {
    id: "02",
    title: "Genomic Medicine",
    description: "Personalizing healthcare through deep DNA sequence analysis.",
  },
  {
    id: "03",
    title: "Climate Solutions",
    description: "Developing sustainable energy infrastructure for the next century.",
  },
];

export default function PioneeringResearch() {
  return (
    <section className="py-24 bg-surface-container-low relative">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 relative">
            <div className="aspect-video rounded-xl overflow-hidden editorial-shadow">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8CnWM8cgDXTpvFK_FfAuXuk5KAwq8nDhnJ04Lp5Kh9MjJVqJwEwx7kmhB0RXcE7jv_pn5xWV-tkN3h47t3tA-gpn7Q8OKUG4QGugN_NzcP_q0Ac9P_O4PWDrVhYDpnHdZ1nnHMJFORhJMJ8BSUUmI4E2fCKzyvmM7wfHL3yfKMTKQvsG9YJTD52OsCXbD4fsN4UFNM6VNv-6Wl0qpxayuycqjEhpOdEAKAisgaiNC2FYI908puL40RDxMhSre-LYUUWfzADvCe_V2" 
                alt="Robotic Research"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -top-10 -right-10 bg-white/80 backdrop-blur-md p-8 rounded-xl editorial-shadow max-w-xs hidden md:block"
            >
              <p className="font-headline italic text-lg text-on-surface">
                "Innovation at Stanford isn't just about technology, it's about solving the world's most pressing challenges."
              </p>
              <p className="mt-4 text-sm font-bold text-primary">— Dr. Elena Rodriguez</p>
            </motion.div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <h2 className="font-headline text-[2.75rem] font-bold text-on-surface mb-8">Pioneering Research</h2>
            <p className="text-on-surface-variant leading-relaxed mb-8 italic">
              Exploring the boundaries of human knowledge across all disciplines.
            </p>
            <div className="space-y-8">
              {researchItems.map((item) => (
                <motion.div 
                  key={item.id}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 group cursor-pointer"
                >
                  <span className="text-2xl font-headline text-primary/30 group-hover:text-primary transition-colors">
                    {item.id}
                  </span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
