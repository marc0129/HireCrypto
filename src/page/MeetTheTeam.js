import React from "react";

import Personimg1 from "../assets/images/person1.png";
import Personimg2 from "../assets/images/person2.png";
import Personimg3 from "../assets/images/person3.png";

const MeetTheTeam = () => {
  return (
    <div>
      <div className=" w-full bg-[#385d94]" id="MeetTheTeam">
        <div className="w-full text-center font-bold font-sans text-white text-[38px] 2xl:text-[45px] pt-[105px] pb-4">
          Meet the Team
        </div>
        <div className="w-full grid lg:grid-cols-3 mb-4">
          <div className=" w-full flex justify-center">
            <div>
              <img
                src={Personimg1}
                alt="personimage1"
                className="px-[45px]"
              />
              <div className="flex justify-center">
                <a
                  href={"https://www.linkedin.com/in/jessenortman/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="flex shrink-0   px-4 py-1  font-semibold border border-transparent hover:border-gray-200 text-[15px] md:text-[20px] text-white active:text-red-600 bg-[#172036] hover:bg-transparent rounded-md mb-5">
                    LinkedIn
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div>
              <img
                src={Personimg3}
                alt="personimage3"
                className="px-[45px]"
              />
              <div className="flex justify-center">
                <a
                  href={"https://www.linkedin.com/in/jeffnortman"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="flex shrink-0   px-4 py-1  font-semibold border border-transparent hover:border-gray-200 text-[15px] md:text-[20px] text-white active:text-red-600 bg-[#172036] hover:bg-transparent rounded-md mb-5">
                    LinkedIn
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div>
              <img
                src={Personimg2}
                alt="personimage2"
                className="px-[45px]"
              />
              <div className="flex justify-center">
                <a
                  href={"https://www.linkedin.com/in/ryanbrutschin/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="flex shrink-0   px-4 py-1  font-semibold border border-transparent hover:border-gray-200 text-[15px] md:text-[20px] text-white active:text-red-600 bg-[#172036] hover:bg-transparent rounded-md mb-5">
                    LinkedIn
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center px-[45px] md:px-[96px] font-sans text-white text-[20px] 2xl:text-[25px] pb-24 ">
          Meet the founders of HireCrypto! Jesse Nortman, Jeffrey Nortman, and Ryan Brutschin are leaders within the career fair industry and have experience running the #1 virtual career fair company in technology --- HireTalent & HiredVirtual. We organize and manage premium career fairs across the country each year connecting employers with alumni who are looking for new jobs and career opportunities. We are looking to take our experience and clients over to web3 to build the recruiting platform of tomorrow!
        </div>
      </div>
    </div>
  );
};
export { MeetTheTeam };
