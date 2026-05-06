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
  nameEn: "Bharat Vikas Parishad",
  nameHi: "भारत विकास परिषद",
  taglineEn: "Public Service • Public Welfare • Public Awareness",
  taglineHi: "जन सेवा • जन कल्याण • जन जागरण",
  motto: "Satyameva Jayate",
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
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=70",
    title: "Empowering Communities",
    caption: "Building a stronger, healthier and more inclusive society.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=70",
    title: "Education for Every Child",
    caption: "Bridging the learning gap across rural and urban communities.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1600&q=70",
    title: "Healthcare Outreach",
    caption: "Bringing quality medical care to underserved areas.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1600&q=70",
    title: "Sustainable Livelihoods",
    caption: "Skills, training and resources for long-term independence.",
  },
];

// Marquee items for the "What's New" ticker
export const announcements = [
  { tag: "New", text: "Online registration open for Skill India Workshop 2026 — apply by 15 May.", href: "#" },
  { tag: "Notice", text: "Tender for printing of annual report (Ref: BVP/2026/PRN/04) released.", href: "#" },
  { tag: "Result", text: "Beneficiary list for PMAY-G phase IV published.", href: "#" },
  { tag: "Update", text: "Citizen helpline (1800-11-2526) will be available 24×7 from 01 June.", href: "#" },
  { tag: "Circular", text: "Revised guidelines for NGO empanelment (Circular 14/2026) issued.", href: "#" },
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
    image: "https://m.media-amazon.com/images/I/71j-Zs8WvNL._AC_UY1100_.jpg",
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
  { id: "em7", name: "Mr. Kailash Kansal", company: "Tea Gardens", image: null },
  { id: "em8", name: "Dr. Ramlal B Lhila", company: "Internal Medicine Specialist", image: drRbLhila },
  { id: "em9", name: "Mr. Jaswant Singh Saini", company: "Saini Motors", image: jaswantSinghSaini },
  { id: "em10", name: "Mr. Ghanshyam Prasad Agarwal", company: "Rupa Hosiery", image: gpAgarwala },
  { id: "em11", name: "Mr. Sumer Mal Surana", company: "Senior Chartered Accountant", image: sumermalSurana },
  { id: "em12", name: "Mr. Sita Ram Agarwal", company: "Super Shakti Steel", image: sitaramAgarwal },
];

export const stats = [
  { value: "1.2M+", label: "Lives impacted", icon: "people" },
  { value: "350+", label: "Programmes run", icon: "programme" },
  { value: "120+", label: "Partner institutions", icon: "handshake" },
  { value: "21", label: "States served", icon: "map" },
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
  "https://thumbs.dreamstime.com/b/smart-smiling-middle-aged-indian-business-man-26978835.jpg",
  "https://i.pinimg.com/736x/5b/db/f7/5bdbf78537b82b899c2ab63d0b25ff10.jpg",
  "https://img.freepik.com/premium-photo/indian-business-man-suit-portrait-smile_53876-1058380.jpg?semt=ais_hybrid&w=740&q=80",
  "https://m.media-amazon.com/images/I/71j-Zs8WvNL._AC_UY1100_.jpg",
  "https://img.freepik.com/free-photo/group-four-south-asian-men-s-posed-business-meeting-cafe-indians-together-sign-important-documents-contract-study-work_627829-5252.jpg?semt=ais_hybrid&w=740&q=80",
  "https://hdrc-sxnfes.org/wp-content/uploads/2020/03/women-empowerment.jpg",
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=70",
  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=70",
];

export const footer = {
  about:
    "Bharat Vikas Parishad is a non-profit organisation committed to inclusive development through education, healthcare and sustainable livelihoods, in partnership with the Government of India and state governments.",
  contact: {
    address: "Block-A, Civic Centre, Janpath, New Delhi 110001, India",
    phone: "+91 11 2345 6789",
    helpline: "1800-11-2526",
    email: "contact@bvp.gov.in",
    rti: "rti@bvp.gov.in",
  },
  socials: [
    { label: "Twitter", href: "#", icon: "twitter" },
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "YouTube", href: "#", icon: "youtube" },
  ],
  visitorCount: 18472193,
};
