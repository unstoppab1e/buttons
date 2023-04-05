import React from 'react';
import PropTypes from 'prop-types';
import './button.scss'



const Button = ({ children, disabled, variant, size, color, ...props}) =>{
    return (
        <button
            type='button'
            disabled={disabled}
            className={[`button button--${size} button--${variant} button--${color}`]}
        >
            {color}
        </button>
    )
}
export default Button;

Button.propTypes = {
    color: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']),
    variant: PropTypes.oneOf(['classic', 'text', 'outlined']),
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xlg']),
    disabled: PropTypes.bool,
    children: PropTypes.string.isRequired,

}

Button.defaultProps = {
    disabled: false,
    color: 'default',
    variant: 'classic',
    size: 'sm',
}