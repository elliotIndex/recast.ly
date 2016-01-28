
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
    console.log('componentWillMount');
    var self = this;
    window.searchYouTube('watch me whip', (data)=>{
      console.log('into the search');
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
          <VideoList modifyAppState={this.setState.bind(this)} videoData={window.exampleVideoData} />
        </div>
      </div>
    )
  }
}

window.makeStateObject = function(data) {
  //turn data into updated state object
  var videoData = data.items;
  var firstVideo = videoData[0];
  return {
    activeVideo:{
      title: firstVideo.snippet.title,
      description: firstVideo.snippet.description,
      videoId: firstVideo.id.videoId
    },
    videoList: videoData
  };
}
ReactDOM.render(<App videoData={window.exampleVideoData}/>, document.getElementById("app"));
