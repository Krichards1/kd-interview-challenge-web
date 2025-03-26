import { Video } from '../../public/api/models';

export const YoutubeEmbed = ({video} :  {video: Video}) => (
    <iframe 
          width="100%"
          height="auto"
          src={`https://www.youtube.com/embed/${video.youtubeId}`} 
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          style={{aspectRatio: '16/9' ,border: 'none', borderRadius: '10px'}}
          allowFullScreen
    />
);