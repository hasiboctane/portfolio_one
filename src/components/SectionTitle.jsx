import React from 'react';

const SectionTitle = ({children,id}) => {
    return (
        <h1 id={id && id} className="text-3xl font-semibold mb-5 text-fuchsia-700 dark:text-fuchsia-400">{children}</h1>
    );
}

export default SectionTitle;