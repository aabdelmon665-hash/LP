import React, { useState, Children, Component } from 'react';
import { useParams } from 'react-router-dom';
import { translations, Language } from '../i18n/translations';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Users, Award, HeartHandshake, BookOpen, Plane, Microscope, Stethoscope, Activity, Pill, Cpu, Briefcase, BrainCircuit, ArrowRight, ArrowLeft, Play, CheckCircle2, Star, Quote, MessageCircle, X } from 'lucide-react';
export function Home() {
  const {
    lang
  } = useParams<{
    lang: string;
  }>();
  const currentLang = lang as Language || 'ar';
  const t = translations[currentLang];
  const isRtl = t.dir === 'rtl';
  const [selectedUni, setSelectedUni] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    phone: '',
    whatsapp: '',
    major: '',
    message: ''
  });
  const universityData = [{
    domain: 'sbu.edu.tr',
    majors: ['Medicine', 'Dentistry', 'Pharmacy', 'Nursing']
  }, {
    domain: 'medipol.edu.tr',
    majors: ['Medicine', 'Dentistry', 'Pharmacy', 'Engineering']
  }, {
    domain: 'aydin.edu.tr',
    majors: ['Dentistry', 'Engineering', 'Business', 'Software Engineering']
  }, {
    domain: 'bau.edu.tr',
    majors: ['Artificial Intelligence', 'Computer Engineering', 'Medicine', 'Architecture']
  }, {
    domain: 'ku.edu.tr',
    majors: ['Medicine', 'Business Administration', 'Engineering', 'Law']
  }, {
    domain: 'istinye.edu.tr',
    majors: ['Medicine', 'Pharmacy', 'Artificial Intelligence', 'Software Engineering']
  }, {
    domain: 'gelisim.edu.tr',
    majors: ['Engineering', 'Aviation', 'Health Sciences', 'Business']
  }, {
    domain: 'kent.edu.tr',
    majors: ['Dentistry', 'Health Sciences', 'Business', 'Psychology']
  }, {
    domain: 'fbu.edu.tr',
    majors: ['Pharmacy', 'Engineering', 'Sports Sciences', 'Economics']
  }];
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Consultation Request from ${formData.name}`;
    const body = `Name: ${formData.name}
Country: ${formData.country}
Phone: ${formData.phone}
WhatsApp: ${formData.whatsapp}
Major: ${formData.major}

