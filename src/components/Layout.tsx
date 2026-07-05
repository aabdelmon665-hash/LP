import React, { useEffect, useState, Component } from 'react';
import { Outlet, useParams, useNavigate, Link } from 'react-router-dom';
import { translations, Language } from '../i18n/translations';
import { Globe, Menu, X, Instagram, Youtube, Phone, MessageCircle, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Layout() {
  const {
    lang
  } = useParams<{
    lang: string;
  }>();
  const navigate = useNavigate();
  const currentLang = lang as Language || 'ar';
  const t = translations[currentLang];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = currentLang;
  }, [currentLang, t.dir]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleLanguageChange = (newLang: Language) => {
    navigate(`/${newLang}`);
    setIsMobileMenuOpen(false);
  };
  const navLinks = [{
    name: t.nav.home,
    href: '#home'
  }, {
    name: t.nav.about,
    href: '#about'
  }, {
    name: t.nav.universities,
    href: '#universities'
  }, {
    name: t.nav.majors,
    href: '#majors'
  }, {
    name: t.nav.services,
    href: '#services'
  }, {
    name: t.nav.successStories,
    href: '#success'
  }];
  return <div className={`min-h-screen bg-slate-50 font-sans ${t.dir === 'rtl' ? 'text-right' : 'text-left'}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={`/${currentLang}`} className="flex items-center gap-2.5 z-50">
              <img src="/ChatGPT_Image_8_Haz_2026_23_45_08.png" alt="Achieve Study Abroad" className="w-11 h-11 rounded-full object-cover" />
              <span className={`font-bold text-xl ${isScrolled ? 'text-slate-900' : 'text-white'} transition-colors`}>
                Achieve Study
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-blue-500 ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}>
                  {link.name}
                </a>)}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Agent Button */}
              <a href={`https://wa.me/905431874532?text=${encodeURIComponent('I would like to become an agent for Achieve Study Abroad')}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold rounded-xl transition-colors shadow-sm">
                {t.agent.title}
              </a>

              {/* Socials */}
              <div className="flex items-center gap-3 mr-4">
                <a href="https://instagram.com/amrmahamad1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'} transition-colors`}>
                  <Instagram size={18} />
                </a>
                <a href="https://www.youtube.com/@AmrMohamedPh" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={`${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'} transition-colors`}>
                  <Youtube size={18} />
                </a>
                <a href="https://wa.me/905431874532" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={`${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'} transition-colors`}>
                  <MessageCircle size={18} />
                </a>
              </div>

              {/* Language Switcher */}
              <div className="relative group">
                <button className={`flex items-center gap-2 text-sm font-medium ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
                  <Globe size={16} />
                  {currentLang.toUpperCase()}
                </button>
                <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden border border-slate-100">
                  {(['ar', 'en', 'tr', 'fr', 'tk', 'az'] as Language[]).map((l) => <button key={l} onClick={() => handleLanguageChange(l)} className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${currentLang === l ? 'text-blue-600 font-semibold bg-blue-50/50' : 'text-slate-700'}`}>
                        {l === 'ar' ? 'العربية' : l === 'en' ? 'English' : l === 'tr' ? 'Türkçe' : l === 'fr' ? 'Français' : l === 'tk' ? 'Türkmençe' : 'Azərbaycan'}
                      </button>)}
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden z-50 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-4 lg:hidden">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 font-medium py-2 border-b border-slate-50">
                    {link.name}
                  </a>)}
                <a href={`https://wa.me/905431874532?text=${encodeURIComponent('I would like to become an agent for Achieve Study Abroad')}`} target="_blank" rel="noopener noreferrer" className="text-amber-600 font-bold py-2 border-b border-slate-50 flex items-center gap-2">
                  <Briefcase size={18} />
                  {t.agent.title}
                </a>
                <div className="flex items-center gap-4 py-2 border-b border-slate-50 flex-wrap">
                  <span className="text-slate-500 text-sm">Language:</span>
                  <div className="flex gap-2 flex-wrap">
                    {(['ar', 'en', 'tr', 'fr', 'tk', 'az'] as Language[]).map((l) => <button key={l} onClick={() => handleLanguageChange(l)} className={`text-sm px-2 py-1 rounded ${currentLang === l ? 'bg-blue-100 text-blue-700' : 'text-slate-600'}`}>
                          {l.toUpperCase()}
                        </button>)}
                  </div>
                </div>
                <div className="flex items-center gap-4 py-2">
                  <a href="https://instagram.com/amrmahamad1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-blue-600">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.youtube.com/@AmrMohamedPh" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-slate-400 hover:text-blue-600">
                    <Youtube size={20} />
                  </a>
                  <a href="https://wa.me/905431874532" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-slate-400 hover:text-blue-600">
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-slate-300 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img src="/ChatGPT_Image_8_Haz_2026_23_45_08.png" alt="Achieve Study Abroad" className="w-11 h-11 rounded-full object-cover bg-white" />
                <span className="font-bold text-xl text-white">
                  Achieve Study
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {'\u062E\u0631\u064A\u062C \u062C\u0627\u0645\u0639\u0629 \u0627\u0644\u0639\u0644\u0648\u0645 \u0627\u0644\u0635\u062D\u064A\u0629 \u0641\u064A \u062A\u0631\u0643\u064A\u0627. \u0623\u0633\u0627\u0639\u062F \u0627\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u062F\u0648\u0644\u064A\u064A\u0646 \u0639\u0644\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062C\u0627\u0645\u0639\u0629 \u0648\u0627\u0644\u062A\u062E\u0635\u0635 \u0627\u0644\u0645\u0646\u0627\u0633\u0628 \u0648\u0627\u0644\u0642\u0628\u0648\u0644 \u0627\u0644\u062C\u0627\u0645\u0639\u064A \u062E\u0637\u0648\u0629 \u0628\u062E\u0637\u0648\u0629.'}
              </p>
              <div className="flex items-center gap-4">
                <a href="https://instagram.com/amrmahamad1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="https://www.youtube.com/@AmrMohamedPh" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <Youtube size={18} />
                </a>
                <a href="https://wa.me/905431874532" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-3">
                {navLinks.slice(0, 5).map((link) => <li key={link.name}>
                    <a href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                      {link.name}
                    </a>
                  </li>)}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-6">{t.nav.contact}</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-blue-500 mt-0.5" />
                  <span className="text-sm" dir="ltr">
                    +90 543 187 45 32
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle size={18} className="text-blue-500 mt-0.5" />
                  <span className="text-sm">info@achievestudy.net</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe size={18} className="text-blue-500 mt-0.5" />
                  <span className="text-sm">Istanbul, Turkey</span>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-6">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                    {t.footer.privacy}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                    {t.footer.terms}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Achieve Study Abroad.{' '}
              {t.footer.rights}.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <a href="https://wa.me/905431874532" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300">
        <MessageCircle size={28} />
      </a>
    </div>;
}