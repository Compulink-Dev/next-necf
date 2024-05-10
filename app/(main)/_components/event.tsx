import Button from "@/components/button";
import Image from "next/image";
import React from "react";

function Event() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-green-800 capitalize lg:text-3xl dark:text-white">
            Up Coming Events
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
              <Image
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="/"
                alt=""
                width={300}
                height={300}
              />

              <div className="flex flex-col justify-between items-center py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                >
                  How to use sticky note for problem solving
                </a>

                <Button name={"Register"} link={""} />
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 20 October 2019
                </span>
              </div>
            </div>

            <div className="lg:flex">
              <Image
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="/"
                alt=""
                width={300}
                height={300}
              />

              <div className="flex flex-col justify-between py-6 items-center lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                >
                  How to use sticky note for problem solving
                </a>
                <Button name={"Register"} link={""} />

                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 20 October 2019
                </span>
              </div>
            </div>

            <div className="lg:flex">
              <Image
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="/"
                alt=""
                width={300}
                height={300}
              />

              <div className="flex flex-col justify-between py-6 items-center lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                >
                  Morning routine to boost your mood
                </a>
                <Button name={"Register"} link={""} />

                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 25 November 2020
                </span>
              </div>
            </div>

            <div className="lg:flex">
              <Image
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="/"
                alt=""
                width={300}
                height={300}
              />

              <div className="flex flex-col justify-between py-6 items-center lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                >
                  All the features you want to know
                </a>
                <Button name={"Register"} link={""} />

                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 30 September 2020
                </span>
              </div>
            </div>

            <div className="lg:flex">
              <Image
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="/"
                alt=""
                width={300}
                height={300}
              />

              <div className="flex flex-col justify-between py-6 items-center lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                >
                  Minimal workspace for your inspirations
                </a>
                <Button name={"Register"} link={""} />

                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 13 October 2019
                </span>
              </div>
            </div>

            <div className="lg:flex">
              <Image
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="/"
                alt=""
                width={300}
                height={300}
              />

              <div className="flex flex-col justify-between py-6 items-center lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                >
                  What do you want to know about Blockchane
                </a>
                <Button name={"Register"} link={""} />

                <span className="text-sm text-gray-500 dark:text-gray-300">
                  On: 20 October 2019
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Event;
