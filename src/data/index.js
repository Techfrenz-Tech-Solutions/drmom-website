// Marketing content — used by Home.jsx (STATS, TESTIMONIALS) and About.jsx (STATS, TEAM)
// Course catalog data (CLASSES, SUBJECTS, VIDEOS_DATA, SUBSCRIPTION_PLANS) is now fully
// served by the backend /api/catalog endpoint and has been removed from this file.

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Parent of Grade 2 Student",
    text: "Dr Mom 2.0 transformed how my daughter learns. The interactive videos make concepts so clear and fun!",
    avatar: "PS",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Parent of LKG Student",
    text: "My son looks forward to learning every day! The phonics module is exceptional — he started reading within weeks.",
    avatar: "RK",
    rating: 5,
  },
  {
    name: "Anitha Nair",
    role: "Parent of Grade 4 Student",
    text: "The quality of content and the platform's design is world-class. My daughter's grades improved significantly.",
    avatar: "AN",
    rating: 5,
  },
  {
    name: "Mohammed Ali",
    role: "Parent of Grade 1 Student",
    text: "Value for money is outstanding. The full access pack gives my child everything needed for the whole year.",
    avatar: "MA",
    rating: 5,
  },
];

export const STATS = [
  { value: "50,000+", label: "Happy Students" },
  { value: "2,000+", label: "Video Lessons" },
  { value: "100+", label: "Expert Teachers" },
  { value: "4.9★", label: "Average Rating" },
];

export const TEAM = [
  { name: "Dr. Meena Pillai", role: "Curriculum Director", initials: "MP", bg: "#6b3fa0" },
  { name: "Arun Krishnamurthy", role: "Head of Pedagogy", initials: "AK", bg: "#0d9488" },
  { name: "Sunita Devi", role: "Lead Content Creator", initials: "SD", bg: "#c2410c" },
  { name: "Vijay Nambiar", role: "Technology Lead", initials: "VN", bg: "#1e40af" },
];
