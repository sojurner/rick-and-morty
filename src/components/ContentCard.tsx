import * as React from 'react';

interface IContentCardProps {
  item: {
    episode: string[];
    id: 2;
    image: string;
    name: string;
    origin: { name: string; url: string };
    species: string;
  };
  type: string;
}

const ContentCard = (props: IContentCardProps) => {
  const { item, type } = props;

  switch (type) {
    case 'characters':
      return (
        <div>
          <h1>{item.name}</h1>
          <img src={item.image} alt="Character image" />
        </div>
      );
    case 'locations':
      return <h1>{item.name}</h1>;
  }
};

export default ContentCard;
