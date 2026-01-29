import React, { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import ContestCard from "../components/ContestCard";
import { fetchContestsByUrl, getAllFutureContests } from "../utils/data";

const UpcomingContest = () => {
  const [pageUrl, setPageUrl] = useState(null);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["upcomingContests", pageUrl],
    queryFn: () =>
      pageUrl ? fetchContestsByUrl(pageUrl) : getAllFutureContests(),
    placeholderData: keepPreviousData,
  });

  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>{error.message}</div>;

  return (
    <>
      <div className="grid grid-cols-4 gap-4 my-4">
        {data?.objects?.length > 0 ? (
          data.objects.map((contest, index) => (
            <ContestCard contest={contest} key={index} />
          ))
        ) : (
          <p>No More Contests...</p>
        )}
      </div>
      <div className="w-full flex justify-end gap-x-4">
        <button
          disabled={!data.meta.previous}
          onClick={() =>
            setPageUrl("https://clist.by:443" + data.meta.previous)
          }
          className={`border rounded-xl px-4 py-2 ${
            data.meta.previous
              ? "border-gray-400 cursor-pointer"
              : "text-gray-400 border-gray-200 cursor-not-allowed"
          }`}
        >
          Prev
        </button>
        <button
          disabled={!data.meta.next}
          onClick={() => setPageUrl("https://clist.by:443" + data.meta.next)}
          className={`${data.meta.next ? "border-gray-400 cursor-pointer" : "text-gray-400 border-gray-200 cursor-not-allowed"} border rounded-xl px-4 py-2`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default UpcomingContest;
