import React, { Component } from 'react';
import SearchButton from './SearchButton';

class SearchBar extends Component {

    onSearchChange = e => {
        this.props.onSearchChange(e.target.value);
    }

    onSearch = () => {
        this.props.onSearch();
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.onSearch();
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.onSubmit}>
                <input 
                    type="search" 
                    name="search" 
                    placeholder="Search"
                    onChange={this.onSearchChange}
                    value={this.props.searchTxt} 
                    required
                />
                <SearchButton type="submit"/>
            </form>
        );
    }
}

export default SearchBar;