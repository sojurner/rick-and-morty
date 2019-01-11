import * as React from 'react';
import '../styles/ContentCard.css';
import { withState } from 'recompose';

interface contentCardProps {
  item: { name: string; image?: string };
  hovered: string;
  handleHover: Function;
}

const ContentCard = (props: contentCardProps) => {
  const { name } = props.item;
  const { hovered, handleHover } = props;
  return (
    <section
      onMouseEnter={() => handleHover(name)}
      onMouseLeave={() => handleHover('')}
      style={
        props.item.hasOwnProperty('image')
          ? { backgroundImage: `url(${props.item.image})` }
          : { backgroundImage: 'none' }
      }
      className="content-card"
    >
      <h2
        className={hovered === name ? 'content-name-show' : 'content-name-hide'}
      >
        {name}
      </h2>
    </section>
  );
};

export default withState('hovered', 'handleHover', '')(ContentCard);
