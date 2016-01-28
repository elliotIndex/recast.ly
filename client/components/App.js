
class App extends React.Component{
  constructor(props) {
    super(props);
    var video = this.props.videoData[0];
    this.state = {
      activeVideo:{
        title: video.snippet.title,
        description: video.snippet.description,
        videoId: video.id.videoId
      },
      videoList: window.exampleVideoData
    };
  }

  render(){
    return ( 
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer 
            title={this.state.activeVideo.title}
            description={this.state.activeVideo.description} 
            videoId={this.state.activeVideo.videoId} />
        </div>
        <div className="col-md-5">
          <VideoList somefunction={this.setState.bind(this)} videoData={window.exampleVideoData} />
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App videoData={window.exampleVideoData}/>, document.getElementById("app"));
