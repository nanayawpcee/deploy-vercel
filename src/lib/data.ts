// ─── Site-wide constants ───────────────────────────────────────
export const SITE = {
  name: "St. Elizabeth Catholic Hospital",
  shortName: "SECH",
  tagline: "Healing with Faith & Excellence",
  phone: "+233 322 298 428",
  email: "info@sech-gh.org",
  address: "Hwidiem, Asutufi South District,Ahafo Region, Ghana",
  hours: "24 hours, 7 days a week",
  chag: true,
};

// ─── Services ──────────────────────────────────────────────────
export const SERVICES = [
  {
    slug: "inpatient",
    icon: "🏥",
    title: "In-Patient Services",
    shortDesc: "Round-the-clock ward care with dedicated nursing and physician oversight.",
    fullDesc: "Our in-patient wards offer comprehensive care across general medicine, surgery, obstetrics, and paediatrics. Each ward is staffed 24/7 by trained nurses and overseen by consultant physicians, ensuring continuous monitoring and support for every admitted patient.",
    features: ["24/7 nursing care", "Consultant oversight", "Private & shared wards", "Family visiting hours"],
  },
  {
    slug: "laboratory",
    icon: "🔬",
    title: "Laboratory",
    shortDesc: "State-of-the-art diagnostics with rapid turnaround for accurate results.",
    fullDesc: "The SECH Laboratory is equipped with modern analysers for haematology, biochemistry, microbiology, and histopathology. Our certified scientists ensure rapid, accurate results that power clinical decision-making.",
    features: ["Haematology & biochemistry", "Microbiology cultures", "HIV/TB testing", "Same-day results"],
  },
  {
    slug: "eye-center",
    icon: "👁️",
    title: "Eye Center",
    shortDesc: "Full ophthalmic services from routine screening to surgical interventions.",
    fullDesc: "The SECH Eye Center provides comprehensive eye care including refraction, cataract surgery, glaucoma management, and diabetic retinopathy screening. We serve patients across the Brong-Ahafo Region and beyond.",
    features: ["Cataract surgery", "Glaucoma screening", "Diabetic eye care", "Spectacle prescription"],
  },
  {
    slug: "postnatal",
    icon: "👶",
    title: "Post-Natal & CWC",
    shortDesc: "Mother and child wellness from delivery through early development.",
    fullDesc: "Our post-natal and Child Welfare Clinic (CWC) supports mothers and infants through the critical first months. Services include breastfeeding support, immunisation, growth monitoring, and nutritional counselling.",
    features: ["Breastfeeding support", "Immunisation schedule", "Growth monitoring", "Nutritional counselling"],
  },
  {
    slug: "dental",
    icon: "🦷",
    title: "Dental Services",
    shortDesc: "Preventive, restorative, and cosmetic dental care for all ages.",
    fullDesc: "SECH's dental clinic offers a full range of oral health services, from routine cleanings and fillings to extractions and dentures. School health dental outreach programmes extend our care to the wider community.",
    features: ["Dental cleaning", "Fillings & extractions", "Dentures", "School health outreach"],
  },
  {
    slug: "psychiatry",
    icon: "🧠",
    title: "Psychiatry & Counselling",
    shortDesc: "Mental health support, counselling, and inpatient psychiatric care.",
    fullDesc: "The SECH Psychiatry department provides outpatient mental health consultations, group therapy, individual counselling, and inpatient care for acute psychiatric conditions. Our team takes a holistic, compassionate approach.",
    features: ["Outpatient consultations", "Group therapy", "Individual counselling", "Inpatient stabilisation"],
  },
  {
    slug: "pharmacy",
    icon: "💊",
    title: "Pharmacy",
    shortDesc: "On-site dispensary stocked with essential and specialised medications.",
    fullDesc: "SECH's pharmacy is fully stocked with WHO essential medicines and a wide range of specialised drugs. Our pharmacists provide medication counselling and ensure safe dispensing for both in-patients and out-patients.",
    features: ["Essential medicines", "Specialised drugs", "Medication counselling", "Discharge prescriptions"],
  },
  {
    slug: "imaging",
    icon: "🩻",
    title: "X-Ray & Ultrasound",
    shortDesc: "Advanced diagnostic imaging for precise, non-invasive assessments.",
    fullDesc: "Our Radiology department provides plain X-ray, ultrasound, and obstetric scanning services. Digital imaging allows rapid reporting and easy sharing with consulting specialists.",
    features: ["Digital X-ray", "Abdominal ultrasound", "Obstetric scanning", "Rapid reporting"],
  },
  {
    slug: "outpatient",
    icon: "🏃",
    title: "Out-Patient Services",
    shortDesc: "General consultations and specialist clinics without admission.",
    fullDesc: "Our busy Out-Patient Department (OPD) sees hundreds of patients daily across general medicine, paediatrics, and speciality clinics. Triage nursing ensures urgent cases are prioritised immediately.",
    features: ["General medicine", "Paediatric clinic", "Triage nursing", "Referral coordination"],
  },
  {
    slug: "antenatal",
    icon: "🤰",
    title: "Ante-Natal Care",
    shortDesc: "Safe, supportive pregnancy care from first trimester to delivery.",
    fullDesc: "SECH's Ante-Natal Clinic (ANC) provides regular check-ups, ultrasound scans, iron supplementation, malaria prophylaxis, and birth preparedness education, ensuring every pregnancy in our care is well-monitored.",
    features: ["Routine ANC visits", "Obstetric ultrasound", "Malaria prophylaxis", "Birth preparedness"],
  },
];

