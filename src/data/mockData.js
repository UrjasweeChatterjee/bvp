// All content for the Indian Govt / NGO style site lives here.

import vivekAdukia from "../assets/images/vivek_adukia.jpeg";
import sureshChandBansal from "../assets/images/suresh_chand_bansal.jpeg";
import vidhyaSagarAgarwal from "../assets/images/vidhya_sagar_agarwal.jpeg";
import murariLal from "../assets/images/murari_lal.jpeg";
import rakeshKumarIps from "../assets/images/rakesh_kumar_ips.jpeg";
import prafulTayal from "../assets/images/praful_tayal.jpg";
import drRbLhila from "../assets/images/dr_rb_lhila.jpeg";
import jaswantSinghSaini from "../assets/images/jaswant_singh_saini.jpeg";
import gpAgarwala from "../assets/images/gp_agarwala.jpg";
import sumermalSurana from "../assets/images/sumermal_surana.jpeg";
import sitaramAgarwal from "../assets/images/sitaram_agarwal.jpeg";

export const org = {
  shortName: "BVP",
  nameEn: "BVP Vyapar Manch",
  nameHi: "भारत विकास परिषद",
  taglineEn: "Bharat Vikas Parishad — Business Wing",
  taglineHi: "जन सेवा • जन कल्याण • जन जागरण",
  motto: "Generate Opportunity for Every Business",
  affiliationEn: "Ministry of Social Justice & Empowerment",
  affiliationHi: "सामाजिक न्याय एवं अधिकारिता मंत्रालय",
  estYear: 2005,
  lastUpdated: "04 May, 2026",
};

export const navLinks = [
  { label: "Home", labelHi: "मुख्य पृष्ठ", href: "#home" },
  { label: "About Us", labelHi: "हमारे बारे में", href: "#about" },
  { label: "Schemes & Services", labelHi: "योजनाएं", href: "#services" },
  { label: "Notices & Tenders", labelHi: "सूचना", href: "#notices" },
  { label: "Events", labelHi: "कार्यक्रम", href: "#events" },
  { label: "Gallery", labelHi: "गैलरी", href: "#gallery" },
  { label: "Contact", labelHi: "संपर्क", href: "#contact" },
];

export const heroSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=70",
    title: "Generating Opportunity for Every Business",
    caption: "An elite, purpose-driven networking ecosystem rooted in the values of Bharat Vikas Parishad — connecting serious business leaders to accelerate growth.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=70",
    title: "Forge Alliances. Create Prosperity.",
    caption: "When value-driven individuals collaborate, they don't just grow their businesses — they strengthen the community and the nation.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=70",
    title: "Networking with a Higher Calling",
    caption: "Backed by BVP's decades-long legacy of integrity and national presence across thousands of branches in India.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=70",
    title: "₹5K Annual Investment. Limitless Returns.",
    caption: "Less than ₹420 per month for a network that can generate lakhs in new business — backed by BVP's trusted national presence.",
  },
];

// Marquee items for the "What's New" ticker
export const announcements = [
  { tag: "New", text: "BVP Vyapar Manch is now accepting new member applications — limited category seats available.", href: "#join" },
  { tag: "Notice", text: "Next monthly chapter meeting: 1st Sunday of June 2026 — time confirmed on joining.", href: "#contact" },
  { tag: "Update", text: "Annual membership at just ₹5,000 — includes complimentary BVP Branch membership.", href: "#membership" },
  { tag: "Invite", text: "Attend as a guest at no cost — experience the network firsthand before committing.", href: "#join" },
  { tag: "Info", text: "Category exclusivity guaranteed — only one business per category per chapter.", href: "#about" },
];

