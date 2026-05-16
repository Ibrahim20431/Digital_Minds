/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Code2, 
  Layers, 
  Users, 
  Rocket, 
  TrendingUp, 
  Terminal, 
  CheckCircle2, 
  ChevronRight,
  MessageSquare,
  Award,
  BookOpen,
  Monitor,
  Cpu
} from 'lucide-react';
import { translations, type Language } from './lib/translations';
import { cn } from './lib/utils';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const t = translations[lang];
  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');

  return (
    <div className={cn("min-h-screen selection:bg-accent-purple/30", isRtl ? "font-arabic" : "font-sans")}>
      {/* Navbar */}
      <Navbar lang={lang} toggleLang={toggleLang} t={t} />

      <main>
        {/* Hero Section */}
        <Hero t={t} isRtl={isRtl} />

        {/* Value Proposition */}
        <ValueProp t={t} isRtl={isRtl} />

        {/* Courses Section */}
        <Courses t={t} isRtl={isRtl} />

        {/* Pricing Plans */}
        <Pricing t={t} isRtl={isRtl} />

        {/* Why Choose Us */}
        <WhyUs t={t} isRtl={isRtl} />

        {/* Testimonials */}
        <Testimonials t={t} isRtl={isRtl} />

        {/* Final CTA */}
        <FinalCTA t={t} isRtl={isRtl} />

        {/* Contact Form */}
        <ContactForm t={t} isRtl={isRtl} />
      </main>

      {/* Footer */}
      <Footer t={t} isRtl={isRtl} />
    </div>
  );
}

