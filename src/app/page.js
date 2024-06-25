import React from "react";
import { PiHouseLight, PiGithubLogoLight } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
function page() {
  return (
    <>
      <div className="p-5 fixed bottom-[50px] flex flex-col items-center justify-center mx-auto w-full">
        <div className="bg-neutral-600 rounded-full">
          <Image
            height={100}
            width={100}
            className="object-cover w-fit"
            src="/gaurav.jpeg"
            alt="gaurav"
          />
        </div>
        <h1 className="font-serif text-6xl text-center my-9 btn-shine rounded-sm">
          Gaurav Portfolio
        </h1>
        <p className="text-neutral-400 lg:max-[400px] lg:max-w-lg text-center">
          All features are done and code by gaurac, please usse this free mind ,
          rember{" "}
        </p>
      </div>
      <div className="flex justify-center">
        <div className="fixed bottom-7 flex border border-neutral-600 rounded-lg p-2 gap-x-5 text-neutral-500">
          <Link href={"/dashboard"}>
            <span>
              <PiHouseLight className="text-2xl" />
            </span>
          </Link>
          <span>
            <PiGithubLogoLight className="text-2xl" />
          </span>
        </div>
      </div>
    </>
  );
}
export default page;
