import { useContext, useState } from "react";
import { BsGithub, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { RoughNotation } from "react-rough-notation";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../context/theme";
import { RiArrowRightSFill } from "react-icons/ri";
import { motion } from "framer-motion";

// const TextHighlightCircle = ({
//   show,
//   animationDuration,
//   text,
//   animationDelay,
// }) => {
//   return (
//     <>
//       <RoughNotation
//         type="circle"
//         strokeWidth={1}
//         color="yellow" //"#f50057"
//         animationDuration={animationDuration}
//         animationDelay={animationDelay}
//         show={show}
//       >
//         {text}
//       </RoughNotation>
//     </>
//   );
// };

// const TextHighlightUnderline = ({
//   show,
//   animationDuration,
//   text,
//   animationDelay,
// }) => {
//   return (
//     <>
//       <RoughNotation
//         type="underline"
//         strokeWidth={2}
//         color="yellow"
//         animationDuration={animationDuration}
//         animationDelay={animationDelay}
//         show={show}
//       >
//         {text}
//       </RoughNotation>
//     </>
//   );
// };

const SocialLink = ({ touch, animationDuration, name }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <RoughNotation
      type="box"
      strokeWidth={1}
      color={`${theme === "light" ? "#2664eb" : "#ff0062"}`}
      animationDuration={animationDuration}
      show={touch}
    >
      {name}
    </RoughNotation>
  );
};

