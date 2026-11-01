"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const roles = [
  "Backend Engineer",
  "Full-Stack Developer",
  "React Native Developer",
  "AI Feature Builder",
  "API & Infrastructure Engineer",
];

const floatingTech = [
  { label: "FastAPI", x: "8%", y: "22%", delay: 0 },
  { label: "asyncmy", x: "78%", y: "15%", delay: 0.3 },
  { label: "Shapely", x: "5%", y: "62%", delay: 0.6 },
  { label: "Redis", x: "84%", y: "58%", delay: 0.2 },
  { label: "Gemini", x: "18%", y: "78%", delay: 0.5 },
  { label: "AWS IAM", x: "68%", y: "80%", delay: 0.8 },
  { label: "React Native", x: "48%", y: "10%", delay: 0.4 },
  { label: "Next.js", x: "88%", y: "38%", delay: 0.7 },
];

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-7rem)] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Floating tech labels */}
      {floatingTech.map((t) => (
        <motion.div
          key={t.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.18, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: t.delay + 0.8, duration: 0.6 },
            scale: { delay: t.delay + 0.8, duration: 0.6 },
            y: { delay: t.delay + 1.2, duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute text-xs font-mono text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1 pointer-events-none select-none hidden md:block"
          style={{ left: t.x, top: t.y }}
        >
          {t.label}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/60 font-mono mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-4"
        >
          Himanshu
          <br />
          <span className="text-white/40">Reddy Mukkera</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl font-medium text-white/70 mb-6 h-8"
        >
          <Typewriter words={roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          15 months shipping production code — async backend migrations,
          geospatial matching engines, AI agent tooling, and React Native
          apps used by real students every day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/projects"
            className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 font-medium px-6 py-3 rounded-xl transition-all duration-200"
          >
            About Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          <a
            href="https://github.com/HimanshuReddy-15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/40 hover:text-white/80 text-sm transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <span className="text-white/20">·</span>
          <a
            href="https://www.linkedin.com/in/himanshu-reddy-6b0872201/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/40 hover:text-white/80 text-sm transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080c14] to-transparent pointer-events-none" />
    </section>
  );
}
