import { useEffect, useState } from "react";
import {Hero } from './Hero';
import { Videos } from './Videos';

export const App = () => {
  const [videoCategory, setVideoCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const searchParams = new URLSearchParams(window.location.search);
  const isDebug = searchParams.get('debug') === 'true';
  const darkMode = searchParams.get('dark') === 'true';
  if (darkMode) {
    document.body.setAttribute('data-theme', 'dark');
  }

  useEffect(() => {
    fetch("/api/data.json")
      .then((response) => response.json())
      .then((json) => {
        setVideoCategory(json.data.videoCategory);
      })
      .catch((e) => console.error("Error fetching data:", e));
  }, []);

  return videoCategory && <div className="category-container">
    <Hero category={videoCategory} selectedVideo={selectedVideo}></Hero>
    <Videos videos={videoCategory.videos} selectedVideo={selectedVideo} onSelectVideo={setSelectedVideo} isDebug={isDebug}></Videos>
  </div>;
};
