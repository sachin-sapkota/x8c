import React from 'react';

const ArrowRight = ({ width = 36, height = 18, fill = 'white', ...rest }) => {
    return (
        <svg version="1.1" viewBox="0 0 35.424 18.296" width={width} height={height} {...rest}>
            <g id="Group_5885" data-name="Group 5885" transform="translate(-166 -945.609)">
                <g id="Group_5751" data-name="Group 5751" transform="translate(166 946.67)">
                    <path
                        id="Path_11516"
                        data-name="Path 11516"
                        d="M4346.875,8908l8.088,8.088-8.088,8.087"
                        transform="translate(-4321.662 -8907.998)"
                        fill="none"
                        stroke={fill}
                        strokeWidth="3"
                    />
                    <line
                        id="Line_22"
                        data-name="Line 22"
                        x2="32.683"
                        transform="translate(0 8.411)"
                        fill="none"
                        stroke={fill}
                        strokeWidth="3"
                    />
                </g>
            </g>
        </svg>
    );
};

export default ArrowRight;
