import hero1 from "@/assets/speaker_01.jpg";
import hero2 from "@/assets/speaker_02.jpg";
import hero3 from "@/assets/speaker_03.jpg";
import hero4 from "@/assets/speaker_04.jpg";
import teacher1 from "@/assets/david.jpeg";
import teacher2 from "@/assets/millar.jpeg";
import teacher3 from "@/assets/watsan.jpeg";
import teacher4 from "@/assets/jones.jpeg";

export const intellectLocations = [
  {
    id: 1,
    name: "Зебошка",
    addressKey: "location.zeboshka_address",
    phone: "+992 550 161616",
    email: "Partners@aliftech.net",
    workingHoursKey: "location.zeboshka_working_hours",
    coordinates: { lat: 38.5767, lng: 68.7797 },
    bgColorClass: "card-teal",
    darkBgColorClass: "card-teal-dark",
    iconColorClass: "card-teal-dark",
    darkIconColorClass: "card-teal",
  },
  {
    id: 2,
    name: "Автовокзал тоҷикӣ",
    addressKey: "location.avtovokzal_tajiki_address",
    phone: "+992 551 161616",
    email: "Partners@aliftech.net",
    workingHoursKey: "location.avtovokzal_tajiki_working_hours",
    coordinates: { lat: 38.58, lng: 68.785 },
    bgColorClass: "card-orange-new",
    darkBgColorClass: "card-orange-new-dark",
    iconColorClass: "card-orange-new-dark",
    darkIconColorClass: "card-orange-new",
  },
  {
    id: 3,
    name: "33 мкр",
    addressKey: "location.33_mkr_address",
    phone: "+992 552 161616",
    email: "Partners@aliftech.net",
    workingHoursKey: "location.33_mkr_working_hours",
    coordinates: { lat: 38.565, lng: 68.76 },
    bgColorClass: "card-pink",
    darkBgColorClass: "card-pink-dark",
    iconColorClass: "card-pink-dark",
    darkIconColorClass: "card-pink",
  },
  {
    id: 4,
    name: "Автовокзал Руси",
    addressKey: "location.avtovokzal_rusi_address",
    phone: "+992 551 161616",
    email: "Partners@aliftech.net",
    workingHoursKey: "location.avtovokzal_rusi_working_hours",
    coordinates: { lat: 38.59, lng: 68.79 },
    bgColorClass: "card-green-new",
    darkBgColorClass: "card-green-new-dark",
    iconColorClass: "card-green-new-dark",
    darkIconColorClass: "card-green-new",
  },
  {
    id: 5,
    name: "Дангара",
    addressKey: "location.dangara_address",
    phone: "+992 553 161616",
    email: "Partners@aliftech.net",
    workingHoursKey: "location.dangara_working_hours",
    coordinates: { lat: 37.9, lng: 69.7833 },
    bgColorClass: "card-purple-new",
    darkBgColorClass: "card-purple-new-dark",
    iconColorClass: "card-purple-new-dark",
    darkIconColorClass: "card-purple-new",
  },
  {
    id: 6,
    name: "Зарафшон",
    addressKey: "location.zarafshon_address",
    phone: "+992 554 161616",
    email: "Partners@aliftech.net",
    workingHoursKey: "location.zarafshon_working_hours",
    coordinates: { lat: 38.55, lng: 68.75 },
    bgColorClass: "card-blue-new",
    darkBgColorClass: "card-blue-new-dark",
    iconColorClass: "card-blue-new-dark",
    darkIconColorClass: "card-blue-new",
  },
];

