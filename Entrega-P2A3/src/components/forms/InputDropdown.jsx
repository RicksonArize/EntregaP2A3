import React from 'react'
import "../../../src-old/script"


const InputDropdown = ({}) => {

  return (
        <div className="inputForm">
            <input className="pointer" type="text" placeholder="Selecione a Categoria" readonly onfocus={dropdown1(0)} onblur={dropdown1(1)} />
            <div className="dropDown">
                <div className="listDropDown">
                    <div className="item" id="category-1" onmousedown={category(1)} >RPG</div>
                    <div className="item" id="category-2" onmousedown={category(2)} >Estratégia</div>
                    <div className="item" id="category-3" onmousedown={category(3)} >Indie</div>
                    <div className="item" id="category-4" onmousedown={category(4)} >FPS</div>
                    <div className="item" id="category-5" onmousedown={category(5)} >Outros</div>
                </div>
            </div>
        </div>

        
  )
}


export default InputDropdown