import React, { useMemo, useState } from 'react';
import { theme } from '../../styles/theme';
import leftIcon from '../../assets/icons/arrow-left.svg';
import rightIcon from '../../assets/icons/arrow-right.svg';

const toPx = (v) => {
  if (v == null) return undefined;
  return typeof v === 'number' ? `${v}px` : v;
};

const Gallery = ({ className, width, height, radius = '0px', showThumbs, images = [] }) => {
  const [index, setIndex] = useState(0);
  const canPrev = index > 0;
  const canNext = index < Math.max(images.length - 1, 0);
  const w = toPx(width);
  const h = toPx(height);

  const trackStyle = useMemo(() => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    transform: `translateX(-${index * 100}%)`,
    transition: 'transform 300ms ease',
  }), [index]);

  const slideStyle = {
    minWidth: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: radius,
    backgroundColor: theme.colors.neutral[200]
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: radius
  };

  const containerStyle = {
    position: 'relative',
    width: w,
    height: h,
    borderRadius: radius,
    overflow: 'hidden'
  };

  const arrowBase = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40px',
    height: '40px',
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.neutral[100],
    boxShadow: theme.shadows.md,
    border: `1px solid ${theme.colors.neutral[300]}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0
  };

  const thumbsBarStyle = {
    display: showThumbs ? 'flex' : 'none',
    gap: theme.spacing.sm,
    marginTop: theme.spacing.md
  };

  const thumbStyle = (active) => ({
    width: '117px',
    height: '95px',
    overflow: 'hidden',
    borderRadius: radius,
    border: active ? `2px solid ${theme.colors.primary.main}` : '2px solid transparent',
    backgroundColor: theme.colors.neutral[200],
    cursor: 'pointer'
  });

  const thumbImgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: radius
  };

  const onPrev = () => {
    if (canPrev) setIndex((i) => i - 1);
  };

  const onNext = () => {
    if (canNext) setIndex((i) => i + 1);
  };

  return (
    <div className={className} style={{ width: w }}>
      <div style={containerStyle}>
        <div style={trackStyle}>
          {images.map((img, i) => (
            <div key={i} style={slideStyle}>
              <img src={img?.src} alt={`gallery-${i}`} style={imgStyle} />
            </div>
          ))}
        </div>

        <button
          onClick={onPrev}
          disabled={!canPrev}
          aria-label="Anterior"
          style={{ ...arrowBase, left: theme.spacing.md, opacity: canPrev ? 1 : 0.5 }}
        >
          <img src={leftIcon} alt="Anterior" style={{ width: 20, height: 20 }} />
        </button>

        <button
          onClick={onNext}
          disabled={!canNext}
          aria-label="Próxima"
          style={{ ...arrowBase, right: theme.spacing.md, opacity: canNext ? 1 : 0.5 }}
        >
          <img src={rightIcon} alt="Próxima" style={{ width: 20, height: 20 }} />
        </button>
      </div>

      <div style={thumbsBarStyle}>
        {images.map((img, i) => (
          <div key={`thumb-${i}`} onClick={() => setIndex(i)} style={thumbStyle(i === index)}>
            <img src={img?.src} alt={`thumb-${i}`} style={thumbImgStyle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
