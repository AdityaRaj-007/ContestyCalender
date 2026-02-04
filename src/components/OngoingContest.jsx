import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllOngoingContest } from "../utils/data";
import ContestCard from "../components/ContestCard";

const OngoingContest = () => {
  const { error, data, isPending, isError } = useQuery({
    queryKey: ["ongoingContests"],
    queryFn: getAllOngoingContest,
    placeholderData: keepPreviousData,
  });

  console.log(data);

  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>{error.message}</div>;

  return (
    <div className="grid lg:grid-cols-4 gap-4 my-4">
      {data?.objects?.length > 0 ? (
        <>
          {data.objects.map((contest, index) => (
            <ContestCard
              contest={contest}
              key={index}
              isOngoingContest={true}
            />
          ))}
        </>
      ) : (
        <p>No ongoing contests...</p>
      )}
    </div>
  );
};

export default OngoingContest;
