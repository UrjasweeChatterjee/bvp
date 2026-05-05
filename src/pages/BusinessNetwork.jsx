import { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import BrandingHeader from "../components/BrandingHeader";
import TricolorStrip from "../components/TricolorStrip";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

/* ── tiny helpers ── */
const BtnSolid = ({ children, href = "#join", className = "" }) => (
  <a href={href} className={`inline-flex items-center justify-center rounded-lg bg-brand-500 px-6 py-3 text-sm font-bold text-ink-900 hover:bg-brand-400 transition-all shadow-md hover:shadow-lg ${className}`}>{children}</a>
);
const BtnOutline = ({ children, href = "#about", className = "" }) => (
  <a href={href} className={`inline-flex items-center justify-center rounded-lg ring-2 ring-white/60 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-all ${className}`}>{children}</a>
);


/* ── 2. HERO ── */
function Hero() {
  const stats = [
    { icon: "🏛️", label: "BVP Institutional Backing" },
    { icon: "💰", label: "₹5K Annual Membership" },
    { icon: "📅", label: "1× Monthly Meeting" },
    { icon: "👑", label: "Elite Member Community" },
  ];
  return (
    <section id="hero" className="relative bg-gradient-to-br from-ink-900 via-ink-800 to-ink-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage:"radial-gradient(circle at 20% 50%, #ff9933 0%, transparent 50%), radial-gradient(circle at 80% 20%, #138808 0%, transparent 50%)"}} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
        <span className="inline-block bg-brand-500/20 text-brand-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full ring-1 ring-brand-400/30 mb-6">
          Bharat Vikas Parishad — Business Wing
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
          Generating Opportunity<br className="hidden sm:block" />{" "}
          <span className="text-brand-400">for Every Business</span>
        </h1>
        <p className="max-w-2xl mx-auto text-white/70 text-base sm:text-lg leading-relaxed mb-10">
          An elite, purpose-driven networking ecosystem rooted in the values of Bharat Vikas Parishad — connecting serious business leaders to accelerate growth, forge alliances, and create lasting prosperity.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          <BtnSolid href="#join">🤝 Join the Network</BtnSolid>
          <BtnOutline href="#what-we-do">Learn More ↓</BtnOutline>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {stats.map(s => (
            <div key={s.label} className="bg-white/5 ring-1 ring-white/10 rounded-xl px-4 py-4 hover:bg-white/10 transition-colors">
              <p className="text-2xl mb-1">{s.icon}</p>
              <p className="text-xs font-semibold text-white/80 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 3. MARQUEE STRIP ── */
function MarqueeStrip() {
  const words = ["Elite Networking", "Business Referrals", "Community Growth", "Opportunity Creation", "BVP Backed", "Nation Building"];
  const items = [...words, ...words];
  return (
    <div className="bg-brand-500 py-3 overflow-hidden">
      <div className="marquee-track">
        {items.map((w, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-5 text-ink-900 text-sm font-bold whitespace-nowrap">
            {w} <span className="text-ink-700">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── 4. ABOUT ── */
function About() {
  const cards = [
    { icon: "🏛️", title: "National Credibility", desc: "Backed by Bharat Vikas Parishad's decades of institutional trust and national presence." },
    { icon: "👑", title: "Elite Membership", desc: "One business per category — exclusivity that protects your niche and amplifies your referrals." },
    { icon: "⚖️", title: "Structured Yet Flexible", desc: "Clear meeting cadence and referral systems, without the rigidity of global franchise models." },
    { icon: "💎", title: "Exceptional Value", desc: "₹5,000/year. Less than ₹420/month for a network that can transform your business." },
  ];
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">About the Network</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-ink-800">Where Business Meets Purpose</h2>
          <p className="mt-4 max-w-2xl mx-auto text-ink-500 leading-relaxed">
            Bharat Vikas Parishad has spent decades building communities rooted in national values. The BVP Business Network extends this legacy into the business world — giving entrepreneurs a credible, structured, and purpose-driven ecosystem to grow.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {cards.map(c => (
            <div key={c.title} className="group bg-ink-50 rounded-2xl p-6 ring-1 ring-ink-100 hover:ring-brand-300 hover:bg-brand-50 transition-all">
              <span className="text-3xl mb-3 block">{c.icon}</span>
              <h3 className="font-bold text-ink-800 mb-2 text-sm">{c.title}</h3>
              <p className="text-xs text-ink-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <BtnSolid href="#join">Start Your Journey →</BtnSolid>
        </div>
      </div>
    </section>
  );
}

/* ── 5. WHAT WE DO ── */
function WhatWeDo() {
  const items = [
    { n: "01", title: "Structured Referral Exchange", desc: "A formal, accountable system for giving and tracking business referrals within the chapter — driving real revenue, not just conversations." },
    { n: "02", title: "Monthly Power Meetings", desc: "One monthly meeting, mandatory and meaningful. Members present, connect, refer — maximising ROI on every hour invested." },
    { n: "03", title: "Category Exclusivity", desc: "Only one member per business category per chapter — ensuring your referrals come to you, and you alone." },
    { n: "04", title: "BVP Network Access", desc: "As a BVP Business Network member, you receive complimentary BVP branch membership — gaining access to the broader national community." },
  ];
  return (
    <section id="what-we-do" className="py-16 sm:py-24 bg-ink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">Our Offering</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black">A Complete Business Growth Ecosystem</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {items.map(it => (
            <div key={it.n} className="flex gap-5 bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
              <span className="text-3xl font-black text-brand-500 shrink-0 leading-none">{it.n}</span>
              <div>
                <h3 className="font-bold text-white mb-2">{it.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 6. PLATFORM OVERVIEW ── */
function PlatformOverview() {
  const rows = [
    ["Platform Type", "BVP Business Network"],
    ["Meeting Frequency", "Monthly (1× Mandatory)"],
    ["Annual Investment", "₹5,000 Only"],
    ["Category System", "One Per Category"],
    ["ROI Focus", "High & Measurable"],
    ["BVP Branch Membership", "Complimentary"],
    ["Community Reach", "Local + National"],
    ["Structure", "Disciplined & Purposeful"],
  ];
  return (
    <section className="py-16 sm:py-24 bg-ink-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">At a Glance</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-ink-800">Platform Overview</h2>
        </div>
        <div className="bg-white rounded-2xl ring-1 ring-ink-100 shadow-sm overflow-hidden mb-8">
          {rows.map(([k, v], i) => (
            <div key={k} className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-ink-50/50" : "bg-white"} border-b border-ink-100 last:border-0`}>
              <span className="text-sm font-semibold text-ink-600">{k}</span>
              <span className="text-sm font-bold text-ink-900">{v}</span>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-brand-500 to-brand-400 rounded-2xl p-8 text-center">
          <p className="text-2xl font-black text-ink-900 italic">"Generate opportunity for all, grow together with integrity."</p>
          <p className="mt-2 text-ink-700 font-medium text-sm">— BVP Business Network Mission</p>
        </div>
      </div>
    </section>
  );
}

/* ── 7. BENEFITS ── */
function Benefits() {
  const benefits = [
    { icon: "🤝", title: "Trusted Referrals", desc: "Verified business referrals from fellow members who know your work." },
    { icon: "🛡️", title: "Category Protection", desc: "No competitor in your category — your niche is protected." },
    { icon: "🏛️", title: "BVP Branch Membership", desc: "Complimentary access to the national BVP community." },
    { icon: "⚡", title: "High-Impact Meetings", desc: "Monthly sessions designed for action, not just attendance." },
    { icon: "📈", title: "Measurable Growth", desc: "Track referrals, conversions and closed business value." },
    { icon: "🎓", title: "Skill Development", desc: "Workshops, masterclasses and peer learning built in." },
  ];
  const includes = ["Monthly chapter meeting seat", "BVP Branch membership", "Referral tracking access", "Category exclusivity", "National BVP directory listing", "Business growth workshops"];
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">Why Join</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-ink-800">Why Elite Members Choose Us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {benefits.map(b => (
            <div key={b.title} className="rounded-2xl p-6 ring-1 ring-ink-100 bg-ink-50 hover:ring-brand-300 hover:shadow-md transition-all">
              <span className="text-3xl mb-3 block">{b.icon}</span>
              <h3 className="font-bold text-ink-800 mb-1.5 text-sm">{b.title}</h3>
              <p className="text-xs text-ink-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
        {/* Pricing highlight */}
        <div className="max-w-3xl mx-auto bg-ink-900 rounded-2xl p-8 text-white text-center">
          <p className="text-xs uppercase tracking-widest text-brand-400 font-semibold mb-2">Annual Investment</p>
          <p className="text-5xl font-black text-brand-400 mb-1">₹5,000</p>
          <p className="text-white/60 text-sm mb-6">Less than ₹420/month for a network that pays for itself.</p>
          <div className="grid sm:grid-cols-2 gap-2 text-left max-w-md mx-auto mb-6">
            {includes.map(it => (
              <p key={it} className="flex items-center gap-2 text-xs text-white/80">
                <span className="text-india-green-500 font-bold">✓</span> {it}
              </p>
            ))}
          </div>
          <BtnSolid href="#join">Get Started — ₹5,000/year</BtnSolid>
        </div>
      </div>
    </section>
  );
}

/* ── 8. HOW TO JOIN ── */
function HowToJoin() {
  const steps = [
    { n: "01", title: "Express Interest", desc: "Fill the membership inquiry form or contact your local chapter coordinator." },
    { n: "02", title: "Attend as Guest", desc: "Visit a monthly meeting as a guest — no commitment, no pressure." },
    { n: "03", title: "Category Verification", desc: "Your business category is checked for availability in your chosen chapter." },
    { n: "04", title: "Complete Membership", desc: "Pay ₹5,000 annual fee and complete the onboarding formalities." },
    { n: "05", title: "Welcome to Network", desc: "You're in! Start giving and receiving referrals from Day 1." },
  ];
  return (
    <section id="join" className="py-16 sm:py-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">Membership</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-ink-800">Your Path to Elite Membership</h2>
        </div>
        <div className="relative max-w-3xl mx-auto mb-14">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-ink-200 hidden sm:block" />
          <div className="space-y-6">
            {steps.map(s => (
              <div key={s.n} className="flex gap-5 items-start">
                <span className="shrink-0 w-12 h-12 rounded-full bg-brand-500 text-ink-900 font-black text-sm flex items-center justify-center shadow-md z-10">
                  {s.n}
                </span>
                <div className="flex-1 bg-white rounded-xl p-5 ring-1 ring-ink-100 shadow-sm">
                  <h3 className="font-bold text-ink-800 mb-1">{s.title}</h3>
                  <p className="text-xs text-ink-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <BtnSolid href="#contact">📋 Apply for Membership</BtnSolid>
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-lg ring-2 ring-ink-300 px-6 py-3 text-sm font-bold text-ink-700 hover:bg-ink-100 transition-all">
            👀 Visit as Guest First
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── 9. CONTACT ── */
function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", business: "", city: "", message: "" });
  const [sent, setSent] = useState(false);
  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const submit = e => { e.preventDefault(); setSent(true); };
  const details = [
    { icon: "📍", label: "Location", val: "Your Local BVP Chapter" },
    { icon: "📞", label: "Phone", val: "+91 98765 00000" },
    { icon: "✉️", label: "Email", val: "business@bvp.org.in" },
    { icon: "📅", label: "Meetings", val: "Monthly — 1st Sunday, 10 AM" },
  ];
  return (
    <section id="contact" className="py-16 sm:py-24 bg-ink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-400">Get in Touch</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black">Ready to Grow Together?</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <p className="text-white/60 text-sm leading-relaxed mb-8">Whether you're ready to join or just curious — reach out. Our chapter coordinators will get back to you within 24 hours.</p>
            <div className="space-y-5">
              {details.map(d => (
                <div key={d.label} className="flex items-start gap-4">
                  <span className="text-xl shrink-0">{d.icon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/40 font-semibold">{d.label}</p>
                    <p className="text-white font-semibold mt-0.5">{d.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {sent ? (
              <div className="bg-white/5 rounded-2xl p-10 text-center ring-1 ring-white/10">
                <p className="text-4xl mb-3">✅</p>
                <p className="text-lg font-bold">Thank you!</p>
                <p className="text-white/60 text-sm mt-2">We'll reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                {[["name","Full Name","text"],["phone","Phone Number","tel"],["email","Email Address","email"],["business","Business Name","text"],["city","City","text"]].map(([n,p,t]) => (
                  <input key={n} name={n} type={t} placeholder={p} value={form[n]} onChange={handle} required
                    className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-400" />
                ))}
                <textarea name="message" rows={3} placeholder="Your message or query" value={form.message} onChange={handle}
                  className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none" />
                <button type="submit" className="w-full rounded-lg bg-brand-500 py-3 text-sm font-bold text-ink-900 hover:bg-brand-400 transition-colors">
                  🚀 Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ── PAGE ASSEMBLY ── */
export default function BusinessNetwork() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Same header as main BVP site */}
      <header className="sticky top-0 z-40 shadow-sm">
        <TopBar />
        <BrandingHeader />
        <TricolorStrip />
        <Navbar />
      </header>

      <main className="flex-1">
        <Hero />
        <MarqueeStrip />
        <About />
        <WhatWeDo />
        <PlatformOverview />
        <Benefits />
        <HowToJoin />
        <Contact />
      </main>

      {/* Same footer as main BVP site */}
      <Footer />
      <BackToTop />
    </div>
  );
}
