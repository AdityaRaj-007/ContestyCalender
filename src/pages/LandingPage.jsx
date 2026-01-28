import React, { useState } from "react";
import { Calendar, Youtube, ExternalLink, Clock } from "lucide-react";

// Mock Data
const contests = [
  {
    id: 1,
    platform: "LeetCode",
    name: "Weekly Contest 389",
    startTime: "2023-10-29T08:00:00",
    duration: "1h 30m",
    status: "upcoming",
    color: "border-yellow-500",
    bgColor: "bg-yellow-500/10",
    logo: "LC",
  },
  {
    id: 2,
    platform: "CodeForces",
    name: "Round #905 (Div. 2)",
    startTime: "2023-10-30T14:35:00",
    duration: "2h",
    status: "upcoming",
    color: "border-blue-500",
    bgColor: "bg-blue-500/10",
    logo: "CF",
  },
  {
    id: 3,
    platform: "CodeChef",
    name: "Starters 105",
    startTime: "2023-10-25T20:00:00",
    duration: "2h",
    status: "past",
    videoUrl: "https://youtube.com/...",
    videoTitle: "Starters 105 Analysis - C++ Java Python",
    color: "border-orange-700",
    bgColor: "bg-orange-700/10",
    logo: "CC",
  },
];

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const addToGoogleCalendar = (contest) => {
    // Logic to generate G-Cal link
    const text = encodeURIComponent(contest.name);
    const dates = "20231029T080000Z/20231029T093000Z"; // ISO format needs calculation
    window.open(
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800">
        <div className="text-2xl font-bold font-mono text-indigo-400">{`{ AlgoSchedule }`}</div>
        <div className="space-x-6 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition">
            Calendar
          </a>
          <a href="#" className="hover:text-white transition">
            Editorials
          </a>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="text-center py-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Compete. Solve. Evolve.
        </h1>
        <p className="text-xl text-slate-400 mb-10">
          Sync LeetCode, CodeForces, and CodeChef contests to your calendar and
          watch solution videos instantly.
        </p>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 pb-20">
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-6 py-2 rounded-full font-medium transition ${activeTab === "upcoming" ? "bg-white text-slate-900" : "bg-slate-800 text-slate-400 hover:bg-slate-700"}`}
          >
            Upcoming Contests
          </button>
          <button
            onClick={() => setActiveTab("solutions")}
            className={`px-6 py-2 rounded-full font-medium transition ${activeTab === "solutions" ? "bg-white text-slate-900" : "bg-slate-800 text-slate-400 hover:bg-slate-700"}`}
          >
            Past & Solutions
          </button>
        </div>

        {/* Content Render */}
        <div className="space-y-4">
          {activeTab === "upcoming" ? (
            // UPCOMING LIST
            contests
              .filter((c) => c.status === "upcoming")
              .map((contest) => (
                <div
                  key={contest.id}
                  className={`flex flex-col md:flex-row items-center justify-between bg-slate-800/50 border-l-4 ${contest.color} p-6 rounded-r-lg hover:bg-slate-800 transition group`}
                >
                  <div className="flex items-center space-x-4 w-full md:w-1/3">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-lg font-bold text-xl ${contest.bgColor} ${contest.color.replace("border", "text")}`}
                    >
                      {contest.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{contest.platform}</h3>
                      <p className="text-slate-400 text-sm">{contest.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-slate-300 w-full md:w-1/3 justify-start md:justify-center my-4 md:my-0 font-mono">
                    <Clock size={16} />
                    <span>{new Date(contest.startTime).toLocaleString()}</span>
                  </div>

                  <div className="w-full md:w-1/3 flex justify-end">
                    <button
                      onClick={() => addToGoogleCalendar(contest)}
                      className="flex items-center space-x-2 bg-slate-700 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition text-sm font-medium w-full md:w-auto justify-center"
                    >
                      <Calendar size={16} />
                      <span>Add to Calendar</span>
                    </button>
                  </div>
                </div>
              ))
          ) : (
            // VIDEO/SOLUTIONS GRID
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contests
                .filter((c) => c.status === "past")
                .map((contest) => (
                  <div
                    key={contest.id}
                    className="bg-slate-800 rounded-lg overflow-hidden hover:ring-2 ring-indigo-500 transition"
                  >
                    <div className="h-40 bg-slate-700 flex items-center justify-center relative">
                      {/* Placeholder for YouTube Thumbnail */}
                      <Youtube size={48} className="text-red-500" />
                      <span className="absolute bottom-2 right-2 bg-black/80 px-2 text-xs rounded">
                        15:30
                      </span>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-xs font-bold px-2 py-1 rounded ${contest.bgColor} ${contest.color.replace("border", "text")}`}
                        >
                          {contest.platform}
                        </span>
                        <span className="text-slate-500 text-xs">
                          2 days ago
                        </span>
                      </div>
                      <h4 className="font-bold mb-4 line-clamp-2">
                        {contest.videoTitle}
                      </h4>
                      <a
                        href={contest.videoUrl}
                        className="flex items-center justify-center space-x-2 w-full bg-slate-700 hover:bg-red-600 py-2 rounded text-sm font-medium transition"
                      >
                        <Youtube size={16} />
                        <span>Watch Solution</span>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
