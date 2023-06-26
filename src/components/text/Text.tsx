import React from 'react';
import './Text.scss';

interface TextProps {
  variant: 'h1' | 'h2' | 'p' | 'p-grey' | 'caps-big' | 'p-s' | 'h3' | 'p-alt' | 'ul' | 'ol';
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ variant, children }) => {
  return (
    <div className={`text-container ${variant}`}>
      {variant === 'h1' && <h1>{children}</h1>}
      {variant === 'h2' && <h2>{children}</h2>}
      {variant === 'p' && <p className="p text-content">{children}</p>}
      {variant === 'p-grey' && <p>{children}</p>}
      {variant === 'p-alt' && <p className="p-alt text-content">{children}</p>}
      {variant === 'caps-big' && <p className="caps-big">{children}</p>}
      {variant === 'p-s' && <p className="p-s">{children}</p>}
      {variant === 'h3' && <h3>{children}</h3>}
      {variant === 'ul' && <ul>{children}</ul>}
      {variant === 'ol' && <ol>{children}</ol>}
    </div>
  );
};

export default Text;
