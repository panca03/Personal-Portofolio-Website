import { assets, experience } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = ({ isDarkMode }) => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const handleToggle = () => {
    const willShowAll = !showAll;
    setShowAll(willShowAll);

    setTimeout(() => {
      if (containerRef.current) {
        const top =
          containerRef.current.getBoundingClientRect().top + window.scrollY;

        if (window.innerWidth < 768) {
          if (willShowAll) {
            const containerHeight = containerRef.current.offsetHeight;
            window.scrollTo({
              top: top + containerHeight - 740,
              behavior: 'smooth',
            });
          } else {
            window.scrollTo({
              top: top + 420,
              behavior: 'smooth',
            });
          }
        } else {
          if (willShowAll) {
            window.scrollTo({ top: top + 130, behavior: 'smooth' });
          } else {
            containerRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }
    }, 100);
  };

  const visibleExperiences = showAll ? experience : experience.slice(0, 3);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experience"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl font-ovo"
      >
        Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Here are some of the experiences I had during my time in Computer
        Engineering at Syiah Kuala University.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10"
      >
        {visibleExperiences.map(
          ({ year, role, company, description, certificateUrl }, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer mb-8 flex flex-col justify-between hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-dark-hover dark:hover:shadow-white"
            >
              <div className="w-full">
                <h3 className="mb-2 font-semibold text-gray-700 dark:text-white">
                  {role} -{' '}
                  <span className="text-gray-600 text-sm dark:text-white/80">
                    {company}
                  </span>
                </h3>
                <p className="mb-2 text-gray-600 text-sm dark:text-white/80">
                  {year}
                </p>
              </div>

              <div className="w-full max-w-xl lg:w-3/4">
                <button
                  onClick={() =>
                    setSelectedExperience({
                      year,
                      role,
                      company,
                      description,
                      certificateUrl,
                    })
                  }
                  className="flex items-center gap-2 text-sm mt-5 text-gray-700 dark:text-white"
                >
                  Read More{' '}
                  <Image
                    src={assets.right_arrow}
                    alt="Read more"
                    className="w-4"
                  />
                </button>
              </div>
            </motion.div>
          )
        )}
      </motion.div>

      {experience.length > 3 && (
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          onClick={handleToggle}
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-light-hover duration-500 dark:text-white dark:border-white dark:hover:bg-dark-hover"
        >
          {showAll ? 'Show Less' : 'Show More'}
          <Image
            src={
              isDarkMode
                ? assets.right_arrow_bold_dark
                : assets.right_arrow_bold
            }
            alt="Right arrow"
            className={`w-4 transition-transform duration-300 ${
              showAll ? 'rotate-180' : ''
            }`}
          />
        </motion.button>
      )}

      <AnimatePresence>
        {selectedExperience && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-white dark:bg-dark-hover w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-2xl p-4 sm:p-6 rounded-xl shadow-xl relative scale-[0.95] sm:scale-100 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-2 right-4 sm:top-4 sm:right-6 text-3xl sm:text-4xl text-gray-700 dark:text-gray-200 hover:scale-110 transition-transform duration-200"
              >
                &times;
              </button>

              <motion.h3
                variants={itemVariants}
                className="mb-2 font-semibold text-gray-700 dark:text-white text-base sm:text-lg w-5/6"
              >
                {selectedExperience.role} -{' '}
                <span className="text-gray-600 text-xs sm:text-sm dark:text-white/80 ">
                  {selectedExperience.company}
                </span>
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-xs sm:text-sm text-gray-600 dark:text-white/80 mb-4"
              >
                {selectedExperience.year}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base text-gray-700 dark:text-white/90 leading-relaxed whitespace-pre-line"
              >
                {selectedExperience.description}
              </motion.p>

              {selectedExperience.certificateUrl && (
                <motion.a
                  href={selectedExperience.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-500 rounded-full text-xs sm:text-sm mt-4 dark:text-black dark:bg-white hover:bg-gray-100 transition"
                >
                  View Certificate
                  <Image
                    src={assets.right_arrow_bold}
                    alt=""
                    className="w-3 sm:w-4"
                  />
                </motion.a>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Experience;
