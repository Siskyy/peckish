import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.handletermChange = this.handletermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };        
    };

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        }
        return '';
    };

    /* Event Handlers */

    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption });
    };

    handletermChange( {target} ) {
        this.setState({ term: target.value});
    };

    handleLocationChange( {target} ) {
        this.setState({ location: target.value });
    };

    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    };

    /* Render methods */

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            /* line below will display to the user which sortBy option is currently selected */
            return <li 
                className={this.getSortByClass(sortByOptionValue)} 
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)} 
                key={sortByOptionValue}
                >{sortByOption}</li>;
        });
    };
    
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search" onChange={this.handletermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch} >Let's Eat!</a>
                </div>
            </div>
        )
    }
};

export default SearchBar;