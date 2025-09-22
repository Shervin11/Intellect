import { motion } from "motion/react"
import Image from "next/image"
import { Share2Icon, BookOpenIcon, UsersIcon, StarIcon } from "lucide-react"

interface Teacher {
  id: number
  name: string
  subject: string
  image: string
  courses?: number
  students?: number
  rating?: number
}

const TeacherCard = ({ teacher }: { teacher: Teacher }) => {
  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800"
      whileHover={{ scale: 1.03, y: -8 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 opacity-60" />

      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 50%)",
            "radial-gradient(circle at 40% 50%, #ec4899 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />

      <div className="relative h-72 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <Image
          src={teacher.image || "/placeholder.svg"}
          alt={teacher.name}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {teacher.rating && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1 shadow-lg"
          >
            <StarIcon className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{teacher.rating}</span>
          </motion.div>
        )}
      </div>

      <div className="relative p-6 space-y-4">
        <div className="text-center space-y-2">
          <motion.h3
            className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {teacher.name}
          </motion.h3>
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full">
            <p className="text-sm font-medium text-blue-700 dark:text-blue-300">{teacher.subject}</p>
          </div>
        </div>

        {(teacher.courses || teacher.students) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-6 pt-4 border-t border-gray-100 dark:border-gray-800"
          >
            {teacher.courses && (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <BookOpenIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{teacher.courses}</div>
                  <div className="text-xs">курсов</div>
                </div>
              </div>
            )}
            {teacher.students && (
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                  <UsersIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{teacher.students}</div>
                  <div className="text-xs">студентов</div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-600/95 via-blue-600/80 to-transparent p-6 text-white"
      >
        <div className="text-center space-y-2">
          <p className="text-sm font-medium">Узнать больше</p>
          <motion.div
            className="w-12 h-0.5 bg-white mx-auto rounded-full"
            initial={{ width: 0 }}
            whileHover={{ width: 48 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      <motion.button
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Поделиться"
      >
        <Share2Icon className="w-5 h-5" />
      </motion.button>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  )
}

export default TeacherCard
