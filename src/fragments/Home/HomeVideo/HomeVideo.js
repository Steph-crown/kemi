import { svgs } from "../../../assets/svgs";
import { pngs } from "../../../assets/pngs";
import { VideoWrapper } from "./styles";

// Destructure imports
const { PlayIcon } = svgs;
const { videoThumbnail } = pngs;

const HomeVideo = () => {
  return (
    <VideoWrapper>
      <img src={videoThumbnail} alt="Video Thumbnail" />
    </VideoWrapper>
  );
};

export default HomeVideo;