function Navbar({ lang, toggleLang, t }: { lang: Language, toggleLang: () => void, t: any }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-deep to-accent-purple rounded-xl flex items-center justify-center shadow-lg shadow-accent-purple/20">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
            {t.nav.brand}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">{t.nav.home}</a>
          <a href="#courses" className="hover:text-white transition-colors">{t.nav.courses}</a>
          <a href="#pricing" className="hover:text-white transition-colors">{t.nav.pricing}</a>
          <a href="#why-us" className="hover:text-white transition-colors">{t.nav.whyUs}</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLang} 
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/5 transition-all text-sm"
          >
            <Globe className="w-4 h-4" />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>
          <a 
            href="#contact"
            className="bg-accent-purple hover:bg-accent-purple/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-accent-purple/20 active:scale-95"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero({ t, isRtl }: { t: any, isRtl: boolean }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-purple/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-deep/30 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent-light-purple text-xs font-semibold uppercase tracking-wider mb-6">
            <Rocket className="w-3.5 h-3.5" />
            {isRtl ? "أكاديمية عقول رقمية - تعليم البرمجة في عمان" : "Digital Minds Academy - Coding in Oman"}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 bg-gradient-to-r from-white via-white to-accent-light-purple bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
            {t.hero.subtext}
          </p>
          <div className="flex flex-wrap gap-4">
           <button
              onClick={() => {
                document.getElementById("pricing")?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
              className="bg-accent-purple hover:bg-accent-purple/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-accent-purple/20 hover:-translate-y-1"
            >
              {t.hero.cta}
            </button>

            <button
              onClick={() => {
                document.getElementById("pricing")?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm"
            >
              {isRtl ? "تعرف على المزيد" : "Learn More"}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 glass-card rounded-3xl p-4 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
              alt="Programming UI" 
              className="rounded-2xl w-full h-auto object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            {/* Overlay UI Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
              <div className="bg-accent-purple/80 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-white/20 animate-bounce">
                <Code2 className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
          {/* Decorative Rings */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/10 rounded-full animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 border border-accent-purple/20 rounded-full animate-ping" />
        </motion.div>
      </div>
    </section>
  );
}

function ValueProp({ t, isRtl }: { t: any, isRtl: boolean }) {
  const icons = [BookOpen, TrendingUp, Layers, Award, Users];

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.valueProp.title}</h2>
          <div className="w-24 h-1.5 bg-accent-purple mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.valueProp.items.map((item: any, idx: number) => {
            const Icon = icons[idx] || Rocket;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-3xl group border-white/5 hover:border-accent-purple/30 transition-all hover:bg-white/[0.07]"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-deep/50 to-accent-purple/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Courses({ t, isRtl }: { t: any, isRtl: boolean }) {
  const icons = [Terminal, Monitor, Code2, Users, Rocket];
  
  return (
    <section id="courses" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.tracks.title}</h2>
          <p className="text-slate-400">{isRtl ? "مسارات متخصصة لكل مستوى" : "Specialized tracks for every level"}</p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {t.tracks.items.map((item: any, idx: number) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} className="group relative overflow-hidden rounded-2xl glass-card p-6 flex flex-col items-center text-center hover:bg-accent-purple/10 transition-all">
                <div className="mb-4 p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-accent-light-purple" />
                </div>
                <h3 className="font-bold mb-2 group-hover:text-accent-light-purple transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Pricing({ t, isRtl }: { t: any, isRtl: boolean }) {
  const plans = [
    { key: 'bronze', trans: t.pricing.bronze },
    { key: 'silver', trans: t.pricing.silver },
    { key: 'gold', trans: t.pricing.gold },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.pricing.title}</h2>
          <p className="text-slate-400">{isRtl ? "خطط مرنة تناسب الجميع" : "Flexible plans for everyone"}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={plan.key}
              className={cn(
                "relative rounded-3xl p-8 transition-all duration-300",
                plan.trans.recommended 
                  ? "bg-gradient-to-b from-primary-deep to-accent-purple scale-105 z-10 shadow-2xl shadow-accent-purple/20" 
                  : "glass-card hover:bg-white/[0.07]"
              )}
            >
              {plan.trans.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-light-purple text-primary-deep text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
                  {isRtl ? "موصى به" : "Recommended"}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.trans.name}</h3>
                <div className="text-3xl font-bold bg-white/10 inline-block px-4 py-1 rounded-lg">
                  {plan.trans.price}
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.trans.features.map((feature: string, fIdx: number) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className={cn("w-5 h-5", plan.trans.recommended ? "text-white" : "text-accent-light-purple")} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth"
                    });
                  }}
                className={cn(
                "w-full py-4 rounded-xl font-bold transition-all",
                plan.trans.recommended 
                  ? "bg-white text-primary-deep hover:bg-slate-100" 
                  : "bg-accent-purple text-white hover:bg-accent-purple/90"
              )}>
                {isRtl ? "اشترك الآن" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs({ t, isRtl }: { t: any, isRtl: boolean }) {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
            {t.whyChooseUs.title}
          </h2>
          
          <div className="grid gap-6">
            {t.whyChooseUs.items.map((item: any, idx: number) => (
              <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 flex-shrink-0 bg-accent-purple/10 rounded-xl flex items-center justify-center text-accent-light-purple font-bold">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <div className="aspect-square rounded-3xl overflow-hidden glass-card">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="bg-primary-deep aspect-video rounded-3xl flex items-center justify-center p-6 text-center">
              <p className="text-2xl font-bold">98% <br /> <span className="text-xs font-normal opacity-70">Satisfied Parents</span></p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-accent-purple aspect-video rounded-3xl flex items-center justify-center p-6 text-center">
              <p className="text-2xl font-bold">500+ <br /> <span className="text-xs font-normal opacity-70">Enrolled Students</span></p>
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden glass-card">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials({ t, isRtl }: { t: any, isRtl: boolean }) {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">{t.testimonials.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item: any, idx: number) => (
            <div key={idx} className="glass-card p-8 rounded-3xl relative">
              <MessageSquare className="absolute top-6 right-6 w-8 h-8 text-white/5" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10" />
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
              <p className="text-slate-300 italic">"{item.text}"</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => <CheckCircle2 key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ t, isRtl }: { t: any, isRtl: boolean }) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-accent-purple to-primary-deep opacity-90" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
          {t.cta.title}
        </h2>
        <p className="text-xl text-white/80 mb-10">
          {t.cta.text}
        </p>
        <button className="bg-white text-primary-deep hover:bg-slate-100 px-10 py-5 rounded-full font-bold text-xl transition-all shadow-2xl hover:-translate-y-1">
          {t.hero.cta}
        </button>
      </div>

      {/* Decorative floating elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 text-white/10"
      >
        <Code2 className="w-32 h-32" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-10 text-white/10"
      >
        <Monitor className="w-40 h-40" />
      </motion.div>
    </section>
  );
}

function ContactForm({ t, isRtl }: { t: any, isRtl: boolean }) {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass-card rounded-[2rem] p-8 md:p-12 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/20 blur-3xl rounded-full" />
          
          <h2 className="text-3xl font-bold mb-8">{t.contact.title}</h2>
          
          <form className="space-y-6" action="https://formspree.io/f/mlgzqkov" method="POST">

          <div className="grid md:grid-cols-2 gap-6">
        
            {/* اسم الطالب */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">
                {isRtl ? "اسم الطالب" : "Student Name"}
              </label>
        
              <input
                type="text"
                name="student_name"
                placeholder={isRtl ? "اكتب اسم الطالب" : "Enter student name"}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-purple transition-colors"
              />
            </div>
        
            {/* رقم تليفون الوالد */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">
                {isRtl ? "رقم تليفون الوالد" : "Parent Phone Number"}
              </label>
        
              <input
                type="tel"
                name="parent_phone"
                placeholder={isRtl ? "أدخل رقم الهاتف" : "Enter phone number"}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-purple transition-colors"
              />
            </div>
        
          </div>
        
          <div className="grid md:grid-cols-2 gap-6">
        
            {/* سن الطالب */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">
                {isRtl ? "سن الطالب" : "Student Age"}
              </label>
        
              <input
                type="number"
                name="student_age"
                placeholder={isRtl ? "مثال: 14" : "Example: 14"}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-purple transition-colors"
              />
            </div>
        
            {/* نوع الباقة */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400">
                {isRtl ? "نوع الباقة" : "Package Type"}
              </label>
        
              <select name="package_type" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-purple transition-colors appearance-none">
        
                {isRtl ? (
                  <>
                    <option>🔥 باقة مستكشف التقنية</option>
                    <option>🔥🔥 باقة صانع المستقبل</option>
                    <option>🔥🔥🔥 باقة النخبة الرقمية</option>
                  </>
                ) : (
                  <>
                    <option>Tech Explorer Package</option>
                    <option>Future Maker Package</option>
                    <option>Digital Elite Package</option>
                  </>
                )}
        
              </select>
            </div>
        
          </div>
        
          {/* ملاحظات إضافية */}
          <div className="space-y-2">
        
            <label className="text-sm font-medium text-slate-400">
              {isRtl ? "ملاحظات إضافية" : "Additional Notes"}
            </label>
        
            <textarea
              name="notes"
              rows={4}
              placeholder={isRtl ? "اكتب أي تفاصيل إضافية..." : "Write any additional notes..."}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-purple transition-colors resize-none"
            ></textarea>
        
          </div>
        
          {/* زر الإرسال */}
          <button
            type="submit"
            className="w-full bg-accent-purple hover:bg-accent-purple/90 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-accent-purple/20 flex items-center justify-center gap-2"
          >
            {isRtl ? "سجل الآن" : "Apply Now"}
        
            <ChevronRight
              className={cn("w-5 h-5", isRtl && "rotate-180")}
            />
          </button>
        
        </form>
        </div>
      </div>
    </section>
  );
}

function Footer({ t, isRtl }: { t: any, isRtl: boolean }) {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Cpu className="text-accent-light-purple w-6 h-6" />
          <span className="text-xl font-bold">
            {t.nav.brand}
          </span>
        </div>
        
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-white transition-colors">{t.nav.home}</a>
          <a href="#courses" className="hover:text-white transition-colors">{t.nav.courses}</a>
          <a href="#pricing" className="hover:text-white transition-colors">{t.nav.pricing}</a>
          <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
        </div>
        
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} {isRtl ? "جميع الحقوق محفوظة. أكاديمية عقول رقمية." : "All rights reserved. Digital Minds Academy."}
        </div>
      </div>
    </footer>
  );
}
