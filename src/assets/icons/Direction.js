import React from 'react';

const Direction = ({ width = 18, height = 18, stroke = 3, fill = 'white', ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox={`0 0 24 24`}
            strokeWidth={stroke}
            stroke={fill}
            width={width}
            height={height}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
    );
};

export default Direction;
