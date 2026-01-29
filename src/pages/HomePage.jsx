import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full space-y-6 px-10">
      <div className="h-10 w-full"></div>
      <section className="flex flex-col justify-center items-center space-y-10 my-20">
        <div className="px-4 py-2 border border-red-500 rounded-full cursor-pointer">
          {" "}
          <span className="mx-2">🚀</span> Never Miss a Contest Again
        </div>
        <h1 className="text-6xl font-extrabold">
          Your Ultimate{" "}
          <span className="bg-clip-text bg-linear-to-r from-red-600 via-gray-900 to-red-600 text-transparent">
            Coding Contest
          </span>{" "}
          Calendar
        </h1>
        <div className="text-gray-500 max-w-[50%] text-center">
          Track every competitive programming contest from Codeforces, LeetCode,
          and CodeChef. Get instant notifications, find solution videos, and
          never miss your chance to compete.
        </div>

        <div className="flex justify-center items-center space-x-7">
          <button
            className="text-white px-4 py-2 border border-gray-300 rounded-full bg-linear-to-r from-red-600 via-gray-700 to-red-600 cursor-pointer"
            onClick={() => navigate("contests")}
          >
            Explore Contests
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-full cursor-pointer">
            Learn More
          </button>
        </div>
      </section>
      <div className="h-10 w-full"></div>
      <section
        className="grid grid-cols-3 gap-4 max-w-[75%] mt-12 pt-7"
        id="features"
      >
        <div className="border border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center">
          <div className="flex justify-between max-w-[75%]">
            {" "}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
                className="mr-2"
              >
                <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
              </svg>{" "}
            </div>
            <div>Real-Time Updates</div>
          </div>
          <div className="mt-3 text-gray-500 text-center">
            Get instant updates on all upcoming contests across multiple
            platforms
          </div>
        </div>
        <div className="border border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center">
          <div className="flex justify-between max-w-[75%]">
            {" "}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
                className="mr-2"
              >
                <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
              </svg>{" "}
            </div>
            <div>Calendar Integration</div>
          </div>
          <div className="mt-3 text-gray-500 text-center">
            Add contests directly to your Google Calendar with one click
          </div>
        </div>
        <div className="border border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center">
          <div className="flex justify-between max-w-[75%]">
            {" "}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
                className="mr-2"
              >
                <path d="M616-242q-27 1-51.5 1.5t-43.5.5h-41q-71 0-133-2-53-2-104.5-5.5T168-257q-26-7-45-26t-26-45q-6-23-9.5-56T82-447q-2-36-2-73t2-73q2-30 5.5-63t9.5-56q7-26 26-45t45-26q23-6 74.5-9.5T347-798q62-2 133-2t133 2q53 2 104.5 5.5T792-783q26 7 45 26t26 45q6 23 9.5 56t5.5 63q2 36 2 73v17q-19-8-39-12.5t-41-4.5q-83 0-141.5 58.5T600-320q0 21 4 40.5t12 37.5ZM400-400l208-120-208-120v240Zm360 200v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
              </svg>{" "}
            </div>
            <div>Solution Videos</div>
          </div>
          <div className="mt-3 text-gray-500 text-center">
            Find editorial and solution videos from top creators instantly
          </div>
        </div>
        <div className="border border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center">
          <div className="flex justify-between max-w-[75%]">
            {" "}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
                className="mr-2"
              >
                <path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z" />
              </svg>{" "}
            </div>
            <div>Smart Filtering</div>
          </div>
          <div className="mt-3 text-gray-500 text-center">
            Filter by platform and customize your contest feed
          </div>
        </div>
        <div className="border border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center">
          <div className="flex justify-between max-w-[75%]">
            {" "}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
                className="mr-2"
              >
                <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-360Zm112 168 56-56-128-128v-184h-80v216l152 152ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Z" />
              </svg>{" "}
            </div>
            <div>Countdown Timers</div>
          </div>
          <div className="mt-3 text-gray-500 text-center">
            Never lose track with live countdown to every contest
          </div>
        </div>
        <div className="border border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center">
          <div className="flex justify-between max-w-[75%]">
            {" "}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
                className="mr-2"
              >
                <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
              </svg>{" "}
            </div>
            <div>Multi-Platform</div>
          </div>
          <div className="mt-3 text-gray-500 text-center">
            Codeforces, LeetCode, and CodeChef all in one place
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default HomePage;
