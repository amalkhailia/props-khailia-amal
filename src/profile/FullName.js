import React from 'react'
import propTypes from 'prop-types';


const FullName = ({name, children}) => {
    return (
        <div>
            {children}
            <h1> {name} </h1>
            
        </div>
    )
}

export default FullName
FullName.defaultProps = {name: "inconnu"};
FullName.propTypes={
    name:propTypes.string
}


