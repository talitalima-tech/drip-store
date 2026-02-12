import React, { useMemo } from 'react';
import { theme } from '../../styles/theme';

export default function FilterGroup({
  title = '',
  inputType = 'checkbox',
  options = [],
  values = [],
  onChange
}) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    padding: '12px 0'
  };

  const titleStyle = {
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.neutral[600],
    fontWeight: theme.typography.weights.semibold
  };

  const optionRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 12
  };

  const inputStyle = {
    width: 22,
    height: 22,
    accentColor: theme.colors.primary.main
  };

  const normalizedOptions = useMemo(
    () =>
      options.map((opt, i) => ({
        text: opt?.text ?? `Opção ${i + 1}`,
        value: opt?.value ?? opt?.text ?? `opt${i + 1}`
      })),
    [options]
  );

  const isChecked = (val) =>
    inputType === 'radio' ? values?.[0] === val : values?.includes(val);

  const handleChange = (val) => {
    if (!onChange) return;
    if (inputType === 'radio') {
      onChange([val]);
    } else {
      const set = new Set(values);
      if (set.has(val)) set.delete(val);
      else set.add(val);
      onChange(Array.from(set));
    }
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>{title}</div>
      {normalizedOptions.map((opt) => (
        <label key={opt.value} style={optionRowStyle}>
          <input
            type={inputType}
            name={title}
            value={opt.value}
            checked={isChecked(opt.value)}
            onChange={() => handleChange(opt.value)}
            style={inputStyle}
          />
          <span style={{ fontSize: theme.typography.sizes.sm, color: theme.colors.neutral[600] }}>
            {opt.text}
          </span>
        </label>
      ))}
    </div>
  );
}
