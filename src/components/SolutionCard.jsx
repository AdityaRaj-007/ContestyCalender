import React from "react";

const SolutionCard = ({ videoData }) => {
  const hours = Math.floor(videoData.video.lengthSeconds / (60 * 60));
  let timeLeft = videoData.video.lengthSeconds % (60 * 60);
  let minutes = Math.floor(timeLeft / 60);
  let seconds = Math.floor(timeLeft % 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return (
    <div className="flex border border-gray-300 rounded-xl p-4 my-4 items-center">
      <div className="mr-4">
        <img
          src={videoData.video.thumbnails[0].url}
          alt="Thumbnail"
          width={200}
          height={200}
          className="rounded-xl"
        />
      </div>
      <div
        onClick={() => {
          const link = `https://www.youtube.com/watch?v=${videoData.video.videoId}`;
          window.open(link, "_blank");
        }}
        className="cursor-pointer"
      >
        <h1 className="text-2xl font-bold mb-2">{videoData.video.title}</h1>

        <div className="flex space-x-2 items-center">
          <img
            src={videoData.video.author.avatar[0].url}
            alt=""
            className="rounded-full"
            width={40}
          />
          <p>{videoData.video.author.title}</p>
        </div>
        <p>Views : {videoData.video.stats.views}</p>
        <p className="text-gray-500">
          {hours > 0 && `${hours} : `} {minutes > 0 && `${minutes} : `}{" "}
          {seconds > 0 && `${seconds}`}
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default SolutionCard;
