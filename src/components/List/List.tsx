import React from 'react';
import './List.scss';

interface ListProps {
  variant: 'ul' | 'ol' | 'left-line';
  items: string[];
}

const List: React.FC<ListProps> = ({ variant, items }) => {
  const listItems = items.map((item, index) => (
    <div className="list-item-container" key={index}>
      {variant === 'ol' && <span className="list-item-number">{index + 1}.</span>}
      <span className="list-item-text">{item}</span>
    </div>
  ));
  
  if(variant === 'left-line') {
    return (
      <div className={`list-container ${variant}`}>
        {listItems}
      </div>
    );
  } else {
    return React.createElement(variant, { className: `list-container ${variant}` }, listItems);
  }
};

export default List;
