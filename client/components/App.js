
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
    window.searchYouTube('funny puppies', (data)=>{
      console.log('into the search');
      var videoData = data.results;
      var firstVideo = videoData[0];
      self.setState({
        activeVideo:{
          title: firstVideo.snippet.title,
          description: firstVideo.snippet.description,
          videoId: firstVideo.id.videoId
        },
        videoList: videoData
      },console.log("I should have rendered but i'm just logging shit to the console"));
    });
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
