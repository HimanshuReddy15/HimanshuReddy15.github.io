"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Wrench,
  FolderOpen,
  Mail,
} from "lucide-react";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Skills", href: "/skills", icon: Wrench },
  { label: "Projects", href: "/projects", icon: FolderOpen },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function Dock() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 120 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-3 py-2 shadow-2xl">
        {navItems.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                  "relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors duration-200 group",
                  active
                    ? "bg-white/20 text-white"
                    : "text-white/50 hover:text-white"
                )}
              >
                {active && (
                  <motion.div
                    layoutId="dock-active"
                    className="absolute inset-0 bg-white/15 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon size={20} strokeWidth={active ? 2 : 1.5} />
                <span className="text-[10px] font-medium leading-none">
                  {item.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
