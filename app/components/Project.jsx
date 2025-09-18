import { assets, workData, Github, ExternalLink } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Project = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="project"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl font-ovo"
      >
        My Project
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Here are some projects I’ve worked on to sharpen my skills.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-3 my-10 gap-8 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            style={{
              backgroundImage: `url(${
                isDarkMode ? project.bgImageDark : project.bgImageLight
              })`,
            }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="flex items-center justify-between bg-white dark:bg-dark-hover dark:text-white  w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700 dark:text-white/80 truncate max-w-[120px]">
                  {project.description}
                </p>
              </div>
              <div
                onClick={() => setSelectedProject(project)}
                className="border border-black rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] group-hover:bg-lime-300 transition"
              >
                <Image
                  src={isDarkMode ? assets.send_icon_white : assets.send_icon}
                  alt=""
                  className="w-5"
                />
              </div>
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                 className="relative w-[95%] sm:w-[90%] md:w-[80%] max-w-2xl bg-white dark:bg-dark-hover text-black dark:text-white rounded-xl sm:rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 text-black dark:text-white text-xl font-bold bg-white/80 dark:bg-black hover:bg-white dark:hover:bg-[#2a2a2a] rounded-full w-8 h-8 flex items-center justify-center"
                  aria-label="Close modal"
                >
                  ✕
                </button>

                <Swiper
                  modules={[Pagination]}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  className="w-full h-[200px] sm:h-[260px] md:h-[320px]"
                >
                  {selectedProject.gallery?.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`Slide ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <motion.div
                  variants={textContainer}
                  initial="hidden"
                  animate="show"
                  className="p-6 "
                >
                  <motion.div variants={textItem} className="flex items-center justify-between">
                    <motion.h2 variants={textItem} className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-white">
                      {selectedProject.title}
                    </motion.h2>

                    <motion.div variants={textItem} className="flex space-x-2">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300"
                      >
                        <Github />
                      </a>

                      <a
                        href={selectedProject.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300"
                      >
                        <ExternalLink />
                      </a>
                    </motion.div>
                  </motion.div>

                  <motion.div variants={textItem} className="flex flex-wrap gap-4 mt-2">
                    {selectedProject.techIcons?.map((icon, idx) => (
                      <Image
                        key={idx}
                        src={icon}
                        alt={selectedProject.techStack[idx]}
                        title={selectedProject.techStack[idx]}
                        width={24}
                        height={24}
                        className="md:hidden"
                      />
                    ))}

                    {selectedProject.techStack?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="hidden md:inline-block px-3 py-1 border-0 sm:border border-gray-400 dark:border-white rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  <motion.p variants={textItem} className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 dark:text-white/80">
                    {selectedProject.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-light-hover duration-500 dark:text-white dark:border-white dark:hover:bg-dark-hover"
      >
        Show More{' '}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Right arrow"
          className="w-4"
        />{' '}
      </motion.a> */}
    </motion.div>
  );
};

export default Project;
