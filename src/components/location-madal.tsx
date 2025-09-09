"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react"

const customIcon = new L.Icon({
  iconUrl:
    "data:image/svg+xml;base64," +
    btoa(`
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#0B95CE" stroke="white" strokeWidth="4"/>
      <circle cx="16" cy="16" r="6" fill="white"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
})

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
})

const LocationModal = ({ isOpen, onClose, location }) => {
  const t = useTranslations()
  if (!location) return null

  const position = [location.coordinates.lat, location.coordinates.lng]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[800px] max-h-[90vh] p-0 overflow-hidden bg-gradient-to-br from-background via-background to-background/95 border-2 border-primary/20 flex flex-col">
        <DialogHeader className="relative p-4 sm:p-6 pb-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent flex items-center gap-2">
              <MapPin className="w-8 h-8 text-primary" />
              {location.name}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2 text-lg">
              {t("contact.branch_details")}
            </DialogDescription>
          </motion.div>
        </DialogHeader>

        <div className="p-4 sm:p-6 pt-2 overflow-y-auto flex-1">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50 hover:bg-card/80 transition-all duration-300"
              >
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground block">{t("contact.address")}</span>
                  <span className="text-muted-foreground">{location.address}</span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50 hover:bg-card/80 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground block">{t("contact.phone")}</span>
                  <a href={`tel:${location.phone}`} className="text-primary hover:text-primary/80 transition-colors">
                    {location.phone}
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50 hover:bg-card/80 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground block">{t("contact.email")}</span>
                  <a href={`mailto:${location.email}`} className="text-primary hover:text-primary/80 transition-colors">
                    {location.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50 hover:bg-card/80 transition-all duration-300"
              >
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground block">{t("contact.working_hours")}</span>
                  <span className="text-muted-foreground">{location.workingHours}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="h-[250px] sm:h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl relative group">
              {isOpen && (
                <MapContainer
                  center={position}
                  zoom={15}
                  scrollWheelZoom={true}
                  className="h-full w-full"
                  style={{ filter: "hue-rotate(10deg) saturate(1.1)" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position} icon={customIcon}>
                    <Popup className="custom-popup">
                      <div className="p-2 text-center">
                        <h3 className="font-bold text-primary">{location.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{location.address}</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`,
                    "_blank",
                  )
                }
                className="absolute bottom-4 right-4 z-20 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                <span className="hidden sm:inline text-sm font-medium">Navigate</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LocationModal
