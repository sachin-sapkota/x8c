import React from 'react';

const Plus = ({ width = 36, height = 36, stroke = 2, fill = 'white', ...rest }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 11 20" {...rest}>
            <text
                id="_"
                data-name="+"
                transform="translate(0 16)"
                fill={fill}
                fontSize="20"
                fontFamily="PowerGrotesk-Regular, Power Grotesk"
                letterSpacing="0.05em"
                opacity="0.5"
            >
                <tspan x="0" y="0">
                    +
                </tspan>
            </text>
        </svg>
    );
};

export default Plus;