// ─── Departments (for appointment booking) ────────────────────
export const DEPARTMENTS = [
  "General Medicine",
  "Paediatrics",
  "Obstetrics & Gynaecology",
  "Surgery",
  "Eye Center (Ophthalmology)",
  "Dental",
  "Psychiatry & Counselling",
  "Ante-Natal Clinic",
  "Physiotherapy",
  "Nutrition & Dietetics",
];

// ─── Hero carousel slides ─────────────────────────────────────
export const HERO_SLIDES = [
  {
    heading: "Healing with\nFaith & Excellence",
    sub: "World-class Catholic healthcare in the heart of Ghana. Compassionate care for every soul.",
    cta: "Explore Our Services",
    ctaHref: "/services",
    bg: "#063328",
    accent: "#E8B84B",
    pattern: "cross",
  },
  {
    heading: "Your Health\nIs Our Mission",
    sub: "From emergency care to specialised treatments — St. Elizabeth is with you at every step.",
    cta: "Meet Our Story",
    ctaHref: "/about",
    bg: "#0A4F3C",
    accent: "#5DCAA5",
    pattern: "wave",
  },
  {
    heading: "Advanced Care,\nHuman Touch",
    sub: "Modern diagnostics, experienced clinicians, and a healing environment rooted in compassion.",
    cta: "Book Appointment",
    ctaHref: "/appointment",
    bg: "#1A2F2A",
    accent: "#E8B84B",
    pattern: "dots",
  },
];

// ─── Stats ────────────────────────────────────────────────────
export const STATS = [
  { value: "50+",  label: "Years of Service" },
  { value: "200+", label: "Beds Capacity" },
  { value: "30k+", label: "Patients Annually" },
  { value: "150+", label: "Medical Staff" },
];

