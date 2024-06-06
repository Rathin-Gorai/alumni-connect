"use client";
import { Crousel, Faq, Home1 } from "@/components";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="bg-white pt-4 lg:pt-16 relative lg:ml-5 pb-20 lg:pb-10 ">
        <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
          <motion.h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl "
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            An Initiative towards a<br className="lg:block hidden" />{" "}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 ">
              Skilled Future
            </span>
            .
          </motion.h1>
          <motion.div className="lg:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn", delay: 1 }}
          >
            <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
              <motion.p className="sm:text-lg text-gray-700  lg:w-11/12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.7 }}
              >
                In the era of digital connectivity, social media platforms have
                become integral to our daily lives, offering avenues for
                communication, networking, and collaboration. Recognizing the
                need for a tailored solution within the educational ecosystem,
                this project aims to develop a specialized social media
                application for a college/educational organization
              </motion.p>
              <motion.span className="block font-semibold text-gray-500 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.7 }}
              >
                And this is exactly where we play our part.
              </motion.span>

              <motion.p className="sm:text-lg text-gray-700  lg:w-10/12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.7 }}
              >
                The primary objective of this social media platform is to create
                a virtual space where MITM students can interact, exchange
                knowledge, and collaborate on academic and professional
                endeavors. By fostering a supportive online community, the
                application aims to enhance students' academic experiences,
                foster interdisciplinary collaboration, and strengthen the sense
                of camaraderie within the college. Through this platform, we aim
                to demonstrate the practical application of cutting-edge web
                development tools and techniques in addressing real-world
                challenges faced by educational institutions. Additionally, the
                project endeavors to contribute towards the holistic development
                and empowerment of students by providing them with a platform to
                harness their collective potential and facilitate their
                professional growth.
              </motion.p>
              <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                <Link
                  aria-label="add to slack"
                  href="#"
                  className="p-4 border border-gray-200  rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 "
                >
                  <div className="flex justify-center space-x-4">
                    <img
                      className="w-6 h-6"
                      src="https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png"
                      alt="slack logo"
                      loading="lazy"
                      width={128}
                      height={128}
                    />
                    <span className="hidden font-medium md:block ">Slack</span>
                  </div>
                </Link>
                <Link
                  aria-label="add to chat"
                  href="#"
                  className="p-4 border border-gray-200 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 "
                >
                  <div className="flex justify-center space-x-4">
                    <img
                      className="w-6 h-6"
                      src="https://tailus.io/sources/blocks/tech-startup/preview/images/chat.png"
                      alt="chat logo"
                      loading="lazy"
                      width={128}
                      height={128}
                    />
                    <span className="hidden font-medium md:block ">
                      Google Chat
                    </span>
                  </div>
                </Link>
                <Link
                  aria-label="add to zoom"
                  href="#"
                  className="p-4 border border-gray-200  rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 "
                >
                  <div className="flex justify-center space-x-4">
                    <img
                      className="w-6 h-6"
                      src="https://tailus.io/sources/blocks/tech-startup/preview/images/zoom.png"
                      alt="chat logo"
                      loading="lazy"
                      width={128}
                      height={128}
                    />
                    <span className="hidden font-medium md:block ">Zoom</span>
                  </div>
                </Link>
              </div>
              <div className="flex">
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }}
                >🔥</motion.div>
                <motion.div
                  whileHover={{ scale: 1.8 }}
                  onHoverStart={e => { }}
                  onHoverEnd={e => { }}
                >🌟</motion.div>
                <span>Other integrations :</span>
                <Link href="#" className="font-semibold text-gray-700 ">
                  Discord,
                </Link>
                <Link href="#" className="font-semibold text-gray-700 ">
                  Telegram
                </Link>
              </div>
              <div className="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/airbnb.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt=""
                />
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/ge.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt=""
                />
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/coty.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt=""
                />
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/microsoft.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-12 md:mt-0 lg:absolute-right-10 lg:w-7/12 md:order-last order-first">
              <div className="relative w-full">
                <div
                  aria-hidden="true"
                  className="absolute scale-75 md:scale-100 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
                />
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg"
                  className="relative w-full lg:w-[90%]"
                  alt="wath illustration"
                  loading="lazy"
                  width={320}
                  height={280}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Home1 />
      <Crousel />
      <Faq />
    </>
  );
}
