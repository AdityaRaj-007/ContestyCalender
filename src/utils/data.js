const getAllFutureContests = async () => {
  const date = new Date();
  console.log(date.toISOString());
  const response = await fetch("");
  const data = await response.json();
  console.log(data);
};

getAllFutureContests();

const getAllPastContests = async (url) => {
  const response = fetch(url);
  const data = (await response).json();
};
