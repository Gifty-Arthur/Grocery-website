/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import CountUp from "react-countup";
import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

// images
import num1 from "../../assets/categories/num1.png";
import SubNumbers from "./SubNumbers";

const CounterPage = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      <Numbers counterOn={counterOn} setCounterOn={setCounterOn} />
    </div>
  );
};

function Numbers({ counterOn, setCounterOn }) {
  return (
    <div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="relative mt-20 hidden  sm:flex md:flex lg:flex">
          <img className="w-full md:mt-0 mt-20" src={num1} alt="" />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
            {/* one */}6
            <div className="md:flex md:flex-row md:gap-6 container">
              <div className="md:w-[312px] md:h-[174px] bg-[#121d18] w-[200px] h-[89px] ">
                <div className="flex items-center justify-center flex-col mt-8">
                  <h1 className="md:text-[56px] text-primary md:mt-0 mt-5 ">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={37}
                        duration={3}
                        delay={0}
                        suffix="+"
                      />
                    )}
                  </h1>
                  <p className="text-md text-white">Years of Hard work</p>
                </div>
              </div>
              {/* 2nd */}
              <div className="md:w-[312px] md:h-[174px] bg-[#121d18] w-[200px] h-[89px]">
                <div className="flex items-center justify-center flex-col mt-8">
                  <h1 className="text-[56px] text-primary">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={500}
                        duration={3}
                        delay={0}
                        suffix="K+"
                      />
                    )}
                  </h1>
                  <p className="text-md text-white">Years of Hard work</p>
                </div>
              </div>
              {/* 3rd */}
              <div className="md:w-[312px] md:h-[174px] bg-[#121d18] w-[200px] h-[89px]">
                <div className="flex items-center justify-center flex-col mt-8">
                  <h1 className="md:text-[56px] text-primary">
                    {counterOn && (
                      <CountUp start={0} end={80} duration={3} delay={0} />
                    )}
                  </h1>
                  <p className="text-md text-white">Years of Hard work</p>
                </div>
              </div>
              {/* 4th */}
              <div className="md:w-[312px] md:h-[174px] bg-[#121d18] w-[200px] h-[89px]">
                <div className="flex items-center justify-center flex-col mt-8">
                  <h1 className="md:text-[56px] text-primary">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={750}
                        duration={3}
                        delay={0}
                        suffix="K+"
                      />
                    )}
                  </h1>
                  <p className="text-md text-white">Years of Hard work</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="flex sm:hidden bg-[#001109] mt-10">
          <div className="container mt-10">
            <div className=" flex flex-row gap-8">
              {/* mone */}
              <div className="w-[150px] h-[174px] bg-[#121d18]">
                <div className="flex items-center justify-center flex-col mt-8">
                  <h1 className="text-[29px] text-primary mt-10">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={37}
                        duration={3}
                        delay={0}
                        suffix="K+"
                      />
                    )}
                  </h1>
                  <p className="text-md text-white">Years of Hard work</p>
                </div>
              </div>
              {/* mtwo */}
              <div className="w-[150px] h-[174px] bg-[#121d18]">
                <div className="flex items-center justify-center flex-col mt-8">
                  <h1 className="text-[29px] text-primary mt-10">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={500}
                        duration={3}
                        delay={0}
                        suffix="K"
                      />
                    )}
                  </h1>
                  <p className="text-md text-white">Happy Customer</p>
                </div>
              </div>
            </div>
            {/* three */}
            <div className="flex flex-row gap-6  mt-8">
              <div className="w-[150px] h-[174px] bg-[#121d18]">
                <div className="flex items-center justify-center flex-col mt-8">
                  <h1 className="text-[29px] text-primary mt-10">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={28}
                        duration={3}
                        delay={0}
                        suffix=""
                      />
                    )}
                  </h1>
                  <p className="text-md text-white text-center">
                    {" "}
                    Team Member Qualified{" "}
                  </p>
                </div>
                {/* fourth */}
              </div>
              <div className="w-[150px] h-[174px] bg-[#121d18]">
                <div className="flex items-center justify-center flex-col mt-8">
                  <h1 className="text-[29px] text-primary mt-10">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={750}
                        duration={3}
                        delay={0}
                        suffix="K+"
                      />
                    )}
                  </h1>
                  <p className="text-md text-white">Monthly Orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>

      {/* subNumbers */}
      <SubNumbers />
    </div>
  );
}

export default CounterPage;
