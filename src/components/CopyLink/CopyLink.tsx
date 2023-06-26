import React, { useState, MouseEvent } from 'react';
import './CopyLink.scss'
import Copy from '../../assets/images/copy.png'
interface CopyLinkProps {
  text: string;
  variant: 'small' | 'full'
}

const CopyLink: React.FC<CopyLinkProps> = ({ text , variant}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = async (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className={`flex copy-link ${variant === 'small' ? 'small-link' : 'full-link'}`} onClick={copyToClipboard}>
        <p className='link-text mr-30'><a href={text} target="_blank" rel="noopener noreferrer">{text}</a></p>
    <button>
      {copied ? 'Copied!' : <img src={Copy} alt='copy'/>}
    </button>
    </div>
  );
}

export default CopyLink;
