
class App extends React.Component{
  constructor(props) {
    super(props);
    var firstVideo = props.videoData[0];

    this.state = {
      activeVideo:{
        title: firstVideo.snippet.title,
        description: firstVideo.snippet.description,
        videoId: firstVideo.id.videoId
      },
      videoList: props.videoData
    };
  }

  componentWillMount() {
    var self = this;
    window.searchYouTube('rain sounds', (data)=>{
      self.setState(window.makeStateObject(data),console.log('setStateCallback'));
    });
  }

  render(){
    return ( 
      <div>
        <Nav modifyAppState={this.setState.bind(this)} />
        <div className="col-md-8">
          <VideoPlayer 
            title={this.state.activeVideo.title}
            description={this.state.activeVideo.description} 
            videoId={this.state.activeVideo.videoId} 
          />
          <VideoDetails
            title={this.state.activeVideo.title}
            description={this.state.activeVideo.description} 
            videoId={this.state.activeVideo.videoId}
          />
        </div>
        <div className="col-md-4">
          <VideoList modifyAppState={this.setState.bind(this)} videoData={this.state.videoList} />
        </div>
      </div>
    )
  }
}

window.makeStateObject = function(data, modifyActiveVideo = true) {
  var videoData = data.items;
  var firstVideo = videoData[0];
  var newState = {
    videoList: videoData
  };

  if(modifyActiveVideo){
    newState.activeVideo = {
      title: firstVideo.snippet.title,
      description: firstVideo.snippet.description,
      videoId: firstVideo.id.videoId
    };
  }
  return newState;
}
ReactDOM.render(<App videoData={window.exampleVideoData}/>, document.getElementById("app"));
