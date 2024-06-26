import { useState } from "react";

import "./videoSection.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { PlayIcon } from "../PlayIcon";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results?.map((video) => (
              <div
                onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}
                key={video.id}
                className="videoItem"
              >
                <div className="videoThumbnail">
                  <img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  />
                  <PlayIcon />
                </div>
                <p className="videoTitle">{video?.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;
