import React from 'react';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = { term: ""};
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render(){
    return(
      <div className="container-searchbar">
          <img className="logo" src="YouTube_Logo.png"/>
          <input className="searchbar"
            value={this.state.term}
            onChange={ e => this.onInputChange(e.target.value) } />
      </div>

    );
  }

}

export default SearchBar;
