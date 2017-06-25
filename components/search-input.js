import React, { Component } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 250px;
  height: 40px;
  background-color: #E9E9E9;
  border: none;
  padding: 0;
  margin-right: 9px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: #666666;
`;

const SearchInputLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 18px;
  background-color: #E9E9E9;
  color: #666666;
  text-transform: uppercase;
`;

const SearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 40px;
  background-color: #E9E9E9;
  cursor: pointer;
`;

const SearchButtonImage = styled.img`
  width: 30px;
`;

export default class SearchHeader extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  _onInputChange = (e) => {
    const term = e.target.value;
    this.setState(() => ({ term }));
  }

  _handleKeyPress = (e) => {
    if(e.key == 'Enter'){
      this._search();
    }
  }

  _search = () => {
    Router.push({
      pathname: '/search',
      query: { term: this.state.term }
    });
  }

  render() {
    return (
      <SearchContainer>
        <SearchInputLabel>Location</SearchInputLabel>
        <SearchInput
          placeholder="New York, NY..."
          value={this.state.term}
          onChange={this._onInputChange}
          onKeyPress={this._handleKeyPress}
        />
        <SearchButton onClick={this._search} className="search-button">
          <SearchButtonImage src="static/right-arrow.png" />
        </SearchButton>
      </SearchContainer>
    );
  }
}
