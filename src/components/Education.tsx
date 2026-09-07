import { motion } from 'motion/react';

const education = [
  { degree: "Graphic Design (bachelor's degree)", institution: "National University of Architecture and Construction of Armenia", year: "2018–2022" },
  { degree: "UX Research", institution: "Baymard Institute (An Independent Web UX Research Institute)", year: "2023–2024" },
];

export default function Education() {
  return (
    <section className="py-[60px] md:py-36 px-6 bg-transparent transition-colors duration-700 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter bg-gradient-to-br from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent pb-2">
            Education
          </h2>
        </div>
        <div className="flex flex-col gap-12">
          {education.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group flex flex-col md:flex-row md:justify-between items-start md:items-baseline border-b border-zinc-200 dark:border-white/10 pb-8 hover:border-white/30 transition-colors"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-zinc-900 dark:text-zinc-50">{edu.degree}</h3>
                <p className="text-lg text-zinc-500 mt-2">{edu.institution}</p>
              </div>
              <div className="mt-4 md:mt-0 font-mono text-sm text-zinc-400 tracking-widest uppercase">
                {edu.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
