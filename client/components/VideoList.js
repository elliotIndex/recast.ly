
class VideoList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        var videos = [];
        for (var i = 0; i < this.props.videoData.length; i++) {
            videos.push( <VideoListEntry 
                            title={this.props.videoData[i].snippet.title} />);
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
