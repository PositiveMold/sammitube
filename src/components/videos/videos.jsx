import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "..";
import { Loader } from "../";

const Videos = ({ videos }) => {
  if (!videos || !videos.length) return <Loader />;

  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={2}
    >
      {videos
        .filter((_, index) => index !== 7)
        .map((item) => (
          <Box key={item.id.videoId || item.id.channelId || item.etag}>
            {item.id.kind === "youtube#video" && <VideoCard video={item} />}
            {item.id.kind === "youtube#channel" && <ChannelCard video={item} />}
          </Box>
        ))}
    </Stack>
  );
};

export default Videos;
