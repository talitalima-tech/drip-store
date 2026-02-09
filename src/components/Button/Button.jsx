import React from 'react';

/**
 * Componente Button reutilizável
 * Segue o padrão de design do sistema drip-store
 * @param {Object} props - Propriedades do botão
 * @param {ReactNode} props.children - Conteúdo do botão
 * @param {Function} props.onClick - Função de clique
 * @param {string} props.variant - Variante do botão (primary, secondary, outline)
 * @param {string} props.size - Tamanho do botão (sm, md, lg)
 * @param {boolean} props.disabled - Estado desabilitado
 * @param {string} props.className - Classes CSS adicionais
 */
const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  className = '' 
}) => {
  // Estilos baseados no sistema de temas do drip-store
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 500,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: '"Inter", "Segoe UI", Roboto, sans-serif',
  };

  // Variantes de cor
  const variants = {
    primary: {
      backgroundColor: '#2C5AA0',
      color: '#FFFFFF',
      '&:hover:not(:disabled)': {
        backgroundColor: '#1A3A6B',
        transform: 'translateY(-1px)',
      },
    },
    secondary: {
      backgroundColor: '#FF6B35',
      color: '#FFFFFF',
      '&:hover:not(:disabled)': {
        backgroundColor: '#D45A2B',
        transform: 'translateY(-1px)',
      },
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#2C5AA0',
      border: '2px solid #2C5AA0',
      '&:hover:not(:disabled)': {
        backgroundColor: '#2C5AA0',
        color: '#FFFFFF',
      },
    },
  };

  // Tamanhos
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '14px',
      height: '32px',
    },
    md: {
      padding: '12px 24px',
      fontSize: '16px',
      height: '40px',
    },
    lg: {
      padding: '16px 32px',
      fontSize: '18px',
      height: '48px',
    },
  };

  // Estado desabilitado
  const disabledStyle = {
    opacity: 0.6,
    backgroundColor: '#E9ECEF',
    color: '#6C757D',
  };

  const buttonStyle = {
    ...baseStyle,
    ...variants[variant],
    ...sizes[size],
    ...(disabled && disabledStyle),
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;