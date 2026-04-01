import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-headline text-4xl font-bold mb-8">Begin Your Journey</h2>
        <p className="text-xl text-white/80 leading-relaxed mb-12">
          Join a community dedicated to solving the world's greatest challenges and creating a better future for all.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={() => navigate("/apply")}
            className="bg-white text-primary px-10 py-4 font-bold rounded-lg editorial-shadow hover:bg-surface-container-low transition-colors cursor-pointer"
          >
            Apply to Stanford
          </button>
          <button 
            onClick={() => navigate("/academics")}
            className="border-2 border-white/30 text-white px-10 py-4 font-bold rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            Request Information
          </button>
        </div>
      </div>
    </section>
  );
}

