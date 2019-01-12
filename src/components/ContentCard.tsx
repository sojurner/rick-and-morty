import * as React from 'react';
import '../styles/ContentCard.css';
import { withState } from 'recompose';

interface contentCardProps {
  item: { name: string; image?: string };
  handleClick: Function;
  targetCard: '';
}

const ContentCard = (props: contentCardProps) => {
  const { name } = props.item;
  const { handleClick, targetCard } = props;
  return (
    <div
      className={
        targetCard === name ? 'card-flip-container-full' : 'card-flip-container'
      }
      onClick={targetCard !== name ? () => handleClick(name) : () => ''}
    >
      <div className={targetCard === name ? 'card-itself-full' : 'card-itself'}>
        {['front-face', 'back-face'].map(item => {
          return (
            <section
              style={
                props.item.hasOwnProperty('image')
                  ? { backgroundImage: `url(${props.item.image})` }
                  : { backgroundImage: 'none' }
              }
              className={item}
            >
              {targetCard === name && (
                <i
                  className="material-icons exit-modal-icon"
                  onClick={() => handleClick(null)}
                >
                  fullscreen_exit
                </i>
              )}

              {item === 'back-face' && (
                <h2 className="content-name"> {name} </h2>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default withState('targetCard', 'handleClick', '')(ContentCard);