Message:
${formData.message}`;
    window.location.href = `mailto:info@achievestudy.net,achievestudyedu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const staggerContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  return <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-sky-400/10 blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-white space-y-6">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <span className="text-blue-400 text-sm font-medium">
                  {t.hero.greeting}
                </span>
                <span className="text-white text-sm font-bold tracking-wider">
                  {t.hero.name}
                </span>
              </motion.div>

              <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl text-blue-300 font-medium">
                {t.hero.title}
              </motion.h2>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t.hero.headline}
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                {'\u062E\u0631\u064A\u062C \u062C\u0627\u0645\u0639\u0629 \u0627\u0644\u0639\u0644\u0648\u0645 \u0627\u0644\u0635\u062D\u064A\u0629 \u0641\u064A \u062A\u0631\u0643\u064A\u0627. \u0623\u0633\u0627\u0639\u062F \u0627\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u062F\u0648\u0644\u064A\u064A\u0646 \u0639\u0644\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062C\u0627\u0645\u0639\u0629 \u0648\u0627\u0644\u062A\u062E\u0635\u0635 \u0627\u0644\u0645\u0646\u0627\u0633\u0628 \u0648\u0627\u0644\u0642\u0628\u0648\u0644 \u0627\u0644\u062C\u0627\u0645\u0639\u064A \u062E\u0637\u0648\u0629 \u0628\u062E\u0637\u0648\u0629.'}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://wa.me/905431874532" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-green-500/25">
                  <MessageCircle size={20} />
                  {t.hero.btnPrimary}
                </a>
                <a href="#universities" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold transition-all backdrop-blur-sm">
                  {t.hero.btnSecondary}
                </a>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[600px] border border-white/10 shadow-2xl">
                <img src="/Untitled_design_(2).png" alt="Amr Mohamed" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }} className={`absolute bottom-10 ${isRtl ? '-left-6' : '-right-6'} bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4`}>
                <img src="/ChatGPT_Image_8_Haz_2026_23_45_08.png" alt="Achieve Study Abroad" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-slate-900 font-bold text-lg">
                    Achieve Study
                  </p>
                  <p className="text-slate-500 text-sm">
                    Trusted by 500+ Students
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="py-12 bg-white border-b border-slate-100 relative z-20 -mt-10 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-3xl shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          {[{
          icon: Users,
          value: '500+',
          label: t.stats.students,
          color: 'text-blue-600',
          bg: 'bg-blue-50'
        }, {
          icon: Award,
          value: '8+',
          label: t.stats.experience,
          color: 'text-amber-500',
          bg: 'bg-amber-50'
        }, {
          icon: GraduationCap,
          value: '100%',
          label: t.stats.grad,
          color: 'text-emerald-500',
          bg: 'bg-emerald-50'
        }, {
          icon: HeartHandshake,
          value: '24/7',
          label: t.stats.followup,
          color: 'text-purple-500',
          bg: 'bg-purple-50'
        }].map((stat, idx) => <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeInUp} className="flex flex-col items-center text-center space-y-3">
              <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-2`}>
                <stat.icon size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            </motion.div>)}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={fadeInUp} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
                {t.about.title}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                {t.hero.name}
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p className="font-medium text-slate-800">{t.about.p3}</p>
              </div>

              <div className="pt-6">
                <div className="inline-block">
                  <p className="text-4xl md:text-5xl text-slate-800 leading-none" style={{
                  fontFamily: "'Aref Ruqaa', serif"
                }}>
                    د. عمرو محمد
                  </p>
                  <div className="mt-2 h-0.5 w-40 bg-slate-300 rounded-full" />
                  <p className="mt-2 text-sm text-slate-500">
                    صيدلي ومؤسس Achieve Study Abroad
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.img initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1
            }} src="/IMG_7119.jpg" alt="Amr Mohamed in pharmacy coat at the Faculty of Pharmacy" className="rounded-2xl w-full h-64 object-cover object-top shadow-lg" />
              <motion.img initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }} src="/1.jpg" alt="Amr Mohamed at the SBU graduation ceremony" className="rounded-2xl w-full h-64 object-cover object-top shadow-lg mt-8" />
              <motion.img initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3
            }} src="/2.jpg" alt="Amr Mohamed studying in the university library" className="rounded-2xl w-full h-64 object-cover object-top shadow-lg grayscale" />
              <motion.img initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4
            }} src="/4.jpg" alt="Amr Mohamed in graduation gown on the university stairs" className="rounded-2xl w-full h-64 object-cover object-top shadow-lg mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t.process.title}
            </h2>
            <p className="text-xl text-blue-600 font-medium mb-4">
              {t.process.subtitle}
            </p>
            <p className="text-slate-600 text-lg">{t.process.description}</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-8"></div>
          </div>

          <div className="relative mb-20">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-slate-100 z-0">
              <div className="absolute top-0 left-0 h-full bg-blue-600/20 w-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {[{
              icon: MessageCircle,
              step: t.process.steps[0]
            }, {
              icon: GraduationCap,
              step: t.process.steps[1]
            }, {
              icon: BookOpen,
              step: t.process.steps[2]
            }, {
              icon: Plane,
              step: t.process.steps[3]
            }, {
              icon: Award,
              step: t.process.steps[4]
            }].map((item, idx) => <motion.div key={idx} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: idx * 0.1
            }} className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:border-blue-100 group-hover:bg-blue-50 transition-all duration-300 relative z-10">
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {idx + 1}
                    </div>
                    <item.icon size={32} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">
                    {item.step.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.step.desc}
                  </p>
                </motion.div>)}
            </div>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center border border-slate-100 shadow-sm max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-4 rtl:space-x-reverse">
                <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Student" />
                <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Student" />
                <img className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" alt="Student" />
                <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                  500+
                </div>
              </div>
            </div>
            <p className="text-xl font-medium text-slate-800 mb-8 max-w-2xl mx-auto">
              {t.process.statsText}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {t.process.benefits.map((benefit, i) => <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-600 rounded-lg text-sm font-medium border border-slate-200 shadow-sm">
                  <CheckCircle2 size={16} className="text-green-500" />
                  {benefit}
                </span>)}
            </div>
            <a href="https://wa.me/905431874532" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/25">
              <MessageCircle size={20} />
              {t.process.btn}
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      

      {/* SPECIALIZATIONS SECTION */}
      <section id="majors" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t.specializations.title}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{
            name: t.specializations.items[0],
            icon: Stethoscope
          }, {
            name: t.specializations.items[1],
            icon: Activity
          }, {
            name: t.specializations.items[2],
            icon: Pill
          }, {
            name: t.specializations.items[3],
            icon: Cpu
          }, {
            name: t.specializations.items[4],
            icon: Briefcase
          }, {
            name: t.specializations.items[5],
            icon: BrainCircuit
          }, {
            name: t.specializations.items[6],
            icon: HeartHandshake
          }, {
            name: t.specializations.items[7],
            icon: Users
          }].map((spec, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.05
          }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md hover:border-blue-100 transition-all group cursor-pointer">
                <div className="w-12 h-12 mx-auto rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors mb-4">
                  <spec.icon size={24} />
                </div>
                <h4 className="font-semibold text-slate-800">{spec.name}</h4>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* UNIVERSITIES SECTION */}
      <section id="universities" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t.universities.title}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {t.universities.items.map((uni, idx) => {
            const data = universityData[idx];
            return <div key={idx} className="flex flex-col items-center gap-3 group cursor-pointer" onClick={() => setSelectedUni(idx)}>
                  <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center p-3 grayscale group-hover:grayscale-0 transition-all shadow-sm group-hover:shadow-md border border-slate-100">
                    <img src={`https://www.google.com/s2/favicons?sz=256&domain=${data.domain}`} alt={`${uni} logo`} className="max-w-full max-h-full object-contain" onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = 'flex';
                }} />
                    <div className="hidden w-full h-full items-center justify-center text-slate-400" aria-hidden="true">
                      <GraduationCap size={32} />
                    </div>
                  </div>
                  <span className="text-xs font-medium text-center text-slate-500 group-hover:text-slate-900 transition-colors">
                    {uni}
                  </span>
                </div>;
          })}
          </div>

          {/* University Modal */}
          <AnimatePresence>
            {selectedUni !== null && <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedUni(null)} />
                <motion.div initial={{
              opacity: 0,
              scale: 0.95,
              y: 20
            }} animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }} exit={{
              opacity: 0,
              scale: 0.95,
              y: 20
            }} className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden">
                  <div className="p-8">
                    <button onClick={() => setSelectedUni(null)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors">
                      <X size={24} />
                    </button>

                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-2 shadow-sm border border-slate-100 shrink-0">
                        <img src={`https://www.google.com/s2/favicons?sz=256&domain=${universityData[selectedUni].domain}`} alt={t.universities.items[selectedUni]} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">
                          {t.universities.items[selectedUni]}
                        </h3>
                        <a href={`https://${universityData[selectedUni].domain}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          {universityData[selectedUni].domain}
                        </a>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                        Top Majors
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {universityData[selectedUni].majors.map((major, i) => <span key={i} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-xl text-sm font-medium border border-slate-100">
                            {major}
                          </span>)}
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-100">
                      <a href="https://wa.me/905431874532" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors">
                        {t.cta.btn}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>}
          </AnimatePresence>
        </div>
      </section>

      {/* SUCCESS STORIES SECTION */}
      <section id="success" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t.success.title}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
            name: 'عبدالرحمن حازم',
            major: 'الطب البشري • جامعة ميديبول الخاصة',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop&crop=faces',
            comment: 'الدكتور عمرو من أول رسالة حسّيت إني بتعامل مع حد فاهم وعايش التجربة فعلاً. ساعدني أختار الجامعة الخاصة والتخصص الصح ومشّى معايا كل خطوة في القبول لحد ما وصلت تركيا. شكراً يا دكتور من قلبي.'
          }, {
            name: 'مؤمن وائل',
            major: 'الصيدلة • جامعة إسطنبول أيدن الخاصة',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&crop=faces',
            comment: 'كنت تايه تماماً ومش عارف أبدأ منين، لكن دكتور عمرو نظّملي كل حاجة من معادلة الشهادة للتأشيرة والسكن في الجامعة الخاصة. أكتر حاجة عجبتني إنه فاضل معايا بعد الوصول وكان بيطمن عليّ.'
          }, {
            name: 'عمر احمد',
            major: 'هندسة الحاسوب • جامعة بهتشه شهير الخاصة',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop&crop=faces',
            comment: 'أنصح أي حد عايز يدرس في تركيا يتواصل مع دكتور عمرو. وفّرلي وقت ومجهود كبير وكل المعلومات عن الجامعات الخاصة كانت دقيقة وصادقة. دلوقتي أنا في الجامعة اللي حلمت بيها بفضل الله ثم الدكتور عمرو.'
          }].map((story, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: idx * 0.1
          }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
                <Quote className="absolute top-6 left-6 text-blue-100" size={48} />
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 leading-relaxed mb-8 relative z-10">
                  "{story.comment}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={story.avatar} alt={story.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900">{story.name}</h4>
                    <p className="text-sm text-blue-600 font-medium">
                      {story.major}
                    </p>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeInUp} className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {t.video.headline}
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t.video.description}
            </p>

            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer mt-12 max-w-4xl mx-auto">
              <img src="/3.jpg" alt="Amr Mohamed at the Achieve Study Abroad office" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center text-blue-600 shadow-xl group-hover:scale-110 transition-transform">
                  <Play size={32} className="ml-2" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-green-500 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {t.cta.headline}
          </h2>
          <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.cta.description}
          </p>
          <a href="https://wa.me/905431874532" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-green-600 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl">
            <MessageCircle size={28} />
            {t.cta.btn}
          </a>
        </div>
      </section>
    </div>;
}