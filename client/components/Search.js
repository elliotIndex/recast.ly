class Search extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="search-bar form-inline">
        <input className="form-control" type="text" 
          onKeyUp={()=> {
            console.log($('.form-control').val());
            window.searchYouTube(
              $('.form-control').val(),   
              (data) => this.props.modifyAppState(window.makeStateObject(data))
            );
          }}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    ) 
  }
}
        // onKeyUp={ this.props.modifyAppState }/>
window.Search = Search;

// problem 1: on submit, goes back to taxes
// problem 2: onKeyUp, always goes to adelle