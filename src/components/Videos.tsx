import {Video} from "../../public/api/models";
import { useState } from "react";

export const Videos = ({videos, selectedVideo, isDebug, onSelectVideo} :  {videos: Video[], selectedVideo: Video | null, 
    isDebug: boolean, onSelectVideo: (video: Video) => void }) => 
    {
    const newest = videos[0].id;
    return ( <div className="videos_container flex">
        {videos.map((video) => (
        <VideoCard
          isSelected={selectedVideo?.id === video.id}
          isNewest={video.id === newest}
          isDebug={isDebug}
          onSelectVideo={onSelectVideo}
          video={video}
          key={video.id}
        />
      ))}
    </div>
    );
}

const VideoCard = ({video, isSelected, isNewest, isDebug, onSelectVideo} : {video: Video, isSelected: boolean, isNewest: boolean, 
    isDebug: boolean, onSelectVideo: (video: Video) => void}) => {
        const [descriptionExpanded, setDescriptionExpanded] = useState(false);
        const [isError, setIsError] = useState(false);

        const selectVideoHandler = (video: Video) => {
            if (isSelected) return;
            if (isDebug) {              
              const random = Math.random() < 0.5;
              if (random) {
                setIsError(true);
              } else {
                setIsError(false);
                onSelectVideo(video);
              }
            } else {
              onSelectVideo(video);
            }
          };

        return (
            <div style={{ position: 'relative' }}>
                <div className="video_card flex">
                    <div className={`video_card_image clickable ${isSelected ? 'selected' : ''} ${isError ? 'error' : ''}`}
                    style={{ 
                        ['--large-image' as any]: `url(${video.images.large})`,
                        ['--medium-image' as any]: `url(${video.images.medium})`,
                        ['--mini-image' as any]: `url(${video.images.mini})`,
                        ['--small-image' as any]: `url(${video.images.small})`,
                        ['--video-color' as any] : `${video.color}`,
                    }}
                    onClick={() => {
                        selectVideoHandler(video);
                    }}
                    >
                    {(isSelected || isNewest) ? <div className="video_card_image_chip">{isSelected ? "Selected" : "Newest"}</div> : null}
                    <div className="video_card_image_mini-title">{video.title}</div>
                    </div>
                    <h5 
                        className='clickable'
                        onClick={() => {
                            selectVideoHandler(video);
                        }}
                    >{video.title}</h5>
                    <p className={`video_card_description ${descriptionExpanded ? 'expanded' : ''}`}>{video.description}</p>
                    <div className="video_card_subtitle_container flex">
                        <p>{video.subtitle}</p>
                        <div className="video_card_collapse_button_container">
                            <div 
                                role='button' 
                                className={`video_card_collapse_button clickable ${descriptionExpanded ? 'expanded' : 'collapsed'}`}
                                onClick={() => setDescriptionExpanded(!descriptionExpanded)}
                            ></div>
                        </div>  
                    </div>
                </div>
                {isError && (
                    <div
                    onClick={
                        (event) => {
                        event.stopPropagation();
                        }
                    } 
                        className="video_card_error_overlay">
                        <div>Error: Unable to load video</div>
                        <div className="clickable video_card_retry_button" onClick={() => selectVideoHandler(video)}><p>Click here to try again</p></div>
                    </div>
                )}
            </div>
        );
    }  