export const quickLinks = [
  {
    id: "schemes",
    title: "Welfare Schemes",
    description: "Browse central and state schemes with eligibility and online application.",
    icon: "scheme",
  },
  {
    id: "services",
    title: "Citizen Services",
    description: "Aadhaar-linked services available online and at our regional centres.",
    icon: "service",
  },
  {
    id: "apply",
    title: "Apply Online",
    description: "Submit applications, upload documents and track status securely.",
    icon: "apply",
  },
  {
    id: "rti",
    title: "RTI / Grievance",
    description: "File requests under the Right to Information Act and lodge grievances.",
    icon: "rti",
  },
  {
    id: "tenders",
    title: "Tenders & EOIs",
    description: "Active tenders, expressions of interest and procurement notices.",
    icon: "tender",
  },
  {
    id: "downloads",
    title: "Downloads",
    description: "Forms, guidelines, circulars and the citizen charter.",
    icon: "download",
  },
  {
    id: "announcements",
    title: "Announcements",
    description: "Public notices, results and the latest organisational updates.",
    icon: "announce",
  },
  {
    id: "directory",
    title: "Officer Directory",
    description: "Search the directory of officials, departments and helplines.",
    icon: "directory",
  },
];

export const videos = [
  { id: "v1", title: "Impact Story 1", youtubeId: "EaO31cEmPSc" },
  { id: "v2", title: "Impact Story 2", youtubeId: "97SJDaxO_NE" },
  { id: "v3", title: "Impact Story 3", youtubeId: "uVyJrZ9YK_c" },
];

export const events = [
  {
    id: "e1",
    title: "Community Health Camp",
    date: "May 18, 2026",
    description: "Free check-ups, screenings and consultations for residents of Sector 12.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=70",
  },
  {
    id: "e2",
    title: "Youth Skill Workshop",
    date: "May 25, 2026",
    description: "Hands-on training in digital literacy, communication and entrepreneurship.",
    image: "https://img.freepik.com/free-photo/group-four-south-asian-men-s-posed-business-meeting-cafe-indians-together-sign-important-documents-contract-study-work_627829-5252.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: "e3",
    title: "Tree Plantation Drive",
    date: "June 05, 2026",
    description: "Join us as we plant 5,000 saplings across three city districts.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=70",
  },
  {
    id: "e4",
    title: "Women Empowerment Summit",
    date: "June 21, 2026",
    description: "Panels, mentorship and networking for women entrepreneurs and leaders.",
    image: "https://hdrc-sxnfes.org/wp-content/uploads/2020/03/women-empowerment.jpg",
  },
  {
    id: "e5",
    title: "Annual Donor Meet",
    date: "July 09, 2026",
    description: "A transparent review of our impact, finances and the year ahead.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=70",
  },
];

// News / Notices / Tenders / Circulars for the tabbed dashboard
export const newsBoard = {
  news: [
    { id: "n1", date: "02 May 2026", text: "BVP signs MoU with state skill mission to train 10,000 youth in 2026-27.", isNew: true },
    { id: "n2", date: "28 Apr 2026", text: "Phase II of Anganwadi nutrition pilot reaches 240 villages across 6 districts.", isNew: true },
    { id: "n3", date: "20 Apr 2026", text: "Hon’ble Chairperson addresses inter-state council on rural sanitation outcomes." },
    { id: "n4", date: "12 Apr 2026", text: "BVP wins SKOCH Gold for ‘Outstanding NGO — Public Health 2026’." },
    { id: "n5", date: "05 Apr 2026", text: "Annual Report 2025-26 released; financials and impact disclosed in full." },
  ],
  notices: [
    { id: "no1", date: "03 May 2026", text: "Public notice: Empanelment of vendors for IT support FY 2026-27.", isNew: true },
    { id: "no2", date: "30 Apr 2026", text: "Recruitment notice — Programme Officer (Health), 04 vacancies.", isNew: true },
    { id: "no3", date: "22 Apr 2026", text: "Beneficiary list for educational stipend (Tranche 14) published." },
    { id: "no4", date: "15 Apr 2026", text: "Holiday list for FY 2026-27 issued under Office Memorandum 11/2026." },
  ],
  tenders: [
    { id: "t1", date: "01 May 2026", text: "Tender BVP/2026/PRN/04: Printing & supply of annual reports. Bids close 22 May.", isNew: true },
    { id: "t2", date: "26 Apr 2026", text: "Tender BVP/2026/IT/02: AMC for desktops, printers and networking equipment." },
    { id: "t3", date: "18 Apr 2026", text: "EOI BVP/2026/EVAL/01: Third-party impact evaluation of skilling programmes." },
    { id: "t4", date: "08 Apr 2026", text: "Tender BVP/2026/HSP/03: Supply of medical consumables to mobile health units." },
  ],
  circulars: [
    { id: "c1", date: "29 Apr 2026", text: "Circular 14/2026: Revised guidelines for NGO empanelment under flagship schemes.", isNew: true },
    { id: "c2", date: "21 Apr 2026", text: "Circular 13/2026: Standard operating procedure for grievance redressal." },
    { id: "c3", date: "10 Apr 2026", text: "Circular 12/2026: Compliance reporting format for partner organisations." },
    { id: "c4", date: "02 Apr 2026", text: "Circular 11/2026: Travel and reimbursement norms FY 2026-27." },
  ],
};

