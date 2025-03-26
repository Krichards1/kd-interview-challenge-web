import {VideoCategory, Video} from '../../public/api/models';
import { YoutubeEmbed } from './YoutubeEmbed';

export const Hero = ({category, selectedVideo} :  {category: VideoCategory, selectedVideo: Video | null}) => (
    <div className={`hero_container flex ${selectedVideo != null ? 'active' : ''}`} style={{
        ['--large-category-image' as any]: `url(${category.images.large})`,
        ['--medium-category-image' as any]: `url(${category.images.medium})`,
        ['--mini-category-image' as any]: `url(${category.images.mini})`,
        ['--small-category-image' as any]: `url(${category.images.small})`,
        ['--category-color' as any] : `${category.color}`,
    }}>
        <div className='hero_container_left flex'>
            <div className='hero_brand'>BibleProject</div>
            <div className='hero_details'>
                <h1>{category.title}</h1>
                <hr></hr>
                <h3 className='hero_description'>{category.description}</h3>
            </div>
        </div>
        {selectedVideo ? <div className='hero_container_right'>
            <YoutubeEmbed video={selectedVideo}></YoutubeEmbed>
        </div> : <div  style={{aspectRatio: '16 / 9'}} className='hero_container_series_image'/>}
    </div>
);