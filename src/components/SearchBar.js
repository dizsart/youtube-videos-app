import React from 'react';

class SearchBar extends React.Component{
    
    state = {term : ''};
    onFormSubmit= (e) => {
        e.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }
    render() {
    
        return (
            <div className="search-bar ui segment">
            <form className= "ui form" onSubmit = {this.onFormSubmit}>
                <label>Video Search</label>
                <input type='text' value={this.state.term} onChange = {(e)=>this.setState({term: e.target.value})}></input>
            </form>
            </div>
        )
    }
}

export default SearchBar;