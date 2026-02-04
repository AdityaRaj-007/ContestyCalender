import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchContestSolution } from "../utils/data";
import SolutionCard from "../components/SolutionCard";
import { useParams } from "react-router-dom";
import { fetchContestData } from "../utils/data";
import BreadCrumbs from "../components/BreadCrumbs";

const SolutionPage = () => {
  const { id } = useParams();
  console.log(id);

  const {
    data: contestData,
    isPending: isContestDataPending,
    isError: isContestDataError,
    error: contestDataError,
  } = useQuery({
    queryKey: ["contestData", id],
    queryFn: () => fetchContestData(id),
  });

  console.log(contestData);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["contestSolution"],
    queryFn: () =>
      fetchContestSolution({
        host: contestData.host.split(".")[0],
        contestName: contestData.event,
      }),
  });

  if (isPending || isContestDataPending) return <p>Loading...</p>;

  if (isContestDataError) return <p>{contestDataError.message}</p>;

  if (isError) return <p>{error.message}</p>;
  return (
    <div className="min-h-screen w-full p-6">
      <BreadCrumbs />
      <h1 className="capitalize text-2xl">
        {contestData.host.split(".")[0]} - {contestData.event} Solutions
      </h1>
      {data?.map((v, index) => (
        <SolutionCard key={index} videoData={v} />
      ))}
    </div>
  );
};

export default SolutionPage;
