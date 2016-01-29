class VideoDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    var self = this;
    window.searchYouTube('how to do taxes', (data)=>{
      self.setState(window.makeStateObject(data),console.log('setStateCallback'));
    });
  }

  render(){
    return ( 
      <div className="video-player-details">
          <h3>{this.props.title}</h3>
          <div className="container">
            <div className="row">
             <div className="col-md-3">Views</div>
             <div className="col-md-3">Favorites</div>
             <div className="col-md-3">Likes</div>
             <div className="col-md-3">Dislikes</div>
            </div>
          </div>
      </div>
    )
  }
}
 
window.VideoDetails = VideoDetails;