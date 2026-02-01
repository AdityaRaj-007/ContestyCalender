import React, { useState, useEffect } from "react";
import { createGoogleCalendarLink, getTimeLeft } from "../utils/data";

const ContestCard = ({ contest, isUpcoming = false }) => {
  const platform = contest.host.split(".")[0];
  const contestDate = new Date(contest.start + "Z").toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(contest.start));

  useEffect(() => {
    if (!isUpcoming) return;

    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft(contest.start));
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, [contest.start, isUpcoming]);

  return (
    <div className="border border-gray-300 rounded-xl p-4">
      <div className="flex justify-between mb-3">
        <h1 className="capitalize">{platform}</h1>
        <div
          className="cursor-pointer"
          onClick={() => {
            const link = createGoogleCalendarLink(contest);
            window.open(link, "_blank");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
          </svg>
        </div>
      </div>

      <div className="text-xl font-bold py-2">
        <a href={contest.href}>{contest.event}</a>
      </div>
      <div>{contestDate}</div>
      {isUpcoming && (
        <div className="mt-2 bg-linear-to-r from-red-600 via-gray-900 to-red-600 text-white w-fit rounded-xl px-4 py-2">
          <span>{timeLeft.days} Days : </span>
          <span>{timeLeft.hours} h : </span>
          <span>{timeLeft.minutes} min </span>Left
        </div>
      )}
    </div>
  );
};

export default ContestCard;
