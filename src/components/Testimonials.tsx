import React from 'react';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';

import avatarNarbeh from '../assets/images/regenerated_image_1786978266504.jpg';
import avatarSarah from '../assets/images/regenerated_image_1786978267210.webp';
import avatarMarcus from '../assets/images/regenerated_image_1786978267537.png';

const testimonials = [
  {
    name: "Narbeh Movsesian",
    role: "Founder, NCM Technology",
    linkedin: "https://www.linkedin.com/in/narbehmovsesian/",
    content: "Working with Anna across different types of design projects has been a great experience. She consistently combines strong visual design with functional, thoughtful solutions and adapts easily to the unique needs of each project. I highly recommend working with her.",
    avatar: avatarNarbeh,
  },
  {
    name: "Tigran Harutyunyan",
    role: "Founder & CEO at PBA.am",
    linkedin: "https://www.linkedin.com/in/tigran-harutyunyan-394baa197/",
    content: "Anna has a great eye for detail and a strong ability to combine aesthetic elegance with functional clarity. She quickly understands the vision behind a project and translates it into thoughtful, polished design solutions. Professional, creative, and reliable — I highly recommend her for any design project.",
    avatar: avatarSarah,
  },
  {
    name: "Mostafa Taghipour",
    role: "Senior Product designer",
    linkedin: "https://www.linkedin.com/in/mostafauiux/",
    content: "Working with Anna was a great experience. She produces visually stunning and perfectly balanced icons. With just a bit more focus on developer-ready file hygiene (like single-layer unification and precise initial naming), her work would be truly flawless. Highly recommended for her creative eye!",
    avatar: avatarMarcus,
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[60px] md:py-36 px-6 bg-transparent transition-colors duration-700 relative z-10 overflow-hidden border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter bg-gradient-to-br from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent pb-2">
            Testimonials
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-lg md:text-right">
            Hear from the people I've had the pleasure of collaborating with on ambitious projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="group relative p-8 md:p-10 rounded-[2rem] bg-zinc-100 dark:bg-zinc-900 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500"
            >
              <div>
                <svg className="w-10 h-10 mb-8 text-zinc-300 dark:text-zinc-700 group-hover:text-amber-400 transition-colors duration-500" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 mb-8 leading-relaxed font-light">
                  {testimonial.content}
                </p>
              </div>
              
              <div className="flex items-center justify-between gap-4 border-t border-black/5 dark:border-white/5 pt-6 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 shrink-0">
                    <img src={testimonial.avatar} alt={testimonial.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-50 text-lg tracking-tight">{testimonial.name}</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.role}</p>
                  </div>
                </div>

                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${testimonial.name} LinkedIn Profile`}
                  data-cursor-text="LINKEDIN"
                  className="p-2.5 rounded-full border border-black/10 dark:border-white/10 text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/30 dark:hover:border-amber-400/30 hover:bg-amber-400/10 transition-all shrink-0"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
