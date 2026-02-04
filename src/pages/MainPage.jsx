import UpcomingContest from "../components/UpcomingContest";
import PastContest from "../components/PastContest";
import OngoingContest from "../components/OngoingContest";
import BreadCrumbs from "../components/BreadCrumbs";

const MainPage = () => {
  return (
    <div className="min-h-screen w-full py-1 px-6 flex flex-col items-center gap-4">
      <BreadCrumbs />
      <div className="w-full p-4 text-center">
        <h1 className="font-bold text-2xl">
          Track upcoming competitive programing contests
        </h1>
      </div>
      <div className="w-full px-10 my-4">
        <h1 className="pb-2 text-gray-500 text-lg">Ongoing Contests</h1>
        <hr />
        <OngoingContest />
      </div>
      <div className="w-full px-10 my-4">
        <h1 className="pb-2 text-gray-500 text-lg">Upcoming Contests</h1>
        <hr />
        <UpcomingContest />
      </div>
      <div className="w-full px-10 my-4">
        <h1 className="pb-2 text-gray-500 text-lg">Past Contests</h1>
        <hr />
        <PastContest />
      </div>
    </div>
  );
};

export default MainPage;
