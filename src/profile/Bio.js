import React from 'react'

const Bio = ({mybio, HandleData}) => {
    return (
        <div>
            <p>{mybio}</p>
            <button onClick={() => HandleData("Khailia amal")}>welcome</button>
        </div>
    )
}

export default Bio
Bio.defaultProps = {mybio: "inconnu"

};
