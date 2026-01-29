import { useQuery } from "@tanstack/react-query";
import React from "react";
import ContestCard from "../components/ContestCard";
import { getAllPastContests } from "../utils/data";

const PastContest = () => {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["pastContests"],
    queryFn: getAllPastContests,
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

export default PastContest;
