import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Send, User, BookOpen, GraduationCap, FileText, ChevronRight, ChevronLeft } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";

export default function Apply() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    address: "",
    highSchool: "",
    gpa: "",
    satScore: "",
    actScore: "",
    programType: "undergraduate",
    major: "",
    extracurriculars: "",
    personalStatement: ""
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-surface flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full bg-white p-12 rounded-3xl shadow-2xl text-center border border-primary/10"
        >
          <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-4xl font-headline font-bold text-on-surface mb-6">Application Submitted!</h1>
          <p className="text-xl text-on-surface-variant mb-10 leading-relaxed">
            Thank you, {formData.firstName}. Your application to Stanford University has been received. Our admissions committee will review your information and contact you via email ({formData.email}) regarding the next steps.
          </p>
          <button 
            onClick={() => window.location.href = "/"}
            className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Return to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-surface-container-low">
      {/* Header */}
      <section className="bg-white border-b border-outline-variant py-16">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-4">University Application</h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Please provide accurate and detailed information to help us understand your background and aspirations.
          </p>
        </div>
      </section>

      {/* Form Progress */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <div className="flex justify-between items-center mb-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant -z-10 -translate-y-1/2"></div>
          {[1, 2, 3, 4].map((num) => (
            <div 
              key={num}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                step >= num ? "bg-primary text-white scale-110 shadow-lg shadow-primary/20" : "bg-surface-container-highest text-on-surface-variant"
              }`}
            >
              {num}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-outline-variant">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-outline-variant">
                  <User className="text-primary" size={24} />
                  <h2 className="text-2xl font-headline font-bold">Personal Information</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">First Name</label>
                    <input 
                      required
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Last Name</label>
                    <input 
                      required
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="jane.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Home Address</label>
                    <input 
                      required
                      type="text" 
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="123 University Ave, Palo Alto, CA"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-outline-variant">
                  <BookOpen className="text-primary" size={24} />
                  <h2 className="text-2xl font-headline font-bold">Academic Background</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Current/Most Recent Institution</label>
                    <input 
                      required
                      type="text" 
                      name="highSchool"
                      value={formData.highSchool}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Stanford Heights High School"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Cumulative GPA</label>
                    <input 
                      required
                      type="text" 
                      name="gpa"
                      value={formData.gpa}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="4.0"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">SAT Score (Optional)</label>
                    <input 
                      type="text" 
                      name="satScore"
                      value={formData.satScore}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="1550"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-outline-variant">
                  <GraduationCap className="text-primary" size={24} />
                  <h2 className="text-2xl font-headline font-bold">Program Selection</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Application Type</label>
                    <select 
                      name="programType"
                      value={formData.programType}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    >
                      <option value="undergraduate">Undergraduate</option>
                      <option value="graduate">Graduate</option>
                      <option value="professional">Professional</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Intended Major/Field</label>
                    <input 
                      required
                      type="text" 
                      name="major"
                      value={formData.major}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Computer Science"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Extracurricular Activities & Achievements</label>
                    <textarea 
                      name="extracurriculars"
                      value={formData.extracurriculars}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-4 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                      placeholder="List your key involvements, leadership roles, and awards..."
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-outline-variant">
                  <FileText className="text-primary" size={24} />
                  <h2 className="text-2xl font-headline font-bold">Personal Statement</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-on-surface-variant leading-relaxed italic">
                    "Stanford students are known for their intellectual vitality. Please share a topic, idea, or concept that gets you excited about learning."
                  </p>
                  <textarea 
                    required
                    name="personalStatement"
                    value={formData.personalStatement}
                    onChange={handleInputChange}
                    rows={10}
                    className="w-full p-6 bg-surface-container-low border border-outline-variant rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Type your essay here (minimum 250 words)..."
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="mt-12 pt-8 border-t border-outline-variant flex justify-between items-center">
            <button
              type="button"
              onClick={prevStep}
              disabled={step === 1}
              className={`flex items-center gap-2 font-bold px-6 py-3 rounded-xl transition-all ${
                step === 1 ? "opacity-0 pointer-events-none" : "text-on-surface-variant hover:bg-surface-container-highest"
              }`}
            >
              <ChevronLeft size={20} /> Back
            </button>

            {step < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                Next Step <ChevronRight size={20} />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-2 bg-primary text-white font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                Submit Application <Send size={20} className="ml-2" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
