import { motion } from "motion/react";
import { Zap, Microscope, Cpu, FlaskConical } from "lucide-react";

const areas = [
  {
    title: "Quantum Computing",
    icon: <Cpu size={24} />,
    description: "Pushing the limits of computation through quantum mechanics.",
  },
  {
    title: "Biomedical Engineering",
    icon: <Microscope size={24} />,
    description: "Developing new technologies to improve human health.",
  },
  {
    title: "Sustainable Energy",
    icon: <Zap size={24} />,
    description: "Creating clean energy solutions for a greener planet.",
  },
  {
    title: "Advanced Materials",
    icon: <FlaskConical size={24} />,
    description: "Designing materials with extraordinary properties.",
  },
];

export default function Research() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="font-headline text-[3.5rem] font-bold text-on-surface mb-8">Research at Stanford</h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-10">
                Our researchers are driven by a desire to understand the world and solve its most pressing challenges. From the smallest particles to the vastness of space, we are exploring the unknown.
              </p>
            </motion.div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden editorial-shadow">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8CnWM8cgDXTpvFK_FfAuXuk5KAwq8nDhnJ04Lp5Kh9MjJVqJwEwx7kmhB0RXcE7jv_pn5xWV-tkN3h47t3tA-gpn7Q8OKUG4QGugN_NzcP_q0Ac9P_O4PWDrVhYDpnHdZ1nnHMJFORhJMJ8BSUUmI4E2fCKzyvmM7wfHL3yfKMTKQvsG9YJTD52OsCXbD4fsN4UFNM6VNv-6Wl0qpxayuycqjEhpOdEAKAisgaiNC2FYI908puL40RDxMhSre-LYUUWfzADvCe_V2" 
                  alt="Research Lab"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <h2 className="font-headline text-[2.75rem] font-bold text-on-surface mb-16 text-center">Key Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((area, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-surface-container-low p-8 rounded-xl editorial-shadow border-t-4 border-primary"
              >
                <div className="text-primary mb-6">{area.icon}</div>
                <h3 className="font-headline text-xl font-bold mb-4">{area.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
