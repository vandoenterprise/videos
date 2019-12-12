import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = {
        term: ''
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <form onSubmit={(event) => this.onFormSubmit(event)}>
                <div className="ui fluid icon input" style={{ marginTop: '30px' }}>
                    <input
                        value={this.state.term}
                        onChange={(event) => this.setState({ term: event.target.value })}
                        placeholder="Search a very wide input..."
                    />
                    <i className="search icon" />
                </div>
            </form>
        );
    }
}
