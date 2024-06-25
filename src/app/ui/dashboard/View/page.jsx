"use client";
import React from "react";
import { PiGithubLogoLight } from "react-icons/pi";
import { SiCss3, SiExpress, SiFramer, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNextui, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

import TestimonialTooltip from "@/app/TestimonialTooltip/page";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

function page() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="lg:block w-ful lg:w-fit hidden  max-xl:hidden "
    >
      <div className=" md:w-60 w-full rounded-2xl h-fit sticky top-5 ">
        <div>
          <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 h-fit">
            <h2 className="font-RubikBold text-neutral-200">
              Contact Me.
            </h2>
          
            <div className="flex items-start  mt-3 gap-x-2">
                <TestimonialTooltip />
              </div>

            <div className="border border-neutral-700 my-5" />

            <div className="text-neutral-400">
              <h1 className="font-RubikMedium text-neutral-200">Skills </h1>
              <div className="flex items-center gap-x-3 mt-2 hover:bg-neutral-800  p-2 rounded-md ">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <PiGithubLogoLight className="text-lg" />
                </div>
                <h3 className="text-xs ">
                  Git & Github
                </h3>
              </div>
              <div className="flex items-center gap-x-3 mt-2 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiJavascript className="text-lg" />
                </div>
                <h3 className="text-xs ">
                  Javscript
                </h3>
              </div>
              <div className="flex items-center gap-x-3 mt-2 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiHtml5 className="text-lg" />
                </div>
                <h3 className="text-xs ">HTML5</h3>
              </div>
              <div className="flex items-center gap-x-3 mt-2 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiCss3 className="text-lg" />
                </div>
                <h3 className="text-xs ">CSS3</h3>
              </div>
              <div className="flex items-center gap-x-3 mt-2 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiTailwindcss className="text-lg" />
                </div>
                <h3 className="text-xs ">Tailwindcss</h3>
              </div>
              <div className="flex items-center gap-x-3 mt-2 hover:bg-neutral-800  p-2 rounded-md">
                
                <h3 className="text-xs ">Java</h3>
              </div>
              <div className="flex items-center gap-x-3 mt-2 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiReact className="text-lg" />
                </div>
                <h3 className="text-xs ">Reactjs</h3>
              </div>
              <div className="flex items-center gap-x-3 mt-2 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiHtml5 className="text-lg" />
                </div>
                <h3 className="text-xs ">Redux</h3>
              </div>
              <div className="flex items-center gap-x-3 mt-2 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiNextui className="text-lg" />
                </div>

                <h3 className="text-xs ">Nextjs</h3>
              </div>
              <div className="flex items-center gap-x-3 mt-2 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiTypescript className="text-lg" />
                </div>
                <h3 className="text-xs ">TypeScript</h3>
              </div>
              <div className="flex items-center gap-x-3 mt-2 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiNodedotjs className="text-lg" />
                </div>
                <h3 className="text-xs ">Nodejs</h3>
              </div>
              <div className="flex items-center gap-x-3 mt-2 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiExpress className="text-lg" />
                </div>
                <h3 className="text-xs ">Express js</h3>
              </div>
              <div className="flex items-center gap-x-3 mt-2 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  
                </div>
                <h3 className="text-xs ">Rest API</h3>
              </div>
              <div className="flex items-center gap-x-3 mt-2 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiMongodb className="text-lg" />
                </div>
                <h3 className="text-xs ">Mongodb</h3>
              </div>
              <div className="flex items-center gap-x-3 mt-2 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiPostgresql className="text-lg" />
                </div>
                <h3 className="text-xs ">Postgressql</h3>
              </div>
              <div className="flex items-center gap-x-3 mt-2 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiMysql className="text-lg" />
                </div>
                <h3 className="text-xs ">Mysql</h3>
              </div>
              <div className="border border-neutral-700 my-5" />

            </div>
          </div>
        </div>

        {/* <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 mt-3 text-neutral-50">
          <Image
            width={1000}
            height={1000}
            className="h-32 w-56 object-cover rounded-lg"
            src="/gaurav.jepg"
            alt=""
          />
          <p className="my-3 font-RubikMedium text-sm">3D Games in Reactjs</p>
          <button className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-RubikMedium ">
            Get Now @20% OFF
          </button>
        </div> */}
      </div>
    </motion.div>
  );
}

export default page;