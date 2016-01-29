
class VideoPlayer extends React.Component{
  constructor(props) {
      super(props);
  }

  render(){
    return ( 
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.props.videoId}?autoplay=1`} allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

window.VideoPlayer = VideoPlayer;
