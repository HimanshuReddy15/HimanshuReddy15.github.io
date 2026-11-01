"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@HimanshuReddy-15",
    href: "https://github.com/HimanshuReddy-15",
    desc: "Code, commits, and open-source contributions",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "himanshu-reddy-6b0872201",
    href: "https://www.linkedin.com/in/himanshu-reddy-6b0872201/",
    desc: "Professional profile and work experience",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "m.himanshureddy@gmail.com",
    href: "mailto:m.himanshureddy@gmail.com",
    desc: "Best way to reach me for opportunities",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  return (
    <section className="min-h-[calc(100vh-7rem)] px-6 py-16 max-w-3xl mx-auto flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-3">contact</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Let&apos;s build{" "}
          <span className="text-white/30">something.</span>
        </h1>
        <p className="text-white/50 text-base max-w-md leading-relaxed">
          I&apos;m always open to interesting problems — whether that&apos;s AI systems, full-stack
          platforms, or something at the intersection of tech and impact.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.label}
              variants={itemVariants}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              whileHover={{ x: 4 }}
              className="group flex items-center gap-5 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.07] p-5 transition-colors duration-200"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                <Icon size={20} className="text-white/60 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white text-sm">{link.label}</span>
                  <ArrowUpRight
                    size={13}
                    className="text-white/20 group-hover:text-white/60 transition-colors"
                  />
                </div>
                <p className="text-xs text-white/40 mt-0.5 truncate">{link.handle}</p>
                <p className="text-xs text-white/25 mt-0.5 hidden sm:block">{link.desc}</p>
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-12 p-5 rounded-2xl border border-white/8 bg-white/[0.02]"
      >
        <p className="text-sm text-white/40 leading-relaxed">
          Currently based in India. Open to remote and hybrid roles in{" "}
          <span className="text-white/60">full-stack engineering</span>,{" "}
          <span className="text-white/60">AI/ML systems</span>, or{" "}
          <span className="text-white/60">climate / impact tech</span>.
        </p>
      </motion.div>
    </section>
  );
}
