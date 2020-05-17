import React from 'react';

class SearchBar extends React.Component{
    
    state = {term : ''};
    onFormSubmit= (e) => {
        e.preventDefault();
        console.log(this.state.term)
    }
    render() {
    
        return (
            <div className="search-bar ui segment">
            <form className= "ui form" onSubmit = {(e) => this.onFormSubmit(e)}>
                <label>Video Search</label>
                <input type='text' value={this.state.term} onChange = {(e)=>this.setState({term: e.target.value})}></input>
            </form>
            </div>
        )
    }
}

export default SearchBar;