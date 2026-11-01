"use client";

import { motion } from "framer-motion";
import { orgs } from "@/lib/data";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section className="min-h-[calc(100vh-7rem)] px-6 py-16 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-3">about me</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          15 months.{" "}
          <span className="text-white/30">3 orgs.</span>
        </h1>
        <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
          I&apos;ve spent 15 months shipping production code across three organisations —
          building async backend infrastructure for an EdTech platform, a geo-matching company
          intelligence tool from the ground up, and AI features for a climate risk platform used by
          Indian policymakers.
        </p>
      </motion.div>

      {/* Org timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-5 sm:grid-cols-2"
      >
        {orgs.map((org) => (
          <motion.div
            key={org.id}
            variants={cardVariants}
            className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors duration-300 overflow-hidden"
          >
            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl"
              style={{ background: org.accent }}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{org.name}</h3>
                  <p className="text-sm text-white/40">{org.domain}</p>
                </div>
                <span className="text-xs font-mono text-white/30 bg-white/5 px-2 py-1 rounded-lg border border-white/8">
                  {org.period}
                </span>
              </div>

              <div
                className="h-0.5 rounded-full mb-4 opacity-40"
                style={{ background: `linear-gradient(to right, ${org.accent}, transparent)` }}
              />

              <ul className="space-y-1.5">
                {org.projects.slice(0, 3).map((p) => (
                  <li key={p.name} className="flex items-start gap-2 text-sm text-white/50">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                    <span>
                      <span className="text-white/70 font-medium">{p.name}</span>
                      {" — "}
                      <span className="text-xs">{p.type}</span>
                    </span>
                  </li>
                ))}
                {org.projects.length > 3 && (
                  <li className="text-xs text-white/30 pl-3">
                    +{org.projects.length - 3} more projects
                  </li>
                )}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Summary stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {[
          { value: "3", label: "Organisations" },
          { value: "16", label: "Features shipped" },
          { value: "8", label: "Tech domains" },
          { value: "15", label: "Months of growth" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-white/8 bg-white/[0.03] p-5 text-center"
          >
            <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
            <div className="text-xs text-white/40">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
