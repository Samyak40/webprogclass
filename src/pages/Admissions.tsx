import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    title: "Explore Programs",
    description: "Discover our diverse range of undergraduate and graduate offerings.",
  },
  {
    title: "Check Requirements",
    description: "Review specific prerequisites for your chosen field of study.",
  },
  {
    title: "Submit Application",
    description: "Complete the online application through our secure portal.",
  },
  {
    title: "Financial Aid",
    description: "Explore scholarship and grant opportunities to support your journey.",
  },
];

export default function Admissions() {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-headline text-[3.5rem] font-bold text-on-surface mb-8">Admissions</h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-12">
              Join a community of scholars, researchers, and innovators. We look for students who are ready to challenge themselves and contribute to the world in meaningful ways.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl editorial-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <CheckCircle size={24} />
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-[2.75rem] font-bold text-on-surface mb-8">Ready to Apply?</h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Our application process is designed to be comprehensive and fair. We consider your academic achievements, extracurricular involvements, and personal character.
            </p>
            <div className="space-y-4">
              <button 
                onClick={() => navigate("/apply")}
                className="w-full md:w-auto px-10 py-4 bg-primary text-white font-bold rounded-lg editorial-shadow hover:scale-105 transition-transform cursor-pointer"
              >
                Start Undergraduate Application
              </button>
              <br />
              <button 
                onClick={() => navigate("/apply")}
                className="w-full md:w-auto px-10 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
              >
                Graduate Admissions Portal
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden editorial-shadow rotate-3">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjHe4sMIw68G6d7tVfVLFNnl645Egodlugr8if-5Dk2jZvSksuPAVjM0dCq2fSTHTkMdYLahcfX1X6qvM8yXDhOHn16Pp63d-zkjjNzJXpk516Vgo93rTfY_p1byhBA3fS6GwJsAXS8llZKJ6NZfGZyQONxvZyMHpY0PrGnGgaVZK7VbZBE2InnKUp9Kty3SMBjBOVkAwfzMCL3g2uHc5fr0QDWhDSArpRRinQi71X145WoiCRB98hJpWF_TiEnmKEXQWKjvvUXxk5" 
                alt="Students on campus"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