export const Bio = () => {
  const { theme } = useContext(ThemeContext);

  const { ref, inView } = useInView({
    /* Optional options */
    rootMargin: "-100px",
    threshold: 0,
  });

  // const [show, setShow] = useState(false);
  // const [showJava, setShowJava] = useState(false);
  // const [showJs, setShowJs] = useState(false);
  const [touch, setTouch] = useState("");

  return (
    <div ref={ref} className="w-full mx-auto h-full mt-20 md:mt-0">
      <h2
        className={`border-b-2 text-md 
                                leading-6  text-2xl font-bold inline ${
                                  theme === "light"
                                    ? "text-blue-600 border-blue-600"
                                    : "text-[#FF0063] border-[#FF0063]"
                                }`}
      >
        BIO
      </h2>

      <div className="my-4 text-[#CDD7F6] py-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{
            duration: 1,
          }}
          className="flex space-x-6 py-2 md:text-justify items-start"
        >
          <h3 className="font-bold text-[18px] tracking-wide flex items-center justify-center">
            1996{" "}
            <span
              className={` ml-2 ${
                theme === "light"
                  ? "text-blue-600 border-blue-600"
                  : "text-[#FF0063] border-[#FF0063]"
              }`}
            >
              <RiArrowRightSFill size={15} />
            </span>
          </h3>
          <p className="text-[16px]">Born in Bokaro, India</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{
            duration: 2,
          }}
          className="flex space-x-6 py-2 items-start"
        >
          <h3 className="font-bold text-[18px] tracking-wide flex items-center justify-center">
            2018
            <span
              className={` ml-2  ${
                theme === "light"
                  ? "text-blue-600 border-blue-600"
                  : "text-[#FF0063] border-[#FF0063]"
              }`}
            >
              <RiArrowRightSFill size={15} />
            </span>
          </h3>
          <p className="text-[16px]">
            Core + advance{" "}
            {/* <TextHighlightUnderline
              show={inView}
              animationDuration={1000}
              animationDelay={2000}
              text="java foundation"
            /> */}
            java foundation from{" "}
            <span
              className={`${
                theme === "light"
                  ? "text-blue-600 border-blue-600"
                  : "text-[#FF0063] border-[#FF0063]"
              } font-bold`}
            >
              Naresh I Technology
            </span>
            , Hyderabad.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{
            duration: 3,
          }}
          className="flex space-x-6 py-2 items-start"
        >
          <h3 className="font-bold text-[18px] tracking-wide flex items-center justify-center">
            2019{" "}
            <span
              className={` ml-2  ${
                theme === "light"
                  ? "text-blue-600 border-blue-600"
                  : "text-[#FF0063] border-[#FF0063]"
              }`}
            >
              <RiArrowRightSFill size={15} />
            </span>
          </h3>
          <p className="text-[16px]">
            Completed the Undergrad&apos;s Program in the{" "}
            {/* <TextHighlightUnderline
              show={inView}
              animationDuration={1000}
              animationDelay={1500}
              text="Computer Science & Engineering"
            /> */}
            Computer Science & Engineering at{" "}
            <span
              className={`${
                theme === "light"
                  ? "text-blue-600 border-blue-600"
                  : "text-[#FF0063] border-[#FF0063]"
              } font-bold`}
            >
              Vinoba Bhave University
            </span>{" "}
            (Guru Gobind Singh Educational Society&apos;s Technical Campus).
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{
            duration: 4,
          }}
          className="flex space-x-6 py-2 items-start"
        >
          <h3 className="font-bold text-[18px] tracking-wide flex items-center justify-center">
            2020
            <span
              className={` ml-2  ${
                theme === "light"
                  ? "text-blue-600 border-blue-600"
                  : "text-[#FF0063] border-[#FF0063]"
              }`}
            >
              <RiArrowRightSFill size={15} />
            </span>
          </h3>
          <p className="text-[16px]">
            {/* <TextHighlightCircle
              show={inView}
              animationDelay={2500}
              animationDuration={2800}
              text="Javascript bootcamp"
            /> */}
            Javascript bootcamp at{" "}
            <span
              className={` font-bold ${
                theme === "light"
                  ? "text-blue-600 border-blue-600"
                  : "text-[#FF0063] border-[#FF0063]"
              }`}
            >
              Zero to Mastery Academy
            </span>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{
            duration: 4,
          }}
          className="flex space-x-6 py-2 items-start"
        >
          <h3 className="font-bold text-[18px] tracking-wide flex items-center justify-center">
            2022
            <span
              className={`ml-2  ${
                theme === "light"
                  ? "text-blue-600 border-blue-600"
                  : "text-[#FF0063] border-[#FF0063]"
              }`}
            >
              <RiArrowRightSFill size={15} />
            </span>
          </h3>
          <p className="text-[16px]">
            Worked at{" "}
            <span
              className={`font-bold ${
                theme === "light"
                  ? "text-blue-600 border-blue-600"
                  : "text-[#FF0063] border-[#FF0063]"
              }`}
            >
              Luxeveda Brand & Tech Pvt. Ltd.
            </span>
          </p>
        </motion.div>
      </div>

      <div>
        <h2
          className={`border-b-4 border-white-300 ${
            theme === "light"
              ? "text-blue-600 border-blue-600"
              : "text-[#FF0063] border-[#FF0063]"
          } text-2xl font-bold inline`}
        >
          I love
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{
            duration: 4,
          }}
          className="my-4 py-4"
        >
          <p className="text-[18px] text-[#CDD7F6] tracking-wide">
            Cooking, Design, Games, Anime, Football
          </p>
        </motion.div>
        <h2
          className={`border-b-4 border-white-300 ${
            theme === "light"
              ? "text-blue-600 border-blue-600"
              : "text-[#FF0063] border-[#FF0063]"
          } text-2xl font-bold inline`}
        >
          On the web
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{
            duration: 4,
          }}
          className="my-4 md:ml-4 ml-0  md:text-[18px] font-light w-fit"
        >
          <div className="flex flex-wrap">
            <a
              href="https://github.com/mkhembrom"
              target="_blank"
              className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#CDD7F6]"
              onMouseEnter={() => setTouch("github")}
              onMouseLeave={() => setTouch("")}
              rel="noreferrer"
            >
              <span className="">
                <BsGithub />
              </span>{" "}
              <span className="">
                <SocialLink
                  name="@mkhembrom"
                  touch={touch === "github" ? true : false}
                />
              </span>
            </a>
            <span className="font-bold px-4 text-[#CDD7F6]">/</span>
            <a
              href="https://github.com/manjeshexe"
              target="_blank"
              className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#CDD7F6]"
              onMouseEnter={() => setTouch("other")}
              onMouseLeave={() => setTouch("")}
              rel="noreferrer"
            >
              <span className="">
                <SocialLink
                  name="@manjeshexe"
                  touch={touch === "other" ? true : false}
                />
              </span>
            </a>
          </div>
          <a
            href="https://twitter.com/HembromManjesh"
            target="_blank"
            className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#CDD7F6]"
            onMouseEnter={() => setTouch("twitter")}
            onMouseLeave={() => setTouch("")}
            rel="noreferrer"
          >
            <BsTwitter />
            <span>
              <SocialLink
                name="@HembromManjesh"
                touch={touch === "twitter" ? true : false}
              />
            </span>
          </a>
          <a
            href="https://linkedin.com/in/manjesh-hembrom"
            target="_blank"
            className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#CDD7F6]"
            onMouseEnter={() => setTouch("linkedin")}
            onMouseLeave={() => setTouch("")}
            rel="noreferrer"
          >
            <BsLinkedin />
            <span>
              <SocialLink
                name="@manjesh-hembrom"
                touch={touch === "linkedin" ? true : false}
              />
            </span>
          </a>

          <a
            href="https://instagram.com/manjesh.hembrom"
            target="_blank"
            className="flex space-x-4 list-none items-center pb-2 cursor-pointer  font-bold text-[#CDD7F6]"
            onMouseEnter={() => setTouch("instagram")}
            onMouseLeave={() => setTouch("")}
            rel="noreferrer"
          >
            <BsInstagram />
            <span>
              <SocialLink
                name="@manjesh.hembrom"
                touch={touch === "instagram" ? true : false}
              />
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
