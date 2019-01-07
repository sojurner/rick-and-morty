import * as React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';

// interface ICharactersProps {
//   characters: object[];
// }

const Characters = () => {
  return <h1>CHARACTERs</h1>;
};

export const mapStateToProps = (state: { characters: any[] }) => ({
  characters: state.characters
});

export default Characters;
