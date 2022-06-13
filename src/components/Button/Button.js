import React from 'react';
import PropTypes from "prop-types";

import classNames from 'classnames/bind';
import styles from "./Button.module.scss";
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

const Button = ({ to, href, primary = false, outline = false, text = false, rounded = false, disabled = false, small = false, large = false, children, leftIcon, rightIcon, onClick, className, ...passProps }) => {
    let Comp = 'button';
    const _props = {
        onClick,
        ...passProps
    };

    if (disabled) {
        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof (_props[key]) === 'function') {
                delete _props[key];
            }
        });
    }

    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
    });


    return (
        <Comp className={classes} {..._props} >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.string,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func
}

export default Button;