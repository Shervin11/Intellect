"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MapPinIcon, PhoneIcon, MailIcon } from "lucide-react";
import LocationModal from "@/components/location-madal";
import { useTranslations } from "next-intl";
import { intellectLocations as rawIntellectLocations } from "@/lib/data";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type Location = {
  id: number;
  name: string;
  address: string;
  addressKey: string;
  phone: string;
  email: string;
  workingHours: string;
  workingHoursKey: string;
  bgColorClass: string;
  darkBgColorClass: string;
  darkIconColorClass: string;
  iconColorClass: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

export default function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const t = useTranslations();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const intellectLocations = rawIntellectLocations.map((loc) => ({
    ...loc,
    address: t(loc.addressKey),
    workingHours: t(loc.workingHoursKey),
  }));

  const openLocationModal = (location: Location) => {
    setSelectedLocation(location);
    setIsModalOpen(true);
  };

  const closeLocationModal = () => {
    setIsModalOpen(false);
    setSelectedLocation(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-16 px-6 md:px-10">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        style={{ scaleX }}
      />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-4xl relative mb-16"
      >
        <div className="relative bg-gradient-to-r from-[#0B95CE] via-[#4A90E2] to-[#6440fb] rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce delay-500"></div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-center font-serif relative z-10 text-white mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t("contact.title")}
          </motion.h1>

          <motion.p
            className="text-center text-white/90 text-lg md:text-xl relative z-10 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {t("contact.subtitle") ||
              "Свяжитесь с нами в любом из наших филиалов"}
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {intellectLocations.map((loc, index) => (
            <motion.div
              key={loc.id}
              variants={itemVariants}
              className="group relative bg-card/80 backdrop-blur-sm dark:bg-card/60 rounded-2xl p-8 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 border border-border/50 hover:border-[#0B95CE]/30 overflow-hidden"
              onClick={() => openLocationModal(loc)}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: `linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card))/0.8 100%)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B95CE]/5 via-transparent to-[#6440fb]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#0B95CE]/10 rounded-full blur-xl group-hover:bg-[#0B95CE]/20 transition-colors duration-300"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#0B95CE]/10 dark:bg-[#0B95CE]/20 rounded-xl group-hover:bg-[#0B95CE]/20 dark:group-hover:bg-[#0B95CE]/30 transition-colors duration-300">
                      <MapPinIcon className="w-6 h-6 text-[#0B95CE] dark:text-[#4A90E2]" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-foreground group-hover:text-[#0B95CE] transition-colors duration-300">
                      {loc.name}
                    </h3>
                  </div>
                  <div className="w-2 h-2 bg-[#0B95CE] rounded-full animate-pulse"></div>
                </div>

                <div className="space-y-4">
                  <motion.div
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    <div className="p-2 bg-[#0B95CE]/10 rounded-lg">
                      <PhoneIcon className="w-4 h-4 text-[#0B95CE]" />
                    </div>
                    <a
                      href={`tel:${loc.phone}`}
                      className="text-foreground hover:text-[#0B95CE] transition-colors duration-200 font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {loc.phone}
                    </a>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    <div className="p-2 bg-[#0B95CE]/10 rounded-lg">
                      <MailIcon className="w-4 h-4 text-[#0B95CE]" />
                    </div>
                    <a
                      href={`mailto:${loc.email}`}
                      className="text-foreground hover:text-[#0B95CE] transition-colors duration-200 font-medium truncate"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {loc.email}
                    </a>
                  </motion.div>
                </div>

                <motion.div
                  className="mt-6 pt-4 border-t border-border/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div className="text-sm text-muted-foreground group-hover:text-[#0B95CE] transition-colors duration-300 font-medium">
                    {t("contact.click_for_details") ||
                      "Нажмите для подробностей"}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <LocationModal
        isOpen={isModalOpen}
        onClose={closeLocationModal}
        location={selectedLocation}
      />
    </div>
  );
}
