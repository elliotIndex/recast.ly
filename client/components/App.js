
class App extends React.Component{
  constructor(props) {
      super(props);
  }

  render(){
    return ( 
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer videoData={window.exampleVideoData}/>
        </div>
        <div className="col-md-5">
          <VideoList videoData={window.exampleVideoData} />
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("app"));
