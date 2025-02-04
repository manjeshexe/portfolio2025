import React, { useContext, useEffect, useState } from "react";
import { projectData } from "../../data/projectData.js";
import { ThemeContext } from "../../context/theme";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Project = () => {
  const { theme } = useContext(ThemeContext);

  // const { ref, inView, entry } = useInView({
  //     threshold: 0
  // })

  // const [more, setMore] = useState(0);

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const [active, setActive] = useState("react");

  const [projectItem, setProjectItem] = useState([]);

  const [filterProject, setFilterProject] = useState([]);

  useEffect(() => {
    setProjectItem(projectData);
    const filterProjectData = projectData.slice(0, 8);
    setFilterProject(filterProjectData);
  }, []);

  const allProject = () => {
    const filtered = projectItem;
    setFilterProject(filtered);
    setActive("all");
  };
  const reactProject = () => {
    const filtered = projectItem.filter((item) => item.projectType === "react");
    setFilterProject(filtered);
    setActive("react");
  };
  const javascriptProject = () => {
    const filtered = projectItem.filter(
      (item) => item.projectType === "javascript"
    );
    setFilterProject(filtered);
    setActive("javascript");
  };
  const nuxtProject = () => {
    const filtered = projectItem.filter((item) => item.projectType === "vue");
    setFilterProject(filtered);
    setActive("vue");
  };
  const flutterProject = () => {
    const filtered = projectItem.filter(
      (item) => item.projectType === "flutter"
    );
    setFilterProject(filtered);
    setActive("flutter");
  };

  const projectBtn = [
    {
      name: "All",
      fun: allProject,
    },
    {
      name: "React",
      fun: reactProject,
    },
    {
      name: "Javascript",
      fun: javascriptProject,
    },
    {
      name: "Vue",
      fun: nuxtProject,
    },
    {
      name: "Flutter",
      fun: flutterProject,
    },
  ];

  useEffect(() => {}, [active]);

  return (
    <div className={"w-full mx-auto h-full "}>
      <div
        id="Project"
        className=" mx-auto w-full h-full min-h-screen pt-24 md:pb-16 px-4 md:px-0 relative"
      >
        <h2
          className={` text-2xl uppercase font-bold mb-10 underline underline-offset-8 ${
            theme === "light" ? "text-blue-600 " : "text-[#FF0063] "
          } `}
        >
          Projects
        </h2>
        <div className="flex md:items-center space-x-2 md:space-x-4 w-full justify-center flex-wrap">
          {projectBtn.map((item) => {
            return (
              <button
                key={item.name}
                onClick={item.fun}
                className={`border px-4 py-1 rounded-xl drop-shadow-lg mb-4 text-[#CDD7F6] ${
                  active === item.name.toLowerCase()
                    ? `${
                        theme === "light"
                          ? " border-blue-600 bg-blue-600 text-[#CDD7F6]"
                          : "border-[#FF0063] bg-[#FF0063] text-[#CDD7F6]"
                      }`
                    : ""
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <div
          className="
                    
                    h-full
                        grid 
                        grid-cols-1
                        sm:grid-cols-2
                        md:grid-cols-3
                        gap-4
                        my-16"
        >
          <AnimatePresence>
            {filterProject.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                  }}
                  layout
                  className="
                                cursor-pointer
                                rounded-xl 
                                h-[180px]
                                md:h-[230px] 
                                w-full 
                                drop-shadow-xl
                                flex 
                                items-center 
                                justify-center
                                overflow-hidden
                                group 
                                "
                >
                  <img
                    className="relative cursor-pointer object-cover w-full h-full  rounded-xl group-hover:blur-sm 	 transition-all"
                    src={item.picture}
                    alt={item.name}
                  />
                  <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black group-hover:opacity-75  transition-all flex items-center justify-center">
                    <h1 className="text-md group-hover:text-white group-hover:opacity-100 text-transparent pb-4">
                      {item.name.toUpperCase()}
                    </h1>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                    <motion.a
                      href={item.github}
                      target="_blank"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      className={
                        "text-md md:text-sm uppercase rounded-md px-4 py-1  text-transparent group-hover:text-white group-hover:border-2 " +
                        `${
                          theme === "light"
                            ? "hover:bg-blue-600 hover:border-blue-600"
                            : "hover:bg-[#FF0063] hover:border-[#FF0063]"
                        }`
                      }
                    >
                      code
                    </motion.a>
                    {item.link === "#" ? null : (
                      <motion.a
                        href={item.link}
                        target="_blank"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        className={
                          "text-md md:text-sm uppercase rounded-md px-4 py-1  text-transparent group-hover:text-white group-hover:border-2 " +
                          `${
                            theme === "light"
                              ? "hover:bg-blue-600 hover:border-blue-600"
                              : "hover:bg-[#FF0063] hover:border-[#FF0063]"
                          }`
                        }
                      >
                        Live
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center w-full "
          >
            <div className="flex flex-col items-center mt-16">
              <h1 className="text-2xl text-center py-4 text-[#CDD6F7]">
                Other Noteworthy Projects
              </h1>
              <Link
                to={"/archive"}
                onClick={scrollToTop}
                className={`text-md  relative before:absolute before:bottom-0 before:left-0 before:border-b before:border-tranasparent before:w-0 before:duration-300 before:hover:w-full before:transition-all transition-all  ${
                  theme === "light"
                    ? "text-blue-600  before:hover:border-blue-600"
                    : "text-[#FF0063]  before:hover:border-[#FF0063]"
                }`}
              >
                View the archive
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Project;
