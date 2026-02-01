import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ContestCard from "../components/ContestCard";
import { fetchContestsByUrl, getAllPastContests } from "../utils/data";

const PastContest = () => {
  const [pageUrl, setPageUrl] = useState(null);
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["pastContests", pageUrl],
    queryFn: () =>
      pageUrl ? fetchContestsByUrl(pageUrl) : getAllPastContests(),
    placeholderData: keepPreviousData,
  });
  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>{error.message}</div>;

  return (
    <>
      <div className="grid lg:grid-cols-4 gap-4 my-4">
        {data.objects.map((contest, index) => (
          <ContestCard contest={contest} key={index} isPastContest={true} />
        ))}
      </div>
      <div className="flex w-full justify-end gap-x-4">
        <button
          className={`border ${data.meta.previous ? "border-gray-400 cursor-pointer" : "text-gray-300 border-gray-300 cursor-not-allowed"} rounded-xl px-4 py-2`}
          disabled={!data.meta.previous}
          onClick={() =>
            setPageUrl("https://clist.by:443" + data.meta.previous)
          }
        >
          Prev
        </button>
        <button
          className={`border ${data.meta.next ? "border-gray-400 cursor-pointer" : "text-gray-300 border-gray-300 cursor-not-allowed"} rounded-xl px-4 py-2`}
          disabled={!data.meta.next}
          onClick={() => setPageUrl("https://clist.by:443" + data.meta.next)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PastContest;
