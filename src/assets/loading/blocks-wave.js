import React from 'react';

const LoadingBlocksWave = ({ width, height }) => {
    return (
        <svg width={width} height={height} fill="#A937F7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="7.33" height="7.33">
                <animate
                    id="spinner_oJFS"
                    begin="0;spinner_5T1J.end+0.4s"
                    attributeName="x"
                    dur="1.2s"
                    values="1;4;1"
                />
                <animate begin="0;spinner_5T1J.end+0.4s" attributeName="y" dur="1.2s" values="1;4;1" />
                <animate begin="0;spinner_5T1J.end+0.4s" attributeName="width" dur="1.2s" values="7.33;1.33;7.33" />
                <animate begin="0;spinner_5T1J.end+0.4s" attributeName="height" dur="1.2s" values="7.33;1.33;7.33" />
            </rect>
            <rect x="8.33" y="1" width="7.33" height="7.33">
                <animate begin="spinner_oJFS.begin+0.2s" attributeName="x" dur="1.2s" values="8.33;11.33;8.33" />
                <animate begin="spinner_oJFS.begin+0.2s" attributeName="y" dur="1.2s" values="1;4;1" />
                <animate begin="spinner_oJFS.begin+0.2s" attributeName="width" dur="1.2s" values="7.33;1.33;7.33" />
                <animate begin="spinner_oJFS.begin+0.2s" attributeName="height" dur="1.2s" values="7.33;1.33;7.33" />
            </rect>
            <rect x="1" y="8.33" width="7.33" height="7.33">
                <animate begin="spinner_oJFS.begin+0.2s" attributeName="x" dur="1.2s" values="1;4;1" />
                <animate begin="spinner_oJFS.begin+0.2s" attributeName="y" dur="1.2s" values="8.33;11.33;8.33" />
                <animate begin="spinner_oJFS.begin+0.2s" attributeName="width" dur="1.2s" values="7.33;1.33;7.33" />
                <animate begin="spinner_oJFS.begin+0.2s" attributeName="height" dur="1.2s" values="7.33;1.33;7.33" />
            </rect>
            <rect x="15.66" y="1" width="7.33" height="7.33">
                <animate begin="spinner_oJFS.begin+0.4s" attributeName="x" dur="1.2s" values="15.66;18.66;15.66" />
                <animate begin="spinner_oJFS.begin+0.4s" attributeName="y" dur="1.2s" values="1;4;1" />
                <animate begin="spinner_oJFS.begin+0.4s" attributeName="width" dur="1.2s" values="7.33;1.33;7.33" />
                <animate begin="spinner_oJFS.begin+0.4s" attributeName="height" dur="1.2s" values="7.33;1.33;7.33" />
            </rect>
            <rect x="8.33" y="8.33" width="7.33" height="7.33">
                <animate begin="spinner_oJFS.begin+0.4s" attributeName="x" dur="1.2s" values="8.33;11.33;8.33" />
                <animate begin="spinner_oJFS.begin+0.4s" attributeName="y" dur="1.2s" values="8.33;11.33;8.33" />
                <animate begin="spinner_oJFS.begin+0.4s" attributeName="width" dur="1.2s" values="7.33;1.33;7.33" />
                <animate begin="spinner_oJFS.begin+0.4s" attributeName="height" dur="1.2s" values="7.33;1.33;7.33" />
            </rect>
            <rect x="1" y="15.66" width="7.33" height="7.33">
                <animate begin="spinner_oJFS.begin+0.4s" attributeName="x" dur="1.2s" values="1;4;1" />
                <animate begin="spinner_oJFS.begin+0.4s" attributeName="y" dur="1.2s" values="15.66;18.66;15.66" />
                <animate begin="spinner_oJFS.begin+0.4s" attributeName="width" dur="1.2s" values="7.33;1.33;7.33" />
                <animate begin="spinner_oJFS.begin+0.4s" attributeName="height" dur="1.2s" values="7.33;1.33;7.33" />
            </rect>
            <rect x="15.66" y="8.33" width="7.33" height="7.33">
                <animate begin="spinner_oJFS.begin+0.6s" attributeName="x" dur="1.2s" values="15.66;18.66;15.66" />
                <animate begin="spinner_oJFS.begin+0.6s" attributeName="y" dur="1.2s" values="8.33;11.33;8.33" />
                <animate begin="spinner_oJFS.begin+0.6s" attributeName="width" dur="1.2s" values="7.33;1.33;7.33" />
                <animate begin="spinner_oJFS.begin+0.6s" attributeName="height" dur="1.2s" values="7.33;1.33;7.33" />
            </rect>
            <rect x="8.33" y="15.66" width="7.33" height="7.33">
                <animate begin="spinner_oJFS.begin+0.6s" attributeName="x" dur="1.2s" values="8.33;11.33;8.33" />
                <animate begin="spinner_oJFS.begin+0.6s" attributeName="y" dur="1.2s" values="15.66;18.66;15.66" />
                <animate begin="spinner_oJFS.begin+0.6s" attributeName="width" dur="1.2s" values="7.33;1.33;7.33" />
                <animate begin="spinner_oJFS.begin+0.6s" attributeName="height" dur="1.2s" values="7.33;1.33;7.33" />
            </rect>
            <rect x="15.66" y="15.66" width="7.33" height="7.33">
                <animate
                    id="spinner_5T1J"
                    begin="spinner_oJFS.begin+0.4s"
                    attributeName="x"
                    dur="1.2s"
                    values="15.66;18.66;15.66"
                />
                <animate begin="spinner_oJFS.begin+0.4s" attributeName="y" dur="1.2s" values="15.66;18.66;15.66" />
                <animate begin="spinner_oJFS.begin+0.4s" attributeName="width" dur="1.2s" values="7.33;1.33;7.33" />
                <animate begin="spinner_oJFS.begin+0.4s" attributeName="height" dur="1.2s" values="7.33;1.33;7.33" />
            </rect>
        </svg>
    );
};

export default LoadingBlocksWave;
