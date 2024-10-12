import React from 'react';

const SectionTitle = ({ children, id }) => {
    return (
        <h1 id={id && id} className="text-3xl text-center font-semibold mb-10 text-fuchsia-700 dark:text-fuchsia-500">{children}</h1>
    );
}

export default SectionTitle;