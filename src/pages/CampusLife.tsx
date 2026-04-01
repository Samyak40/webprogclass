import { motion } from "motion/react";
import { Coffee, Music, Users, MapPin, Heart, Sparkles } from "lucide-react";

const lifeFeatures = [
  {
    title: "Student Organizations",
    description: "With over 600 student groups, there's a community for every interest, from arts and culture to technology and social justice.",
    icon: <Users className="text-primary" size={32} />,
    image: "https://picsum.photos/seed/students/800/600"
  },
  {
    title: "Arts & Culture",
    description: "A vibrant arts scene with world-class museums, performance spaces, and student-led creative initiatives.",
    icon: <Music className="text-primary" size={32} />,
    image: "https://picsum.photos/seed/arts/800/600"
  },
  {
    title: "Health & Well-being",
    description: "Comprehensive resources dedicated to the physical, mental, and emotional health of our entire community.",
    icon: <Heart className="text-primary" size={32} />,
    image: "https://picsum.photos/seed/health/800/600"
  },
  {
    title: "Dining & Social Spaces",
    description: "From historic dining halls to modern cafes, our campus offers diverse spaces to connect and refuel.",
    icon: <Coffee className="text-primary" size={32} />,
    image: "https://picsum.photos/seed/dining/800/600"
  }
];

export default function CampusLife() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-surface-container-high">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/campus-life/1920/1080" 
            alt="Campus Life" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            The Stanford Experience
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-headline font-bold text-on-surface mb-6"
          >
            Life at Stanford
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-on-surface-variant leading-relaxed"
          >
            A vibrant, diverse community where students live, learn, and grow together in one of the world's most beautiful campus settings.
          </motion.p>
        </div>
      </section>

      {/* Residential Life */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-headline font-bold text-on-surface mb-6">A Residential University</h2>
              <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                Stanford is a residential university, with nearly all undergraduates and many graduate students living on campus. Our residences are more than just places to sleep—they are vibrant hubs of intellectual and social life.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Diverse Neighborhoods</h3>
                    <p className="text-on-surface-variant">Eight distinct residential neighborhoods, each with its own unique character and community traditions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Sparkles className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Theme Houses</h3>
                    <p className="text-on-surface-variant">Specialized housing options focused on academic interests, cultural identity, or creative pursuits.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://picsum.photos/seed/dorm/800/1000" 
                alt="Residential Life" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl hidden md:block max-w-xs">
                <p className="text-primary font-bold text-4xl mb-2">97%</p>
                <p className="text-on-surface-variant font-medium">of undergraduates live on campus for all four years.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold text-on-surface mb-4">Beyond the Classroom</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Discover the endless opportunities to explore your passions and build lifelong connections.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {lifeFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-outline-variant"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tradition Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">Rich in Tradition</h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              From the high-energy Big Game against Cal to the creative chaos of the Mausoleum Party, Stanford's traditions are as diverse and dynamic as its students.
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-surface-container-low transition-colors cursor-pointer">
              Explore Traditions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
