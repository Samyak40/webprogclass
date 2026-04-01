import { motion } from "motion/react";
import { BookOpen, Users, Globe, Lightbulb } from "lucide-react";

const schools = [
  {
    name: "School of Engineering",
    icon: <Lightbulb size={24} />,
    description: "Innovating for a better future through cutting-edge research and education.",
  },
  {
    name: "School of Humanities & Sciences",
    icon: <BookOpen size={24} />,
    description: "The heart of the university, exploring the human experience across disciplines.",
  },
  {
    name: "Graduate School of Business",
    icon: <Users size={24} />,
    description: "Developing leaders who will change the world.",
  },
  {
    name: "School of Medicine",
    icon: <Globe size={24} />,
    description: "Advancing health through discovery, care, and education.",
  },
];

export default function Academics() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="font-headline text-[3.5rem] font-bold text-on-surface mb-8">Academics</h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Our academic programs are designed to foster critical thinking, creativity, and a lifelong passion for learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {schools.map((school, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-surface-container-low p-10 rounded-2xl editorial-shadow flex gap-8 items-start"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  {school.icon}
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-4">{school.name}</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-6">{school.description}</p>
                  <button className="text-primary font-bold hover:underline">Explore School →</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-highest">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-headline text-[2.75rem] font-bold text-on-surface mb-8">Interdisciplinary Excellence</h2>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                We believe that the most complex problems require solutions that cross traditional boundaries. Our interdisciplinary centers and programs bring together experts from diverse fields to collaborate on groundbreaking work.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow -rotate-2">
                <img src="https://picsum.photos/seed/library/600/800" alt="Library" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden editorial-shadow rotate-2 mt-12">
                <img src="https://picsum.photos/seed/classroom/600/800" alt="Classroom" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
