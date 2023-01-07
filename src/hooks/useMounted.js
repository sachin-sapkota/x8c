import { useEffect, useRef } from 'react';

const useMounted = () => {
    const isMounted = useRef(false);

    useEffect(
        () => () => {
            isMounted.current = true;
        },
        []
    );

    return isMounted;
};

export default useMounted;