export const leadership = [
  {
    id: "l1",
    name: "Dr. Ramesh Kumar Sharma",
    nameHi: "डॉ. रमेश कुमार शर्मा",
    role: "President",
    image: "https://thumbs.dreamstime.com/b/smart-smiling-middle-aged-indian-business-man-26978835.jpg",
    quote: "Empowerment begins where exclusion ends.",
  },
  {
    id: "l2",
    name: "Smt. Anjali Verma, IAS (Retd.)",
    nameHi: "श्रीमती अंजली वर्मा",
    role: "Secretary General",
    image: "https://i.pinimg.com/736x/5b/db/f7/5bdbf78537b82b899c2ab63d0b25ff10.jpg",
    quote: "Service, transparency and accountability are non-negotiable.",
  },
  {
    id: "l3",
    name: "Shri Pradeep Iyer",
    nameHi: "श्री प्रदीप अय्यर",
    role: "Treasurer",
    image: "https://img.freepik.com/premium-photo/indian-business-man-suit-portrait-smile_53876-1058380.jpg?semt=ais_hybrid&w=740&q=80",
    quote: "Every rupee we steward must reach the last citizen.",
  },
  {
    id: "l4",
    name: "Dr. Shabana Ali",
    nameHi: "डॉ. शबाना अली",
    role: "Director, Programmes",
    image: "https://img.freepik.com/premium-photo/confidence-leads-success-portrait-young-woman-standing-office_590464-9747.jpg",
    quote: "Lasting change is built on the ground, with the community.",
  },
];

export const eliteMembers = [
  { id: "em1", name: "Mr. Vivek Adukia", company: "Director, Adukia Industries", image: vivekAdukia },
  { id: "em2", name: "Mr. Suresh Chand Bansal", company: "Executive Chairman, Beekey Steel", image: sureshChandBansal },
  { id: "em3", name: "Mr. Vidhya Sagar Agarwal", company: "Director, AOne Biscuits", image: vidhyaSagarAgarwal },
  { id: "em4", name: "Mr. Murari Lal Muraraka", company: "Associated with 16 companies in India & Nepal", image: murariLal },
  { id: "em5", name: "Mr. Rakesh Kumar Gupta", company: "Retired IPS", image: rakeshKumarIps },
  { id: "em6", name: "Mr. Praful Tayal", company: "Retired Commander, Indian Navy", image: prafulTayal },
  { id: "em7", name: "Dr. Ramlal B Lhila", company: "Internal Medicine Specialist", image: drRbLhila },
  { id: "em8", name: "Mr. Jaswant Singh Saini", company: "Saini Motors", image: jaswantSinghSaini },
  { id: "em9", name: "Mr. Ghanshyam Prasad Agarwal", company: "Rupa Hosiery", image: gpAgarwala },
  { id: "em10", name: "Mr. Sumer Mal Surana", company: "Senior Chartered Accountant", image: sumermalSurana },
  { id: "em11", name: "Mr. Sita Ram Agarwal", company: "Super Shakti Steel", image: sitaramAgarwal },
];