export const resources = [
  {
    id: "1",
    titleKey: "resource.programming_course.title",
    descriptionKey: "resource.programming_course.description",
    fullContentKey: "resource.programming_course.full_content",
    tagsKeys: ["tags.stem", "tags.online_course", "tags.technology"],
    isOfficial: true,
    isVerified: true,
    href: "/resources/programming-course",
    previewImage:
      "https://images.unsplash.com/photo-1581090700227-1e8e00839f4c",
    ctaWebsite: "https://example.com/programming-course",
    ctaPdf: "/sample-syllabus.pdf",
  },
  {
    id: "2",
    titleKey: "resource.english_club.title",
    descriptionKey: "resource.english_club.description",
    fullContentKey: "resource.english_club.full_content",
    tagsKeys: ["tags.languages", "tags.local_event", "tags.education"],
    isOfficial: false,
    isVerified: true,
    href: "/resources/english-club",
    previewImage:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754",
    ctaWebsite: "https://example.com/english-club",
    ctaPdf: null,
  },
  {
    id: "3",
    titleKey: "resource.digital_marketing.title",
    descriptionKey: "resource.digital_marketing.description",
    fullContentKey: "resource.digital_marketing.full_content",
    tagsKeys: ["tags.technology", "tags.masterclass", "tags.business"],
    isOfficial: true,
    isVerified: true,
    href: "/resources/digital-marketing",
    previewImage:
      "https://images.unsplash.com/photo-1581092334573-df46c1d3f3d0",
    ctaWebsite: "https://example.com/digital-marketing",
    ctaPdf: null,
  },
  {
    id: "4",
    titleKey: "resource.youth_mentorship.title",
    descriptionKey: "resource.youth_mentorship.description",
    fullContentKey: "resource.youth_mentorship.full_content",
    tagsKeys: ["tags.youth", "tags.mentorship", "tags.development"],
    isOfficial: true,
    isVerified: true,
    href: "/resources/youth-mentorship",
    previewImage: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    ctaWebsite: "https://example.com/youth-mentorship",
    ctaPdf: null,
  },
  {
    id: "5",
    titleKey: "resource.math_lessons.title",
    descriptionKey: "resource.math_lessons.description",
    fullContentKey: "resource.math_lessons.full_content",
    tagsKeys: ["tags.education", "tags.stem", "tags.offline"],
    isOfficial: false,
    isVerified: false,
    href: "/resources/math-lessons",
    previewImage: "https://images.unsplash.com/photo-1555967521-9713bf272da9",
    ctaWebsite: null,
    ctaPdf: "/sample-math-problems.pdf",
  },
  {
    id: "6",
    titleKey: "resource.ai_intro.title",
    descriptionKey: "resource.ai_intro.description",
    fullContentKey: "resource.ai_intro.full_content",
    tagsKeys: ["tags.technology", "tags.online_course", "tags.stem"],
    isOfficial: true,
    isVerified: true,
    href: "/resources/ai-intro",
    previewImage:
      "https://images.unsplash.com/photo-1581090700227-1e8e00839f4c",
    ctaWebsite: "https://example.com/ai-intro",
    ctaPdf: null,
  },
  {
    id: "7",
    titleKey: "resource.tajik_language.title",
    descriptionKey: "resource.tajik_language.description",
    fullContentKey: "resource.tajik_language.full_content",
    tagsKeys: ["tags.languages", "tags.offline", "tags.culture"],
    isOfficial: true,
    isVerified: true,
    href: "/resources/tajik-language",
    previewImage:
      "https://images.unsplash.com/photo-1610484826952-e4e83d3c90fe",
    ctaWebsite: "https://example.com/tajik-language",
    ctaPdf: null,
  },
  {
    id: "8",
    titleKey: "resource.cybersecurity.title",
    descriptionKey: "resource.cybersecurity.description",
    fullContentKey: "resource.cybersecurity.full_content",
    tagsKeys: ["tags.technology", "tags.masterclass", "tags.security"],
    isOfficial: true,
    isVerified: true,
    href: "/resources/cybersecurity",
    previewImage:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1",
    ctaWebsite: "https://example.com/cybersecurity",
    ctaPdf: null,
  },
];

export const categories = [
  {
    nameKey: "categories.education",
    icon: "BookOpenIcon",
    href: "/catalog?category=education",
  },
  {
    nameKey: "categories.languages",
    icon: "LanguagesIcon",
    href: "/catalog?category=languages",
  },
  {
    nameKey: "categories.technology",
    icon: "LaptopIcon",
    href: "/catalog?category=technology",
  },
  {
    nameKey: "categories.youth",
    icon: "UsersIcon",
    href: "/catalog?category=youth",
  },
];

export const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const reviews = [
  {
    id: 1,
    translationKey: "reviews.aziza_rahimova",
    avatar: hero2,
    rating: 5,
  },
  {
    id: 2,
    translationKey: "reviews.dilshod_karimov",
    avatar: hero1,
    rating: 5,
  },
  {
    id: 3,
    translationKey: "reviews.sofia_van",
    avatar: hero4,
    rating: 4,
  },
  {
    id: 4,
    translationKey: "reviews.mirzakhid_abdullaev",
    avatar: hero3,
    rating: 4,
  },
  {
    id: 5,
    translationKey: "reviews.nigina_tursunova",
    avatar: hero2,
    rating: 5,
  },
];

export const blogPosts = [
  {
    id: 1,
    image: hero1,
    date: "August 10, 2023",
    author: "Admin",
    translationKey: "blog.posts.0", 
  },
  {
    id: 2,
    image: hero1,
    date: "June 21, 2023",
    author: "Admin",
    translationKey: "blog.posts.1",
  },
  {
    id: 3,
    image: hero1,
    date: "June 21, 2023",
    author: "Admin",
    translationKey: "blog.posts.2",
  },
  {
    id: 4,
    image: hero1,
    date: "June 21, 2023",
    author: "Admin",
    translationKey: "blog.posts.3",
  },
];

export const teachers = [
  {
    id: 1,
    name: "Ахмад Саидов",
    subject: "Математика, 4-5 кластер",
    image: teacher1,
    courses: 3,
    students: 150,
  },
  {
    id: 2,
    name: "Малика Каримова",
    subject: "Биология, олимпиады",
    image: teacher2,
    courses: 2,
    students: 80,
  },
  {
    id: 3,
    name: "Фарход Исмоилов",
    subject: "Физика, IT-направления",
    image: teacher3,
    courses: 4,
    students: 120,
  },
  {
    id: 4,
    name: "Зухра Рахимова",
    subject: "Английский язык, IELTS",
    image: teacher4,
    courses: 2,
    students: 95,
  },
];

export const getResourceBySlug = (slug) => {
  return resources.find((r) => r.href === `/resources/${slug}`) || null;
};
