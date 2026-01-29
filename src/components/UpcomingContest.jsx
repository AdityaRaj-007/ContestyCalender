import React from "react";
import { useQuery } from "@tanstack/react-query";
import ContestCard from "../components/ContestCard";
import { getAllFutureContests } from "../utils/data";

const UpcomingContest = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["upcomingContests"],
    queryFn: getAllFutureContests,
  });

  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-4 gap-4 my-4">
      {data.map((contest, index) => (
        <ContestCard contest={contest} key={index} />
      ))}
    </div>
  );
};

export default UpcomingContest;
