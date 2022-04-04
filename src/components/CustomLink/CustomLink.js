import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    textDecoration: 'none',
                    color: match ? 'red' : 'black',
                    marginRight: '20px',
                    padding: '10px',
                    borderBottom: match ? '2px solid red' : '1px solid gray'
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;