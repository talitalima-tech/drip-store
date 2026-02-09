import React from 'react';

/**
 * Componente Card para exibição de conteúdo
 * Segue o padrão de design do sistema drip-store
 * @param {Object} props - Propriedades do card
 * @param {ReactNode} props.children - Conteúdo do card
 * @param {string} props.title - Título do card (opcional)
 * @param {string} props.variant - Variante de estilo (elevated, outlined, filled)
 * @param {string} props.className - Classes CSS adicionais
 */
const Card = ({ 
  children, 
  title, 
  variant = 'elevated', 
  className = '' 
}) => {
  // Estilos baseados no sistema de temas do drip-store
  const baseStyle = {
    borderRadius: '12px',
    padding: '24px',
    fontFamily: '"Inter", "Segoe UI", Roboto, sans-serif',
  };

  // Variantes de estilo
  const variants = {
    elevated: {
      backgroundColor: '#FFFFFF',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      border: '1px solid #E9ECEF',
    },
    outlined: {
      backgroundColor: 'transparent',
      border: '2px solid #E9ECEF',
      boxShadow: 'none',
    },
    filled: {
      backgroundColor: '#F8F9FA',
      border: 'none',
      boxShadow: 'none',
    },
  };

  // Estilo do título
  const titleStyle = {
    fontSize: '18px',
    fontWeight: 600,
    color: '#212529',
    marginBottom: '16px',
    marginTop: '0',
  };

  const cardStyle = {
    ...baseStyle,
    ...variants[variant],
  };

  return (
    <div style={cardStyle} className={className}>
      {title && <h3 style={titleStyle}>{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default Card;