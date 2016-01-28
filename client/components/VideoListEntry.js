
class VideoListEntry extends React.Component{
  constructor(props) {
      super(props);
  }

  render(){ 
    return ( 
      <div className="video-list-entry">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.src} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title">{this.props.title}</div>
          <div className="video-list-entry-detail">{this.props.detail}</div>
        </div>
      </div>
    )
  }
}

window.VideoListEntry = VideoListEntry;
