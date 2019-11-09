import React from 'react';
import "./MyButton.css"
export const MyButton = ({name, color}) => {
    return (
        <button style={{backgroundColor: color}}>{name}</button>
    )
};