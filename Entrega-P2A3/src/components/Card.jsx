import React from 'react'
import cardImage from '../image/deadcells.png'

const Card = (props) => {
  return (
    <>
            <div className="card-game">
                <div className="card-img">
                    <img src={props.urlFoto} alt="" />
                </div>
                <div className="card-content">
                    <div className="card-game-name">
                        <p>{props.nomedoJogo}</p>
                    </div>
                    <div class="game-note"><p>{props.nota}</p></div>
                    <div className="game-category">
                        <p>{props.categoria}</p> 
                    </div>
                    <div className="game-platform">
                        <p>{props.plataforma}</p>
                    </div>
                </div>
            </div>
    </>

  )
}

export default Card