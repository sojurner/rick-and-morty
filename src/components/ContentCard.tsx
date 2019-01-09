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
  category: string;
}

const ContentCard = (props: IContentCardProps) => {
  const { item, category } = props;

  switch (category) {
    case 'characters':
      return (
        <div>
          <h1>{item.name}</h1>
          <img src={item.image} alt="Character image" />
        </div>
      );
    case 'locations':
      return <h1>{item.name}</h1>;
    case 'episodes':
      return <h1>{item.name}</h1>;
  }
};

export default ContentCard;
