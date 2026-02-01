const CLIST_API_KEY = import.meta.env.VITE_CLIST_API_KEY;
const CLIST_USERNAME = import.meta.env.VITE_CLIST_USERNAME;
const RAPID_API_KEY = import.meta.env.RAPID_API_KEY;
const baseUrl = "https://clist.by:443/api/v4/contest/";

function getFormattedDateTimeAtLocation() {
  const date = new Date();
  const pad = (n) => String(n).padStart(2, "0");

  const formattedDate =
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds());

  const local = new Date(formattedDate);
  const utc = local.toISOString();

  console.log(utc.split(".")[0]);
  return utc.split(".")[0];
}

export const getTimeLeft = (startDate) => {
  const now = new Date();
  const target = new Date(
    startDate.endsWith("Z") ? startDate : startDate + "Z",
  );

  const diffMs = target - now;

  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0 };
  }

  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  return { days, hours, minutes };
};

export const getAllFutureContests = async () => {
  const date = getFormattedDateTimeAtLocation();
  console.log(date);
  const queryParams = {
    username: CLIST_USERNAME,
    api_key: CLIST_API_KEY,
    limit: 12,
    total_count: true,
    upcoming: true,
    resource_id__in: "1,2,102",
    start__gte: date,
    order_by: "start",
  };

  const url = new URL(baseUrl);
  url.search = new URLSearchParams(queryParams).toString();
  //console.log(url.href);
  return fetchContestsByUrl(url);
};

export const fetchContestsByUrl = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch contests");
  const data = await response.json();
  console.log(data);
  //console.log(data.meta.next);
  return data;
};

export const getAllPastContests = async () => {
  const date = getFormattedDateTimeAtLocation();
  console.log(date);
  const queryParams = {
    username: CLIST_USERNAME,
    api_key: CLIST_API_KEY,
    limit: 12,
    total_count: true,
    resource_id__in: "1,2,102",
    end__lte: date,
    order_by: "-end",
  };
  const url = new URL(baseUrl);
  url.search = new URLSearchParams(queryParams).toString();
  //console.log(url.href);
  return fetchContestsByUrl(url);
};

export const getAllOngoingContest = () => {
  const date = getFormattedDateTimeAtLocation();

  const queryParams = {
    username: CLIST_USERNAME,
    api_key: CLIST_API_KEY,
    limit: 12,
    total_count: true,
    resource_id__in: "1,2,102",
    start__lte: date,
    end__gte: date,
    order_by: "-end",
  };

  const url = new URL(url);
  url.search = new URLSearchParams(queryParams).toString();

  return fetchContestsByUrl(url);
};

export function createGoogleCalendarLink(contest) {
  console.log(contest);
  const platform = contest.host.split(".")[0];
  const start = new Date(contest.start + "Z").toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const end = new Date(contest.end + "Z").toTimeString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: contest.event,
    dates: `${start}/${end}`,
    details: `Contest on ${platform}\n${contest.href}`,
    location: platform,
  });

  return `https://www.google.com/calendar/render?${params.toString()}`;
}

export const fetchContestSolution = async ({ host, contestName }) => {
  const query = host + " " + contestName + " solution";

  const queryParams = {
    q: query,
    hl: "en",
    gl: "US",
    type: "video",
  };

  const url = new URL("https://youtube138.p.rapidapi.com/search/");
  url.search = new URLSearchParams(queryParams).toString();

  console.log(url);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": RAPID_API_KEY,
        "x-rapidapi-host": "youtube138.p.rapidapi.com",
      },
    });

    const data = await response.json();
    console.log(data);

    return data;
  } catch (err) {
    console.log(err.message);
  }
};

//fetchContestSolution({ host: "Leetcode", contestName: "Biweekly Contest 175" });
