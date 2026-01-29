const CLIST_API_KEY = import.meta.env.VITE_CLIST_API_KEY;
const CLIST_USERNAME = import.meta.env.VITE_CLIST_USERNAME;
const baseUrl = "https://clist.by:443/api/v4/contest/";

function getFormattedDateTimeAtLocation() {
  const date = new Date();

  const pad = (n) => String(n).padStart(2, "0");

  return (
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
    pad(date.getSeconds())
  );
}

export const getTimeLeft = (startDate) => {
  const now = new Date();
  const target = new Date(startDate);

  //console.log(now, target);

  let diff = target - now;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  //console.log(hours);
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
  console.log(data.meta.next);
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
  const response = await fetch(url);
  const data = await response.json();
  //console.log(data.objects);
  console.log(data.meta.next);
  //console.log(CLIST_API_KEY, CLIST_USERNAME);
  return data;
};
