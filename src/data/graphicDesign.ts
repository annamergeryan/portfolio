import ankiSweetsCoverImg from '../assets/images/anki_cover-1.jpg';
import paratonamImg from '../assets/images/regenerated_image_1786972890191.jpg';
import lagoonImg from '../assets/images/regenerated_image_1786972878039.jpg';
import graphicsImg from '../assets/images/regenerated_image_1786972894784.png';
import chocoBonitaImg from '../assets/images/regenerated_image_1786972879772.png';
import lightTownImg from '../assets/images/regenerated_image_1786972892716.jpg';

export interface GraphicDesignItem {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  deliverables: string[];
  description: string;
  image: string;
  gallery?: string[];
  link?: string;
  routeUrl?: string;
}

export const graphicDesignWorks: GraphicDesignItem[] = [
  {
    id: "anki-sweets",
    title: "Anki Sweets",
    category: "Branding · Visual Identity",
    year: "2025",
    client: "Anki Sweets",
    deliverables: ["Logo Design", "Visual Identity", "Packaging Architecture", "Brand Guidelines"],
    description: "A playful yet sophisticated branding and visual identity system for Anki Sweets, pairing Oneday as the primary font with Poppins for taglines, crafted around rich purple (#8D53A0) and deep plum burgundy (#6E3635) tones.",
    image: ankiSweetsCoverImg,
    link: "https://www.behance.net/gallery/222230931/Anki-Sweets-Branding",
    gallery: [
      ankiSweetsCoverImg
    ]
  },
  {
    id: "light-town",
    title: "Light Town",
    category: "Branding · Visual Identity",
    year: "2025",
    client: "Light Town",
    deliverables: ["Branding", "Visual Identity", "Graphic Design", "Brand Architecture"],
    description: "A luminous visual identity and branding system for Light Town, crafted with minimal geometry, architectural clarity, and clean modern styling.",
    image: lightTownImg,
    link: "https://www.behance.net/gallery/222231445/Light-Town-Branding",
    gallery: [
      lightTownImg
    ]
  },
  {
    id: "paratonam",
    title: "Paraton.am",
    category: "Branding · Visual Identity",
    year: "2025",
    client: "Paraton.am",
    deliverables: ["Branding", "Visual Identity", "Graphic Design", "Brand Guidelines"],
    description: "A complete brand identity and visual design system for Paraton.am, establishing a distinctive aesthetic, logo architecture, and cohesive graphic assets.",
    image: paratonamImg,
    link: "https://www.behance.net/gallery/222665309/Paratonam-branding",
    gallery: [
      paratonamImg
    ]
  },
  {
    id: "lagoon",
    title: "Lagoon",
    category: "Branding · Visual Identity",
    year: "2025",
    client: "Lagoon",
    deliverables: ["Branding", "Visual Identity", "Graphic Design", "Brand System"],
    description: "An evocative visual identity and branding system for Lagoon, blending refined typography, oceanic palettes, and contemporary brand applications.",
    image: lagoonImg,
    link: "https://www.behance.net/gallery/222665543/Lagoon-branding",
    gallery: [
      lagoonImg
    ]
  },
  {
    id: "graphics-showcase",
    title: "Graphics",
    category: "Graphic Design · Visual Design",
    year: "2025",
    client: "Editorial & Graphics",
    deliverables: ["Graphic Design", "Visual Design", "Poster Art", "Typography"],
    description: "A dynamic series of graphic design experiments, typographic layouts, and expressive visual artworks exploring modern composition and color.",
    image: graphicsImg,
    link: "https://www.behance.net/gallery/222666443/Graphics",
    gallery: [
      graphicsImg
    ]
  },
  {
    id: "choco-bonita",
    title: "Choco Bonita",
    category: "Logo Design · Branding",
    year: "2025",
    client: "Choco Bonita",
    deliverables: ["Logo Design", "Branding", "Visual Identity", "Packaging Specs"],
    description: "An indulgent, charming brand identity and artisanal logo design for Choco Bonita, highlighting gourmet confectionery elegance and warm, rich visual appeal.",
    image: chocoBonitaImg,
    link: "https://www.behance.net/gallery/222232313/Choco-Bonita-logo-design",
    gallery: [
      chocoBonitaImg
    ]
  }
];
