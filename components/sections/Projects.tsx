"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { orgs } from "@/lib/data";
import clsx from "clsx";
import { Star } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function Projects() {
  const [activeOrg, setActiveOrg] = useState(orgs[0].id);
  const current = orgs.find((o) => o.id === activeOrg)!;

  return (
    <section className="min-h-[calc(100vh-7rem)] px-6 py-16 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-3">projects</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Things I&apos;ve{" "}
          <span className="text-white/30">shipped.</span>
        </h1>
        <p className="text-white/50 text-base max-w-xl">
          Production projects across four organisations. Filter by organisation below.
        </p>
      </motion.div>

      {/* Org tab selector */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {orgs.map((org) => (
          <button
            key={org.id}
            onClick={() => setActiveOrg(org.id)}
            className={clsx(
              "relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
              activeOrg === org.id
                ? "text-white"
                : "text-white/40 hover:text-white/70 bg-white/[0.03] border border-white/8"
            )}
          >
            {activeOrg === org.id && (
              <motion.div
                layoutId="org-tab-active"
                className={clsx("absolute inset-0 rounded-xl bg-gradient-to-r opacity-20", org.color)}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {activeOrg === org.id && (
              <motion.div
                layoutId="org-tab-border"
                className="absolute inset-0 rounded-xl border border-white/20"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{org.name}</span>
            <span className="relative z-10 ml-2 text-xs text-white/30">{org.domain}</span>
          </button>
        ))}
      </motion.div>

      {/* Project cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeOrg}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="grid gap-4 sm:grid-cols-2"
        >
          {current.projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-colors duration-300 overflow-hidden"
            >
              {/* Accent glow on highlight */}
              {project.highlight && (
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 blur-2xl pointer-events-none"
                  style={{ background: current.accent }}
                />
              )}

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-white text-[15px] leading-snug flex items-center gap-1.5">
                    {project.highlight && (
                      <Star size={12} className="text-yellow-400 flex-shrink-0 fill-yellow-400" />
                    )}
                    {project.name}
                  </h3>
                  <span className="text-[10px] font-mono text-white/30 bg-white/5 border border-white/8 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                    {project.type}
                  </span>
                </div>

                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-white/40 bg-white/[0.04] border border-white/8 px-2 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
