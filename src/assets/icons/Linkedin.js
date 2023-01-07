import React from 'react';

const Hamburger = ({ width = 36, height = 36, stroke = 2, fill = '#ff006c', ...rest }) => {
    return (
        <svg
            id="Group_5797"
            data-name="Group 5797"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 21.768 21.724"
        >
            <defs>
                <clipPath id="clip-path">
                    <rect id="Rectangle_1073" data-name="Rectangle 1073" width="21.768" height="21.724" fill={fill} />
                </clipPath>
            </defs>
            <g id="Group_5873" data-name="Group 5873" transform="translate(0 0)">
                <g id="Group_5872" data-name="Group 5872" clipPath="url(#clip-path)">
                    <path
                        id="Path_1090"
                        data-name="Path 1090"
                        d="M157.81,142.5h-4.492c0-.106,0-.209,0-.311,0-2.413.016-4.827-.015-7.24a8.156,8.156,0,0,0-.266-1.927,1.752,1.752,0,0,0-1.68-1.381,4.241,4.241,0,0,0-1.323.1,2.234,2.234,0,0,0-1.632,2.017,10.353,10.353,0,0,0-.127,1.68c-.014,2.243-.006,4.487-.006,6.731v.332h-4.488V128.014h4.289v1.961c.061-.031.09-.036.1-.052a4.722,4.722,0,0,1,4.176-2.285,6.05,6.05,0,0,1,2.94.579,4.255,4.255,0,0,1,2.158,2.83,10.651,10.651,0,0,1,.37,2.862c.017,2.8.01,5.6.011,8.393,0,.061-.008.121-.014.2"
                        transform="translate(-136.056 -120.778)"
                        fill={fill}
                    />
                    <rect
                        id="Rectangle_1072"
                        data-name="Rectangle 1072"
                        width="4.474"
                        height="14.491"
                        transform="translate(0.379 7.233)"
                        fill={fill}
                    />
                    <path
                        id="Path_1091"
                        data-name="Path 1091"
                        d="M5.227,2.675A2.614,2.614,0,1,1,2.686,0,2.62,2.62,0,0,1,5.227,2.675"
                        transform="translate(0 0)"
                        fill={fill}
                    />
                </g>
            </g>
        </svg>
    );
};

export default Hamburger;
