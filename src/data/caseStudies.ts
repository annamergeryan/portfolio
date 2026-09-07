import brandixMockup from '../assets/images/regenerated_image_1787934484338.png';
import pharmacyMockup from '../assets/images/regenerated_image_1787934488931.png';
import softwareSolutionsMockup from '../assets/images/regenerated_image_1787934490705.jpg';

export interface CaseStudy {
  id: string;
  title: string;
  type: string;
  year: string;
  description: string;
  role: string;
  image: string;
  video?: string;
  presentationImages?: string[];
  externalUrl?: string;
  cta?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "brandix-landing-page",
    title: "Brandix Landing Page",
    type: "UX/UI Design · Web Design · Landing Page",
    year: "2024",
    description: "Designing a high-converting landing page for Brandix, focusing on engaging 3D visuals, clear messaging, and an intuitive user experience to drive business growth.",
    role: "UX/UI Designer",
    image: brandixMockup,
    externalUrl: "https://www.behance.net/gallery/221965693/Homepage-Design",
    cta: "View Case Study"
  },
  {
    id: "pharmacy-admin",
    title: "Pharmacy Admin Panel",
    type: "UX/UI Design · SaaS · Admin Dashboard",
    year: "2024",
    description: "Designing an intuitive and efficient admin panel for a pharmacy management system aimed at streamlining operations for administrators and staff.",
    role: "UX/UI Designer",
    image: pharmacyMockup,
    externalUrl: "https://www.behance.net/gallery/203292863/Pharmacy-Admin-Panel",
    cta: "View Case Study"
  },
  {
    id: "software-solutions",
    title: "Software Solutions Website",
    type: "Web Design · UI/UX",
    year: "2024",
    description: "Designing a modern digital presence and intuitive user experience for Software Solutions, showcasing technical capabilities and driving client engagement.",
    role: "UX/UI Designer",
    image: softwareSolutionsMockup,
    externalUrl: "https://www.behance.net/gallery/211993393/Software-Solutions-Website",
    cta: "View Case Study"
  }
];
