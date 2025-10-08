import React from 'react';
import useApps from '../../hooks/useApps';

const Apps = () => {
    const {apps} = useApps();
    console.log(apps)
    return (
        <div>
            <h1>This Is Apps Page</h1>
        </div>
    );
};

export default Apps;