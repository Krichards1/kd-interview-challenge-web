import {Video} from "../../public/api/models";
import { useState } from "react";

export const Videos = ({videos, selectedVideo} :  {videos: Video[], selectedVideo: Video | null}) => 
    {
    const newest = videos[0].id;
    return ( <div className="videos_container flex">
        {videos.map((video) => (
        <VideoCard
          isSelected={selectedVideo?.id === video.id}
          isNewest={selectedVideo?.id === newest.id}
          video={video}
          key={video.id}
        />
      ))}
    </div>
    );
}

const VideoCard = ({video, isSelected, isNewest} : {video: Video, isSelected: boolean, isNewest: boolean}) => {
    const [descriptionExpanded, setDescriptionExpanded] = useState(false);
    return (
        <div className="video_card flex">
            <div className={`video_card_image clickable ${isSelected ? 'selected' : ''}`}
            style={{ 
                ['--large-image' as any]: `url(${video.images.large})`,
                ['--medium-image' as any]: `url(${video.images.medium})`,
                ['--mini-image' as any]: `url(${video.images.mini})`,
                ['--small-image' as any]: `url(${video.images.small})`,
                ['--video-color' as any] : `${video.color}`,
            }}>
            {isSelected || isNewest ? <div className="video_card_image_chip">{isSelected ? "Selected" : "Newest"}</div> : null}
            </div>
            <h5 className='clickable'>{video.title}</h5>
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
    );
}