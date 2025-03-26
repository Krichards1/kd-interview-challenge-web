import { useEffect, useState } from "react";
import {Hero } from './Hero';
import { Videos } from './Videos';

export const App = () => {
  const [videoCategory, setVideoCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const isDebug = new URLSearchParams(window.location.search).get('debug') === 'true';

  useEffect(() => {
    fetch("/api/data.json")
      .then((response) => response.json())
      .then((json) => {
        setVideoCategory(json.data.videoCategory);
      })
      .catch((e) => console.error("Error fetching data:", e));
  }, []);

  return videoCategory && <div className="category-container">
    <Hero category={videoCategory} selectedVideo={videoCategory.videos[0]}></Hero>
    <Videos videos={videoCategory.videos} selectedVideo={videoCategory.videos[0]}></Videos>
  </div>;
};
