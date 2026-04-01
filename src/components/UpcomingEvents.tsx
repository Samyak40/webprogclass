import { Clock } from "lucide-react";
import { motion } from "motion/react";

const events = [
  {
    date: "14",
    month: "OCT",
    title: "Distinguished Speaker Series: The Future of Global Health",
    time: "4:00 PM PST",
    type: "LECTURE",
  },
  {
    date: "22",
    month: "OCT",
    title: "Stanford Symphony Orchestra: Autumn Concert",
    time: "7:30 PM PST",
    type: "PERFORMANCE",
  },
  {
    date: "05",
    month: "NOV",
    title: "Open House: Graduate School of Education",
    time: "10:00 AM PST",
    type: "ADMISSIONS",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="font-headline text-[2.75rem] font-bold text-on-surface mb-4">Upcoming Events</h2>
          <p className="text-on-surface-variant">Engage with our community of scholars and innovators.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="group border-b-2 border-surface-container-high pb-8 hover:border-primary transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="text-center">
                  <span className="block text-[0.75rem] font-bold text-primary tracking-widest uppercase">{event.month}</span>
                  <span className="block text-3xl font-headline font-bold">{event.date}</span>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant flex items-center gap-2 mb-4">
                    <Clock size={16} /> {event.time}
                  </p>
                  <span className="text-[0.7rem] px-2 py-1 bg-surface-container-highest rounded text-on-surface-variant font-bold uppercase tracking-wider">
                    {event.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
