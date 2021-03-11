import React from 'react'

// Contructing the album with props

export const Album = (props) => {
    return (
      <div className="album">
        <a href={props.albumLink} target='_blank' rel="noopener noreferrer">
          <div className="cover-container">
            <img src={props.cover} alt='album cover' className="cover" />
            
            <div className="icons-container">
              <img className="heart-icon" src="/icons/heart.svg" alt='' />
              <img className="play-icon" src="/icons/play.svg" alt='' />
              <img className="dots-icon" src="/icons/dots.svg" alt='' />
            </div>
          </div>
          </a>
          
          <div className="album-artist-container">
          <h2>
            <a className="album-link" href={props.albumLink} target='_blank' rel="noopener noreferrer">
              {props.name}
            </a>
          </h2>
          <h2 className="artist-name">
            <a className="artist-link" href={props.artistLink} target='_blank' rel="noopener noreferrer">
              {props.artists}
            </a>
          </h2>
        </div>
       </div>
    )
  }