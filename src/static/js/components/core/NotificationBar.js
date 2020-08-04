import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const NotificationBar = () => {
    const { error } = useSelector((state) => state.tools.error);

    return (
        <>
            {error && <p>{error}</p>}
        </>
    )
};

export default NotificationBar;
