"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import clsx from "clsx";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Skills() {
  return (
    <section className="min-h-[calc(100vh-7rem)] px-6 py-16 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-3">skills</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          What I&apos;ve built{" "}
          <span className="text-white/30">with.</span>
        </h1>
        <p className="text-white/50 text-base max-w-xl">
          Technologies and tools I&apos;ve used in production across all four organisations.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {skillCategories.map((cat) => (
          <motion.div key={cat.name} variants={sectionVariants}>
            <div className="flex items-center gap-3 mb-3">
              <div className={clsx("h-px flex-1 bg-gradient-to-r opacity-40", cat.color)} />
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest whitespace-nowrap">
                {cat.name}
              </span>
              <div className="h-px w-6 bg-white/10" />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-2"
            >
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="relative text-sm font-medium text-white/75 bg-white/5 border border-white/10 hover:border-white/25 hover:text-white px-3.5 py-1.5 rounded-lg transition-colors duration-200 cursor-default"
                >
                  {skill}
                  {/* Subtle gradient underline on hover */}
                  <span
                    className={clsx(
                      "absolute bottom-0 left-2 right-2 h-px rounded-full bg-gradient-to-r opacity-0 hover:opacity-100 transition-opacity",
                      cat.color
                    )}
                  />
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