export const businessAbout = {
  eyebrow: "Introduction",
  title: "Business meets Purpose",
  description:
    "Bharat Vikas Parishad (BVP) has been a beacon of service and sanskar for decades. The Business Network is our latest initiative to empower our members in the professional sphere.",
  philosophy: "Generate opportunity for all, grow together with integrity.",
  attributes: [
    {
      id: "ba1",
      title: "National Credibility",
      body: "Backed by BVP's decades-long legacy of integrity and national presence across thousands of branches in India.",
    },
    {
      id: "ba2",
      title: "Elite Membership",
      body: "Curated community of serious business owners committed to mutual growth, ethical dealings, and collaborative success.",
    },
    {
      id: "ba3",
      title: "Structured Yet Flexible",
      body: "One mandatory monthly meeting designed for maximum impact — focused, productive sessions that respect your time.",
    },
    {
      id: "ba4",
      title: "Exceptional Value",
      body: "At just ₹5,000 annually, access a complete networking ecosystem plus complimentary BVP branch membership.",
    },
  ],
};

export const businessServices = [
  {
    id: "bs1",
    number: "01",
    title: "Global Connectivity",
    description: "Access a national network of successful professionals across various BVP chapters — your business reaches beyond local boundaries.",
    icon: "handshake",
  },
  {
    id: "bs2",
    number: "02",
    title: "Strategic Alliances",
    description: "Build partnerships that go beyond simple referrals to create long-term business value and collaborative opportunities.",
    icon: "programme",
  },
  {
    id: "bs3",
    number: "03",
    title: "Category Exclusivity",
    description: "Only one business per category per chapter — your seat is protected, ensuring all referrals in your field come directly to you.",
    icon: "directory",
  },
  {
    id: "bs4",
    number: "04",
    title: "BVP Network Access",
    description: "Tap into the vast BVP ecosystem across India — events, national chapters, and a community bound by shared values.",
    icon: "globe",
  },
];

export const platformOverview = [
  { id: "po1", label: "Meeting Frequency", value: "1× / Month", note: "Mandatory" },
  { id: "po2", label: "Annual Investment", value: "₹5,000", note: "< ₹420 / month" },
  { id: "po3", label: "Category System", value: "1 Per Category", note: "Per chapter" },
  { id: "po4", label: "BVP Branch", value: "Complimentary", note: "Included free" },
  { id: "po5", label: "Reach", value: "Local + National", note: "Across India" },
  { id: "po6", label: "ROI Focus", value: "High & Measurable", note: "Tracked monthly" },
];

export const businessBenefits = [
  {
    id: "bb1",
    title: "Trusted Referrals",
    description: "Receive warm, pre-qualified business leads from fellow members who vouch for your expertise — far more effective than cold outreach.",
    icon: "handshake",
  },
  {
    id: "bb2",
    title: "Category Protection",
    description: "Your business category is exclusively yours within the chapter. Every referral in your field flows directly to you — zero internal competition.",
    icon: "directory",
  },
  {
    id: "bb3",
    title: "BVP Branch Membership",
    description: "Complimentary membership at any BVP branch — access their events, social network, and the credibility of India's trusted national institution.",
    icon: "scheme",
  },
  {
    id: "bb4",
    title: "High-Impact Meetings",
    description: "One focused monthly meeting structured to deliver maximum business value without consuming your schedule. Every minute is purposeful.",
    icon: "programme",
  },
  {
    id: "bb5",
    title: "Measurable Growth",
    description: "Track the business you give and receive. Our transparent system ensures accountability and shows clear ROI on your membership investment.",
    icon: "people",
  },
  {
    id: "bb6",
    title: "Skill Development",
    description: "Regular exposure to business presentations and insights from diverse members accelerates your personal and professional growth.",
    icon: "service",
  },
];

export const membershipInclusions = [
  "Monthly structured business meeting",
  "Exclusive category protection in your chapter",
  "Free BVP Branch membership of your choice",
  "Access to the full member directory",
  "Referral tracking & accountability tools",
  "National BVP network access",
  "Business presentation platform",
  "Ethical growth community rooted in integrity",
];

export const membershipHeadline = {
  price: "₹5K ANNUAL INVESTMENT",
  subtext: "Less than ₹420/month for a network that can generate lakhs in new business.",
};

