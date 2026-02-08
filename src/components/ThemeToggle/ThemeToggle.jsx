import React from 'react';

/**
 * Componente ThemeToggle para alternar entre temas claro/escuro
 * Segue o padrão de design do sistema drip-store
 * @param {Object} props - Propriedades do toggle
 * @param {boolean} props.isDarkMode - Estado atual do tema
 * @param {Function} props.onToggle - Função para alternar o tema
 * @param {string} props.className - Classes CSS adicionais
 */
const ThemeToggle = ({ 
  isDarkMode = false, 
  onToggle, 
  className = '' 
}) => {
  // Estilos baseados no sistema de temas do drip-store
  const toggleStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: isDarkMode ? '#2C5AA0' : '#E9ECEF',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.3s ease',
    padding: '0',
  };

  const thumbStyle = {
    position: 'absolute',
    left: isDarkMode ? '26px' : '2px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const iconStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    width: '100%',
    height: '100%',
  };

  return (
    <button
      style={toggleStyle}
      onClick={onToggle}
      className={className}
      aria-label={isDarkMode ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
    >
      <div style={thumbStyle}>
        <span style={iconStyle}>
          {isDarkMode ? '🌙' : '☀️'}
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;