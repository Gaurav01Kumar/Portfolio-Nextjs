"use client";
import React from "react";
import Link from "next/link";
import { PiCodeThin } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
const page = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.6,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="w-full lg:w-fit"
    >
      <div className="bg-[#1c1c1c] lg:bg-transparent rounded-2xl">
        <div>
          <div className="flex gap-x-6 p-4">
            <PiCodeThin className="text-6xl text-neutral-600" />
            <div>
              <h1 className="text-2xl font-serif text-neutral-300">
                {" "}
                Gaurav ,
                <span className="text-sm text-neutral-400">
                  A Dev Blog or Project{" "}
                </span>
              </h1>
              <p className="max-w-sm text-neutral-400 text-sm">
                I design and code beautifully simple things , and occasionlay i
                write about them{" "}
              </p>
            </div>
          </div>
          <div className="border border-l-neutral-700 my-5" />
          <div className="bg-[#1c1c1c] rounded-lg text-neutral-400">
            <Link
              href={"https://github.com/Gaurav01Kumar/Hostpital-dashboard"}
              target="_blank"
            >
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <Image
                    width={100}
                    height={100}
                    src="/assi4.png"
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-500">
                      Hostpital Billing Dashboard
                    </h3>
                    <span className="text-sm">May 22 2024</span>
                    <h2 className="text-sm font-RubikMedium">
                      Build the hosiptal billing frontend ui in React and
                      Tailwind css.
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={"https://yaadgarpal.com"} target="_blank">
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <Image
                    width={100}
                    height={100}
                    src="/yaadgarpal.png"
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-500">
                      Event Booking Webapp{" "}
                    </h3>
                    <span className="text-sm">Apri 2024 - Present</span>
                    <h2 className="text-sm font-RubikMedium">
                      The event booking system successfully facilitated seamless
                      bookings and secure transactions for users. The seller and
                      admin dashboards significantly improved operational
                      efficiency, allowing for effective management of listings
                      and transactions.
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
            {/* without imag
             */}

         
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
