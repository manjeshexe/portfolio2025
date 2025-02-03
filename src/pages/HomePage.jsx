import React, { useContext } from "react";
import {
  About,
  Contact,
  Footer,
  Header,
  HeroTwo,
  Model,
  Project,
  UpArrow,
} from "../components";
import { ModelContext } from "../context/model";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import AnimateAura from "../utils/AnimateAura";

const HomePage = () => {
  const { toggleModel } = useContext(ModelContext);

  return (
    <>
      <div className="h-full relative z-10 w-full px-8 md:px-0 md:max-w-[1000px] mx-auto">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="fixed top-0 left-0 right-0 -z-50">
          <AnimateAura />
        </div>
        <Header />
        <HeroTwo />
        <About />
        <Project />
        <Contact />

        <AnimatePresence>{toggleModel && <Model />}</AnimatePresence>
      </div>
      <div className="w-full ">
        <Footer />
        <div className="fixed bottom-0 right-0 z-50">
          <UpArrow />
        </div>
      </div>
    </>
  );
};

export default HomePage;
