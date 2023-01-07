import React from 'react';

const Telegram = ({ width = 36, height = 36, stroke = 2, fill = '#ff006c', ...rest }) => {
    return (
        <svg
            id="Group_5794"
            data-name="Group 5794"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24.711 20.552"
        >
            <defs>
                <clipPath id="clip-path">
                    <rect id="Rectangle_1034" data-name="Rectangle 1034" width="24.711" height="20.552" fill={fill} />
                </clipPath>
            </defs>
            <g id="Group_5699" data-name="Group 5699" clipPath="url(#clip-path)">
                <path
                    id="Path_1021"
                    data-name="Path 1021"
                    d="M24.711.991V1.54a.63.63,0,0,0-.073.145Q22.8,10.342,20.963,19c-.354,1.673-1.163,1.988-2.544.975q-2.169-1.59-4.335-3.183c-.3-.223-.613-.439-.923-.66l-2.818,2.694a1.088,1.088,0,0,1-1.017.4c0-.181-.009-.326,0-.469.106-1.5.244-2.991.309-4.49a1.621,1.621,0,0,1,.609-1.25q4.861-4.325,9.687-8.689a5.415,5.415,0,0,0,.431-.49l-.124-.189a6.217,6.217,0,0,0-.951.4q-6.074,3.784-12.13,7.6a1.429,1.429,0,0,1-1.364.17c-1.555-.529-3.14-.972-4.7-1.493A5.921,5.921,0,0,1,0,9.67V9.34a6.49,6.49,0,0,1,1.272-.882Q12.018,4.306,22.784.206c1.07-.409,1.485-.237,1.927.785"
                    transform="translate(0 0)"
                    fill={fill}
                />
            </g>
        </svg>
    );
};

export default Telegram;
