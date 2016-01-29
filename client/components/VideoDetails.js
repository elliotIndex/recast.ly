class VideoDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   console.log(this.props.videoId);
  //   window.searchYouTube(
  //     '',   
  //     (data) => this.props.modifyAppState(window.addDetailsToState(data)),
  //     this.props.videoId,
  //     'statistics'
  //   );
  // };
  

  render(){
    return ( 
      <div>
        <div className="video-player-details">
            <h3>{this.props.title}</h3>
            <div className="container">
              <div className="row">
               <div className="col-md-3">{`Views  ${this.props.videoDetails.viewCount}`}</div>
               <div className="col-md-3">{`Favorites  ${this.props.videoDetails.favoriteCount}`}</div>
               <div className="col-md-3">{`Likes  ${this.props.videoDetails.likeCount}`}</div>
               <div className="col-md-3">{`Dislikes  ${this.props.videoDetails.dislikeCount}`}</div>
              </div>
            </div>
        </div>
        <div className="video-player-details">
          <div>{this.props.description}</div>
        </div> 

      </div>
    )
  }
}
 
window.VideoDetails = VideoDetails;