export const joinSteps = [
  {
    id: "js1",
    number: "01",
    title: "Express Your Interest",
    description: "Fill out the enquiry form or reach out to us. Tell us about your business and what you're looking to achieve through the network.",
  },
  {
    id: "js2",
    number: "02",
    title: "Attend as a Guest",
    description: "Visit one of our monthly chapter meetings as a guest — at no cost — to experience the culture, meet members, and see the value firsthand.",
  },
  {
    id: "js3",
    number: "03",
    title: "Category Verification",
    description: "We verify your business category is available in the chapter. If open, your seat is exclusively reserved — no competitor can join in your field.",
  },
  {
    id: "js4",
    number: "04",
    title: "Complete Membership — ₹5,000/year",
    description: "Submit your annual fee. This includes BVP branch membership of your choice, chapter access, and all network benefits.",
  },
  {
    id: "js5",
    number: "05",
    title: "Welcome to the Elite Network",
    description: "Attend your first official meeting, introduce your business, and begin giving and receiving referrals within a trusted growth community.",
  },
];

export const joinPageIntro = {
  heading: "Your Path to Elite Membership",
  subtext:
    "Joining BVP Business Network is transparent and straightforward — designed to ensure every member is serious, committed, and aligned with our values of mutual growth.",
};

export const businessContact = {
  address: "Newtown, India — multiple chapters available across the country",
  phone: "+91 XXXXX XXXXX",
  email: "network@bvp.org.in",
  meeting: "Monthly — 1st Sunday (Time confirmed on joining)",
  cta: {
    heading: "Ready to Grow Together?",
    subtext: "Whether you're ready to join or just curious — we'd love to have a conversation.",
  },
};

export const stats = [
  { value: "₹5K", label: "Annual membership", icon: "people" },
  { value: "1×", label: "Monthly meeting", icon: "programme" },
  { value: "1", label: "Business per category", icon: "handshake" },
  { value: "Pan India", label: "BVP Network reach", icon: "map" },
];

export const importantLinks = [
  { label: "India.gov.in", href: "https://www.india.gov.in", description: "National Portal of India" },
  { label: "MyGov", href: "https://www.mygov.in", description: "Citizen engagement platform" },
  { label: "PMO India", href: "https://www.pmindia.gov.in", description: "Office of the Prime Minister" },
  { label: "Digital India", href: "https://www.digitalindia.gov.in", description: "Empowering citizens digitally" },
  { label: "DigiLocker", href: "https://www.digilocker.gov.in", description: "Issued documents wallet" },
  { label: "UMANG", href: "https://web.umang.gov.in", description: "Unified citizen services app" },
  { label: "RTI Online", href: "https://rtionline.gov.in", description: "File RTI applications online" },
  { label: "Swachh Bharat", href: "https://swachhbharatmission.gov.in", description: "Clean India Mission" },
];

export const galleryImages = [
  "https://bvpindia.com/wp-content/uploads/2018/10/seminar_1190x-1024x431.jpg",
  "https://bvpindia.com/wp-content/uploads/2024/07/cutain_traiser2013.png",
  "https://www.compliancesarathi.in/wp-content/uploads/2025/06/step-1-ngo.jpg",
  "https://bvpindia.com/wp-content/uploads/2022/08/beti.jpg",
  "https://img.freepik.com/free-photo/group-four-south-asian-men-s-posed-business-meeting-cafe-indians-together-sign-important-documents-contract-study-work_627829-5252.jpg?semt=ais_hybrid&w=740&q=80",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc7DwRXnH-FPnA46ldpXxJWD15nlk7U5TwBA&s",
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=70",
  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=70",
];

export const footer = {
  about:
    "Generating opportunity for all business with elite members — rooted in service, driven by growth. An initiative of Bharat Vikas Parishad.",
  contact: {
    address: "Newtown, India — Multiple chapters available across the country",
    phone: "+91 XXXXX XXXXX",
    helpline: "network@bvp.org.in",
    email: "network@bvp.org.in",
    rti: "network@bvp.org.in",
  },
  socials: [
    { label: "Twitter", href: "#", icon: "twitter" },
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "YouTube", href: "#", icon: "youtube" },
  ],
  visitorCount: 18472193,
  copyright: "© 2025 BVP Business Network. All rights reserved.",
};
