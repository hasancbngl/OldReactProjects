import React from 'react';

function ErrorBoundary(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default ErrorBoundary;