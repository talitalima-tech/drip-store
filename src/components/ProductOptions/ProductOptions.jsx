import React, { useState } from 'react';
import { theme } from '../../styles/theme';

export default function ProductOptions({
  options = [],
  radius = '8px',
  shape = 'square',
  type = 'text',
  onChange
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12
  };

  const baseItemStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${theme.colors.neutral[400]}`,
    userSelect: 'none',
    cursor: 'pointer'
  };

  const squareStyle = {
    height: 46,
    minWidth: 46,
    borderRadius: radius,
    padding: '0 12px'
  };

  const circleStyle = {
    width: 31,
    height: 31,
    borderRadius: theme.borderRadius.full
  };

  const textStyle = {
    fontSize: '24px',
    color: theme.colors.neutral[600]
  };

  const handleSelect = (index) => {
    setSelectedIndex(index);
    if (onChange) onChange(options[index]);
  };

  return (
    <div style={containerStyle}>
      {options.map((opt, idx) => {
        const isSelected = idx === selectedIndex;
        const style = {
          ...baseItemStyle,
          ...(shape === 'square' ? squareStyle : circleStyle),
          ...(type === 'color'
            ? { backgroundColor: opt }
            : {}),
          border: isSelected
            ? `2px solid ${theme.colors.primary.main}`
            : baseItemStyle.border
        };

        return (
          <div key={`${opt}-${idx}`} style={style} onClick={() => handleSelect(idx)}>
            {type === 'text' ? <span style={textStyle}>{opt}</span> : null}
          </div>
        );
      })}
    </div>
  );
}
