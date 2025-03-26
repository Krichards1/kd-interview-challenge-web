import {VideoCategory, Video} from "../../public/api/models";
import { YoutubeEmbed } from './YoutubeEmbed';

export const Hero = ({category, selectedVideo} :  {category: VideoCategory, selectedVideo: Video | null}) => (
    <div className="hero_container flex" style={{
        ['--category-color' as any] : `${category.color}`,
    }}>
        <div className="hero_container_left flex">
            <div className="hero_brand">BibleProject</div>
            <div className="hero_details">
                <h1>{category.title}</h1>
                <hr></hr>
                <h3 className="hero_description">{category.description}</h3>
            </div>
        </div>
        {selectedVideo && <div className="hero_container_right">
            <YoutubeEmbed video={selectedVideo}></YoutubeEmbed>
        </div>}
    </div>
);