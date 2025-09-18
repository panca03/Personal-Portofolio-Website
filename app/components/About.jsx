import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import { Marquee } from '@/components/ui/marquee';

const ToolCard = ({ icon, name }) => (
  <div className="flex items-center gap-2  sm:gap-3 border-0 sm:border border-gray-400 dark:border-white px-1 sm:px-4 py-1.5 sm:py-2 rounded-lg cursor-pointer min-w-fit max-w-[160px]">
    <Image src={icon} alt={name} className="w-8 sm:w-6 h-auto object-contain" />
    <span className="hidden sm:inline text-xs sm:text-sm font-ovo text-gray-700 dark:text-white/80 truncate">
      {name}
    </span>
  </div>
);

const About = ({ isDarkMode }) => {
  const marqueeTools = [...toolsData, ...toolsData];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-3xl font-ovo"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-ovo">
            I enjoy the process of learning and building, especially when it
            comes to modern web technologies and intelligent systems. I believe
            in writing clean, efficient code and continuously improving through
            practice and feedback. Whether working independently or as part of a
            team, I strive to deliver thoughtful, user-focused solutions.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-dark-hover/50"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="mt-6  text-gray-700 font-ovo dark:text-white/80"
          >
            Tools I Use
          </motion.h4>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="overflow-hidden w-full max-w-[300px] sm:max-w-[670px] "
          >
            <Marquee reverse pauseOnHover className="[--duration:120s]">
              {marqueeTools.map((tool, index) => (
                <ToolCard
                  key={`tool-${index}`}
                  icon={tool.icon}
                  name={tool.name}
                />
              ))}
            </Marquee>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
