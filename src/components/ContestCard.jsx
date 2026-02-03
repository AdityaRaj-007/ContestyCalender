import React, { useState, useEffect } from "react";
import { createGoogleCalendarLink, getTimeLeft } from "../utils/data";
import { useNavigate } from "react-router-dom";

const ContestCard = ({
  contest,
  isUpcoming = false,
  isPastContest = false,
  isOngoingContest = false,
}) => {
  const platform = contest.host.split(".")[0];
  const contestDate = new Date(contest.start + "Z").toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(contest.start));
  const [ongoingContestTimeLeft, setOngoingContestTimeLeft] = useState(() =>
    getTimeLeft(contest.end),
  );

  useEffect(() => {
    if (!isUpcoming) return;

    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft(contest.start));
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, [contest.start, isUpcoming]);

  useEffect(() => {
    if (!isOngoingContest) return;

    const intervalId = setInterval(() => {
      setOngoingContestTimeLeft(contest.end());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [contest.end, isOngoingContest]);

  const navigate = useNavigate();
  //console.log(contest);

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
          <span>{timeLeft.minutes} min</span>Left
        </div>
      )}

      {isPastContest && (
        <div
          className="mt-2 flex justify-between cursor-pointer"
          onClick={() => navigate(`${contest.id}/solution`)}
        >
          Solution:{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="M616-242q-27 1-51.5 1.5t-43.5.5h-41q-71 0-133-2-53-2-104.5-5.5T168-257q-26-7-45-26t-26-45q-6-23-9.5-56T82-447q-2-36-2-73t2-73q2-30 5.5-63t9.5-56q7-26 26-45t45-26q23-6 74.5-9.5T347-798q62-2 133-2t133 2q53 2 104.5 5.5T792-783q26 7 45 26t26 45q6 23 9.5 56t5.5 63q2 36 2 73v17q-19-8-39-12.5t-41-4.5q-83 0-141.5 58.5T600-320q0 21 4 40.5t12 37.5ZM400-400l208-120-208-120v240Zm360 200v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
          </svg>
        </div>
      )}

      {isOngoingContest && (
        <div>
          <div className="bg-red-600 text-white animate-pulse">Live</div>
          <div className="mt-2 bg-linear-to-r from-red-600 via-gray-900 to-red-600 text-white w-fit rounded-xl px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M480-240q100 0 170-70t70-170q0-100-70-170t-170-70v240L310-310q35 33 78.5 51.5T480-240Zm0 160q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <span>{timeLeft.hours} h : </span>
            <span>{timeLeft.minutes} min : </span>
            <span>{timeLeft.seconds} sec : </span>Left
          </div>
        </div>
      )}
    </div>
  );
};

export default ContestCard;
