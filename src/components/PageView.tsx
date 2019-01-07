import * as React from 'react';
import { connect } from 'react-redux';
import ContentCard from './ContentCard';

interface ICharactersContainerProps {
  pageView: string;
  dispatch: Function;
}

let store;

const PageView = props => {
  const { state, match } = props;
  const category: string = match.path.slice(1);
  const view: object[] = state[category][state.pageView];

  return (
    <section>
      {view[category].map(item => {
        return <ContentCard item={item} />;
      })}
      <div>
        <button>Prev</button>
        <button>Next</button>
      </div>
    </section>
  );
};

export const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(PageView);
