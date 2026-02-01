import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchContestSolution } from "../utils/data";

const SolutionPage = () => {
  useQuery({
    queryKey: ["contestSolution"],
    queryFn: () =>
      fetchContestSolution({
        host: "Leetcode",
        contestName: "Biweekly Contest 175",
      }),
  });
  return <div>SolutionPage</div>;
};

export default SolutionPage;
