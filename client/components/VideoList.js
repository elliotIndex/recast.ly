
class VideoList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        var videos = [];
        var snippet;
        for (var i = 0; i < this.props.videoData.length; i++) {
            snippet = this.props.videoData[i].snippet;
            videos.push( <VideoListEntry 
                            key={this.props.videoData[i].id.videoId}
                            title={snippet.title}
                            detail={snippet.description}
                            src={snippet.thumbnails.default.url} />);
        }
        return (
          <div className="video-list media">{videos}</div>
        );
    }
}
// var VideoList = () => {
//     var videos = [];
//     for (var i = 0; i < this.props.videoData.length; i++) {
//         videos.push( <VideoListEntry 
//             title={this.props.videoData[i].snippet.title}
//         />);
//     };
//     return (
//       <div className="video-list media">{videos}</div>
//     );
// }

window.VideoList = VideoList;