// ─── News ─────────────────────────────────────────────────────
export const NEWS = [
  {
    slug: "community-health-outreach-2026",
    date: "May 2026",
    tag: "Event",
    title: "Annual Community Health Outreach Drive",
    excerpt: "Free screenings and health education for over 2,000 residents across the Tano North District.",
    body: "St. Elizabeth Catholic Hospital held its annual Community Health Outreach Drive in May 2026, reaching over 2,000 residents across five communities in the Tano North District. Services included free blood pressure screening, blood glucose testing, eye examinations, and health education talks on malaria prevention, maternal health, and nutrition.",
  },
  {
    slug: "breastfeeding-campaign",
    date: "Apr 2026",
    tag: "Health",
    title: "Breastfeeding Awareness Campaign",
    excerpt: "SECH leads regional initiative promoting exclusive breastfeeding for optimal newborn nutrition.",
    body: "In partnership with regional health directorates, SECH launched an intensive breastfeeding awareness campaign targeting new mothers and community health workers across the Brong-Ahafo Region. The campaign emphasises the WHO-recommended six months of exclusive breastfeeding and provides practical support through peer counsellors.",
  },
  {
    slug: "eye-center-equipment",
    date: "Mar 2026",
    tag: "News",
    title: "New Eye Center Equipment Installed",
    excerpt: "A donation from international partners equips our Eye Center with advanced slit-lamp technology.",
    body: "Thanks to a generous donation from Orbis International and the International Eye Foundation, SECH's Eye Center has received a new digital slit-lamp, a non-contact tonometer, and a portable fundus camera. This equipment significantly expands our capacity to diagnose and manage glaucoma, cataracts, and diabetic eye disease.",
  },
  {
    slug: "chag-visit-2025",
    date: "Dec 2025",
    tag: "Event",
    title: "CHAG Executive Director & British High Commissioner Visit",
    excerpt: "Senior officials toured SECH facilities and praised the hospital's community health impact.",
    body: "The Executive Director of the Christian Health Association of Ghana (CHAG) and the Deputy British High Commissioner visited St. Elizabeth Catholic Hospital in December 2025. They toured key departments, met with staff, and commended the hospital's sustained commitment to quality care and community health in rural Ghana.",
  },
];

// ─── Team ─────────────────────────────────────────────────────
export const TEAM = [
  { name: "Dr. Kwame Asante", role: "Medical Director", dept: "Administration", initials: "KA" },
  { name: "Dr. Abena Mensah", role: "Senior Physician", dept: "General Medicine", initials: "AM" },
  { name: "Dr. Francis Acheampong", role: "Surgeon", dept: "Surgery", initials: "FA" },
  { name: "Dr. Adwoa Boateng", role: "Obstetrician", dept: "Obs & Gynae", initials: "AB" },
  { name: "Dr. Kofi Oppong", role: "Ophthalmologist", dept: "Eye Center", initials: "KO" },
  { name: "Sr. Mary-Rose Adjei", role: "Director of Nursing", dept: "Nursing", initials: "MA" },
];

export const PHOTOS = [
  {
    id: 1,
    label: "Modern Ward Facilities",
    caption: "Our in-patient wards are equipped with modern beds, monitoring systems, and round-the-clock nursing care.",
    color: "#0A4F3C",
    icon: "🏥",
    image: "./images/aeriel.jpeg",
    pattern: "cross",
    accent: "#E8B84B",
  },
  {
    id: 2,
    label: "State-of- State-of-the-Art Laboratory",
    caption: "Advanced diagnostic equipment enables rapid, accurate results to guide clinical decisions.",
    color: "#063328",
    icon: "🔬",
    image: "./images/lab.jpeg",
    pattern: "dots",
    accent: "#5DCAA5",
  },
  {
    id: 3,
    label: "Eye Center & Ophthalmology",
    caption: "Our Eye Center offers comprehensive ophthalmic services from routine screening to cataract surgery.",
    color: "#1A2F2A",
    icon: "👁️",
    image: "./images/ent.jpeg",
    pattern: "wave",
    accent: "#E8B84B",
  },
  {
    id: 4,
    label: "Maternity & Post-Natal Care",
    caption: "A dedicated, warm environment for mothers and newborns — from delivery through early childhood wellness.",
    color: "#0D3D2C",
    icon: "🤰",
    image: "./images/mat.jpeg",
    pattern: "cross",
    accent: "#F5D080",
  }, 
  {
    id: 5,
    label: "Pharmacy & Dispensary",
    caption: "Fully stocked with WHO essential medicines and specialised drugs, with expert pharmacist counselling.",
    color: "#0A4F3C",
    icon: "💊",
    image: "./images/pharm.jpeg",
    pattern: "dots",
    accent: "#5DCAA5",
  },
  {
    id: 6,
    label: "Outpatient & Emergency",
    caption: "Our 24/7 emergency department and busy OPD serve hundreds of patients daily with expert triage.",
    color: "#1A2F2A",
    icon: "🚑",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&q=80",
    pattern: "wave",
    accent: "#E8B84B",
  },
];
