import { useState } from 'react';

interface ReadMoreProps {
  text: string;
  charLimit?: number;
}

export function ReadMore({ text, charLimit = 300 }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isLongContent = text.length > charLimit;
  const displayText = isExpanded ? text : text.substring(0, charLimit) + '...';

  return (
    <div>
      <p>{displayText}</p>
      {isLongContent && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="btn-read-more"
        >
          {isExpanded ? 'Mostrar menos' : 'Saiba mais'}
        </button>
      )}
    </div>
  );
}
