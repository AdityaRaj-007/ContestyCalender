import React, { useRef, useState } from "react";
import { createGoogleCalendarLink, getTimeLeft } from "../utils/data";

const ContestCard = ({ contest, isUpcoming = false }) => {
  const platform = contest.host.split(".")[0];
  const contestDate = new Date(contest.start + "Z").toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const timeLeftRef = useRef(null);

  if (isUpcoming) {
    const { days, hours, minutes } = getTimeLeft(contest.start);
    timeLeftRef.current = { days, hours, minutes };
  }

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
        <div ref={timeLeftRef}>
          <span>{timeLeftRef.current.days} Days</span>:
          <span>{timeLeftRef.current.hours} h</span>:
          <span>{timeLeftRef.current.minutes} min </span>Left
        </div>
      )}
    </div>
  );
};

export default ContestCard;
