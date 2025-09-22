"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

const Footer = () => {
  const t = useTranslations("footer")

  return (
    <footer className="bg-background dark:bg-slate-900 border-t border-border">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl text-foreground font-bold">{t("title")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t("description")}</p>
            <p className="text-sm text-muted-foreground">{t("copyright")}</p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground">{t("quick_links")}</h3>
            <ul className="space-y-2">
              {["home", "about", "courses", "contacts"].map((key) => (
                <li key={key}>
                  <motion.a
                    href={`/${key === "home" ? "" : key}`}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 block py-1"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t(`links.${key}`)}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground">{t("contact_info")}</h3>
            <div className="space-y-3">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <a
                  href={`mailto:${t("email")}`}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {t("email")}
                </a>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <a
                  href={`tel:${t("phone")}`}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {t("phone")}
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground">{t("follow_us")}</h3>
            <div className="flex gap-3">
              {[
                { name: "Facebook", icon: "f", url: "#" },
                { name: "Instagram", icon: "ig", url: "#" },
                { name: "Twitter", icon: "tw", url: "#" },
                { name: "YouTube", icon: "yt", url: "#" },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-gradient-to-r hover:from-[#0B95CE] hover:to-[#6440fb] text-muted-foreground hover:text-primary-foreground transition-all duration-300 flex items-center justify-center text-sm font-medium"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={social.name}
                >
                  {social.icon === "f" && "f"}
                  {social.icon === "ig" && (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                  )}
                  {social.icon === "tw" && (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Z"></path>
                    </svg>
                  )}
                  {social.icon === "yt" && (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Z"></path>
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">{t("stay_connected")}</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
