import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../context/theme";
import Avatar from "../hero/avatar";

const Skill = () => {
  const { theme } = useContext(ThemeContext);

  const { ref, inView } = useInView({
    /* Optional options */
    rootMargin: "-100px",
    threshold: 0,
  });
  return (
    <div>
      <div className="overflow-hidden  inline-flex">
        <motion.h1
          initial={{ opacity: 0, y: 150 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{
            duration: 1,
          }}
          className={`
                                    text-2xl 
                                    font-bold
                                    my-4 
                                    text-center 
                                    md:text-left
                                    underline 
                                    underline-offset-8

                                   
                                    ${
                                      theme === "light"
                                        ? "text-blue-600 border-blue-600"
                                        : "text-[#FF0063] border-[#FF0063]"
                                    }`}
        >
          SKILLS {inView}
        </motion.h1>
      </div>
      <div ref={ref} className="w-full ">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
