import React from 'react'

const Membre = (props) => {
    const name = props.nom
    console.log(props)

    return (
        <h2>Membre de ma famille : { name.toUpperCase()}</h2>
    )
}

export default Membre