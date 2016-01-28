
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
    window.searchYouTube('how to do taxes', (data)=>{
      self.setState(window.makeStateObject(data),console.log('setStateCallback'));
    });
  }

  render(){
    return ( 
      <div>
        <Nav modifyAppState={this.setState.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer 
            title={this.state.activeVideo.title}
            description={this.state.activeVideo.description} 
            videoId={this.state.activeVideo.videoId} />
        </div>
        <div className="col-md-5">
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
