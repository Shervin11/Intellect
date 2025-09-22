"use client";

import React from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import logo from "@/assets/Screenshot_3.webp";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations();
  const [lang, setLang] = React.useState("");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky dark:bg-slate-900 top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <nav className="flex items-center py-4 px-4 max-w-[1300px] mx-auto justify-between">
        <Link href="/">
          <div className="flex items-center gap-5 hover:scale-105 transition-all duration-300">
            <Image
              src={logo || "/placeholder.svg"}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p className="bg-gradient-to-r from-[#0B95CE] to-[#6440fb] bg-clip-text text-transparent text-3xl">
              Intellect
            </p>
          </div>
        </Link>

        <div className="hidden md:flex justify-center items-center gap-6">
          <motion.ul
            className="flex gap-6 font-medium"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, staggerChildren: 0.1 }}
          >
            {[
              { href: "/courses", label: t("header.courses") },
              { href: "/about", label: t("header.about") },
              { href: "/contacts", label: t("header.contacts") },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={item.href}>
                  <li className="relative p-3 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:text-[#0B95CE] hover:cursor-pointer">
                    {item.label}
                  </li>
                </Link>
              </motion.div>
            ))}
          </motion.ul>

          <Select
            value={lang}
            onValueChange={(e) => {
              setLang(e);
              window.location.href = `/${e.toLowerCase()}`;
            }}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder={t("header.language")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="EN">EN</SelectItem>
              <SelectItem value="RU">RU</SelectItem>
              <SelectItem value="TJ">TJ</SelectItem>
            </SelectContent>
          </Select>

          <AnimatedThemeToggler />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <AnimatedThemeToggler />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t"
          >
            <div className="px-4 py-6 space-y-4">
              <motion.ul
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, staggerChildren: 0.1 }}
              >
                {[
                  { href: "/courses", label: t("header.courses") },
                  { href: "/about", label: t("header.about") },
                  { href: "/contacts", label: t("header.contacts") },
                ].map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 px-3 rounded-md hover:bg-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4 border-t"
              >
                <Select
                  value={lang}
                  onValueChange={(e) => {
                    setLang(e);
                    window.location.href = `/${e.toLowerCase()}`;
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("header.language")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EN">EN</SelectItem>
                    <SelectItem value="RU">RU</SelectItem>
                    <SelectItem value="TJ">TJ</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
