import ArtistPortfolio from "@/assets/imgs/projects/ArtistPortfolio.jpg";
import DoctorPortfolio from "@/assets/imgs/projects/DoctorPortfolio.jpg";
import Electronics from "@/assets/imgs/projects/Electronics.jpg";
import Everlane from "@/assets/imgs/projects/Everlane.jpg";
import ForkFlame from "@/assets/imgs/projects/ForkFlame.jpg";
import Furniture from "@/assets/imgs/projects/Furniture.jpg";
import GeneralPortfolio from "@/assets/imgs/projects/GeneralPortfolio.jpg";
import LawyerPortfolio from "@/assets/imgs/projects/LawyerPortfolio.jpg";
import Pharmacy from "@/assets/imgs/projects/Pharmacy.jpg";
import Recipes from "@/assets/imgs/projects/Recipes.jpg";
import Techmart from "@/assets/imgs/projects/Techmart.jpg";
import Watchit from "@/assets/imgs/projects/Watchit.jpg";
import HeroSection from '@/components/pagesComponents/websitesPage/HeroSection';
import ClientsProjectsSection from '@/components/pagesComponents/websitesPage/ClientsProjectsSection';
import TemplatesSection from '@/components/pagesComponents/websitesPage/TemplatesSection';


// variants
const pageStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.06 }
  }
};

const revealUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const revealLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

const cardItem = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  hover: { scale: 1.02, y: -4, transition: { duration: 0.18 } }
};

export default function WebsitesPage() {

  const projects = [
    { title: "Everlane", desc: "A sleek, modern e-commerce platform for sustainable fashion.", url: "https://brand-e-commerce-two.vercel.app/", image: Everlane.src },
    { title: "Techmart", desc: "A modern e-commerce website for a retail business.", url: "https://e-commerce-ashy-two-19.vercel.app/", image: Techmart.src },
    { title: "Pharmacy", desc: "A user-friendly online store for pharmaceutical products.", url: "https://pharmacy-e-commerce.vercel.app/", image: Pharmacy.src },
    { title: "Furniture", desc: "A modern online store for furniture and home decor.", url: "https://furniture-e-commerce-sandy.vercel.app/", image: Furniture.src },
    { title: "WatchIt", desc: "A sleek movie review website for film enthusiasts.", url: "https://watchit-e.netlify.app/", image: Watchit.src },
    { title: "Restaurant", desc: "A modern website for a restaurant business.", url: "https://fork-flame-e.netlify.app/", image: ForkFlame.src },
    { title: "Recipes", desc: "A clean and user-friendly website for sharing recipes.", url: "https://recipes-app-e.netlify.app/", image: Recipes.src },
    { title: "Artist Portfolio", desc: "A modern portfolio website for an artist.", url: "https://artist-portfolio-e.netlify.app/", image: ArtistPortfolio.src },
    { title: "Lawyer Portfolio", desc: "A professional portfolio website for a lawyer.", url: "http://lawyer-portfolio-e.netlify.app/", image: LawyerPortfolio.src },
    { title: "Doctor Portfolio", desc: "A professional portfolio website for a doctor.", url: "https://doctor-portfolio-e.netlify.app/", image: DoctorPortfolio.src },
    { title: "General Portfolio", desc: "A versatile portfolio website suitable for various professions.", url: "https://general-portfolio-e.netlify.app//", image: GeneralPortfolio.src },
    { title: "Electronics", desc: "A cutting-edge platform for electronics and gadgets.", url: "https://electronics-e-commerce-seven.vercel.app/", image: Electronics.src },
  ];

  const templates = [
    { type: "Hero Section", name: "Blackout Hero" },
    { type: "Feature Section", name: "Bento Grid v2" },
    { type: "Pricing Page", name: "Clean Tier" },
    { type: "Contact Form", name: "Minimal Send" },
    { type: "Footer", name: "Brutalist Base" },
    { type: "Navigation", name: "Blur Nav" },
  ];



  return (
    <div className="flex flex-col pt-15">

      {/* ================= Hero Section ================= */}
      <HeroSection revealUp={revealUp} />

      {/* ================= CLIENT PROJECTS ================= */}
      <ClientsProjectsSection revealLeft={revealLeft} pageStagger={pageStagger} cardItem={cardItem} projects={projects} />

      {/* ================= TEMPLATES SECTION ================= */}
      <TemplatesSection templates={templates} pageStagger={pageStagger} revealUp={revealUp} />

    </div>
  );
}
