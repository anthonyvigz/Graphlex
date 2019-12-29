import React from 'react';

const PhotoCard = ({photo}) => {
    const { index, src, name } = photo;

    return (
        <div id={`card-${index}`} className="card">
            <img src={src} alt={name} width="326px" />
            <h2>{name}</h2>
        </div>
    )
}

export default PhotoCard;