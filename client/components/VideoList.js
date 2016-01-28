
class VideoList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        var videos = [];
        var video;
        for (var i = 0; i < this.props.videoData.length; i++) {
            video = this.props.videoData[i];
            videos.push( <VideoListEntry
                modifyAppState={this.props.modifyAppState}
                key={video.id.videoId}
                title={video.snippet.title}
                detail={video.snippet.description}
                src={video.snippet.thumbnails.default.url} 
                videoId={video.id.videoId}
            />);
        }
        return (
          <div className="video-list media">{videos}</div>
        );
    }
}

window.VideoList = VideoList;
