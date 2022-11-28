import React from 'react';

const MyButton = (props) => {
  const {
    color,
    bgcolor,
    border,
    mWidth,
    mHeight,
    padding,
    borderRad,
    onClick,
    onSubmit,
    type,
    disabled,
    children,
    cursor
  } = props;

  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      disabled={disabled}
      style={{
        color: color,
        border: border,
        padding: padding,
        backgroundColor: bgcolor,
        maxWidth: mWidth,
        maxHeight: mHeight,
        borderRadius: borderRad,
        cursor: cursor
      }}>
      {children}
    </button>
  );
};

export default MyButton;
