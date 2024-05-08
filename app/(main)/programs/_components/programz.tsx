import Image from "next/image";
import React from "react";

function Programz() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-4">
        <div className="col-span-1 md:col-span-2 mx-4 gap-10">
          <div className="border border-green-600 shadow-lg">
            <Image
              src={"/pipo.jpg"}
              alt=""
              height={500}
              width={600}
              className="w-[90%] h-full mx-auto mt-10"
            />
            <div className="m-10">
              <h1 className="text-3xl font-semibold text-green-600">
                ANNUAL NATIONAL AGRI-BUSINESS CONFERENCE (ANAC)
              </h1>
              <p>
                In partnership with the Zimbabwe Agricultural Society (ZAS), the
                NECF holds the Annual National Agribusiness Conference (ANAC) at
                the Zimbabwe Agricultural Show Grounds during the Agricultural
                Show Week in August of every year. The conference is a dialogue
                platform and a business networking environment that gives
                economic players an opportunity to discuss pertinent
                agribusiness issues.
              </p>
              <button className="bg-green-600 text-white uppercase my-4 p-2 hover:bg-green-950">
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-4 bg-green-200 m-4 md:mt-0 ">
            <input
              name="name"
              type="text"
              placeholder="Search"
              className="p-3 rounded-sm w-[94%] mx-auto outline-none mt-4"
            />
            <button className="w-[94%] bg-green-600 text-center text-white mx-auto p-2 mb-4">
              Search
            </button>
          </div>

          <div className="flex flex-col gap-4 bg-green-200 m-4 md:mt-0 ">
            <h1 className="text-2xl font-semibold ml-3 mt-4">Category</h1>
            <hr className="w-[94%] mx-auto mb-4 bg-gray-900 py-[0.5px]" />
          </div>

          <div className="flex flex-col gap-4 bg-green-200 m-4 md:mt-0 ">
            <h1 className="text-2xl font-semibold ml-3 mt-4">Recent Posts</h1>
            <hr className="w-[94%] mx-auto mb-4 bg-gray-900 py-[0.5px]" />
          </div>
          <div className="flex flex-col gap-4 bg-green-200 m-4 md:mt-0 ">
            <h1 className="text-2xl font-semibold ml-3 mt-4">NewsLetter</h1>
            <hr className="w-[94%] mx-auto mb-4 bg-gray-900 py-[0.5px]" />
            <input
              name="email"
              type="email"
              placeholder="email"
              className="p-3 rounded-sm w-[94%] mx-auto outline-none mt-4"
            />
            <button className="w-[94%] bg-green-600 text-center text-white mx-auto p-2 mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6 mx-4">
        <div className="col-span-1   gap-10">
          <div className="border border-green-600 shadow-lg">
            <Image
              src={"/program1.jpg"}
              alt=""
              height={500}
              width={600}
              className="w-[90%] h-80 mx-auto mt-10 object-cover"
            />
            <div className="m-10 md:h-80">
              <h1 className="text-xl font-semibold text-green-600">
                NATIONAL ECONOMIC SYMPOSIUM (NES)
              </h1>
              <p className="h-40">
                The NES is hosted by the NECF in the last quarter of the year.
                It is a comprehensive stakeholder consultative process for the
                purpose of feeding input into the National Budget of the
                following year.
              </p>
              <button className="bg-green-600 text-white uppercase my-4 p-2 hover:bg-green-950">
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1  gap-10">
          <div className="border border-green-600 shadow-lg">
            <Image
              src={"/necf3.jpg"}
              alt=""
              height={500}
              width={600}
              className="w-[90%]  h-80 mx-auto mt-10 object-cover"
            />
            <div className="m-10">
              <h1 className="text-xl font-semibold text-green-600">
                THE INFRASTRUCTURE SUMMIT AND EXPO (ISE)
              </h1>
              <p>
                The Annual Infrastructure Summit and Expo is a high-level
                dialogue platform that seek ways of putting into practice known
                and novel ways of dealing with the country’s enduring
                infrastructure bottlenecks as a means to catapult the nation
                into the Upper Middle-Income Economy envisaged in Vision 2030.
                The first edition was held on 8-9 September 2022 at the Elephant
                Hills Resort, Victoria Falls. The next instalment is scheduled
                to be held during the second quarter of 2023
              </p>
              <button className="bg-green-600 text-white uppercase my-4 p-2 hover:bg-green-950">
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1   gap-10">
          <div className="border border-green-600 shadow-lg">
            <Image
              src={"/program3.jpg"}
              alt=""
              height={500}
              width={600}
              className="w-[90%] h-80 mx-auto mt-10 object-cover"
            />
            <div className="m-10 ">
              <h1 className="text-xl font-semibold text-green-600">
                INTERNATIONAL BUSINESS CONFERENCE (IBC)
              </h1>
              <p className="h-">
                The NECF hosts the International Business Conference in
                partnership with the Zimbabwe International Trade Fair Company
                (ZITF) on a Wednesday of the Trade Fair Week. The Conference is
                held at the end of the year’s first quarter and has become
                Zimbabwe’s largest business forum for both public and private
                sector decision makers. The high-level conference brings
                together policy makers, both local and international captains of
                industry and commerce, indigenous entrepreneurs, academics and
                business leaders who have a vested interest in positively
                contributing to the economic discourse and development of the
                country.
              </p>
              <button className="bg-green-600 text-white uppercase my-4 p-2 hover:bg-green-950">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Programz;
