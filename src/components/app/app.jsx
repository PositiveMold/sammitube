import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Main, Channel, Navbar, Search, VideoDetail } from "../";

const App = () => {
  return (
    //   <Box>- div tegidaqa oddiy teg
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Box>
  );
};

export default App;
