import React from 'react';

const Hamburger = ({ width = 36, height = 36, stroke = 2, fill = 'white', ...rest }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 22" {...rest}>
            <g id="Group_5750" data-name="Group 5750" transform="translate(-1240 -29.5)">
                <line
                    id="Line_18"
                    data-name="Line 18"
                    x1="15"
                    transform="translate(1256 30.5)"
                    fill="none"
                    stroke={fill}
                    strokeLinecap="round"
                    strokeWidth={stroke}
                />
                <line
                    id="Line_19"
                    data-name="Line 19"
                    x1="30"
                    transform="translate(1241 40.5)"
                    fill="none"
                    stroke={fill}
                    strokeLinecap="round"
                    strokeWidth={stroke}
                />
                <line
                    id="Line_20"
                    data-name="Line 20"
                    x1="15"
                    transform="translate(1241 50.5)"
                    fill="none"
                    stroke={fill}
                    strokeLinecap="round"
                    strokeWidth={stroke}
                />
            </g>
        </svg>
    );
};

export default Hamburger;
