import React from 'react';

const Minus = ({ width = 36, height = 36, stroke = 2, fill = 'white', ...rest }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 20" {...rest}>
            <g id="Group_6004" data-name="Group 6004" transform="translate(-695.811 -5176)">
                <text
                    id="_"
                    data-name="—"
                    transform="translate(695.811 5192)"
                    fill={fill}
                    fontSize="20"
                    fontFamily="PowerGrotesk-Regular, Power Grotesk"
                    letterSpacing="0.05em"
                >
                    <tspan x="0" y="0">
                        —
                    </tspan>
                </text>
            </g>
        </svg>
    );
};

export default Minus;
