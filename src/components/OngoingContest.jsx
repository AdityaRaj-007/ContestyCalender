import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllOngoingContest } from "../utils/data";

const OngoingContest = () => {
  const { error, data, isPending, isError } = useQuery({
    queryKey: ["ongoingContests"],
    queryFn: getAllOngoingContest,
  });

  console.log(data);
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
