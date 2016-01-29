
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
      videoList: props.videoData,
      statistics: {
        viewCount: "1",
        likeCount: "2",
        dislikeCount: "3",
        favoriteCount: "4"
      }
    };
  }


  componentDidMount() {
    var self = this;
    window.searchYouTube('DJ Khaled All I do is win', (data)=>{
      self.setState(window.makeStateObject(data));
      window.searchYouTube(
        '',   
        (data) => self.setState(window.addDetailsToState(data)),
        data.items[0].id.videoId,
        'statistics'
      );
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
            videoDetails={this.state.statistics}
            modifyAppState={this.setState.bind(this)}
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
    videoList: videoData,
    statistics: {
      viewCount: "5",
      likeCount: "6",
      dislikeCount: "7",
      favoriteCount: "8"
    }
  };

  if(modifyActiveVideo){
    newState.activeVideo = {
      title: firstVideo.snippet.title,
      description: firstVideo.snippet.description,
      videoId: firstVideo.id.videoId,
    };
  }
  return newState;
};

window.addDetailsToState = function(data) {
  console.log(data);
  return {statistics: data.items[0].statistics};
};

ReactDOM.render(<App videoData={window.exampleVideoData}/>, document.getElementById("app"));
