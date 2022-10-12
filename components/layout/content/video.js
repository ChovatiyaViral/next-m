import React, { useEffect } from "react";

const VideoComponent = ({ videoRef, videoUrl, videoComponentStyle, sound }) => {
  useEffect(() => {
    console.log(sound, videoUrl);
  }, [videoUrl, sound]);

  return (
    <>
      {videoUrl && (
        <video
          className="video_main_section"
          ref={videoRef}
          width="100%"
          height="100%"
          style={videoComponentStyle}
          muted={!sound ? true : false}
          loop
          autoPlay
          preload="auto"
          playsInline
          src={videoUrl}
        />
      )}
    </>
  );
};

export default VideoComponent;
