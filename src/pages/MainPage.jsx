import React, { useEffect, useState } from "react";
import { getAllFutureContests, getAllPastContests } from "../utils/data";
import ContestCard from "../components/ContestCard";
import UpcomingContest from "../components/UpcomingContest";
import PastContest from "../components/PastContest";

const MainPage = () => {
  return (
    <div className="min-h-screen w-full p-6 flex flex-col items-center">
      <div className="w-full p-4 text-center">
        <h1 className="font-bold text-2xl">
          Track upcoming competitive programing contests
        </h1>
      </div>
      <div className="w-full px-10 my-4">
        <h1 className="pb-2 text-gray-500">Upcoming Contests</h1>
        <hr />
        <UpcomingContest />
      </div>
      <div className="w-full px-10 my-4">
        <h1 className="pb-2 text-gray-500">Past Contests</h1>
        <hr />
        <PastContest />
      </div>
    </div>
  );
};

export default MainPage;
