import React from 'react';
import '../../styles/common/button.scss';

function Button({ children, variant}) {
  return (
    <button className={ variant === 'primary' ? 'primary' : 'secondary'}>
      { children }
    </button>
  );
}

export default Button;
