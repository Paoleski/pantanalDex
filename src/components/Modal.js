import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
    position:'fixed',
    top:'10%',
    left:'5%',
    right:'5%',
    bottom:'10%',
    backgroundColor:'#FFF',
    zIndex: 1000,
    display:'flex',
    flexDirection:'column',
    overflow:'auto',
}

const IMG_STYLES = {
    width:'100%',
    height:'70%',
    objectFit:'cover'
}

const OVERLAY_STYLES = {
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0, .7)',
    zIndex:1000
}

export default function Modal({open, children, onClose}) {
    if (!open) {
        return null;
    }
    console.log(children);

    return ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLES} onClick={onClose}/>
        <div style={MODAL_STYLES} onClick={onClose}>
            <img style={IMG_STYLES} src={children.imageUrl} alt={children.name}></img>
            <div className="info">
                <div className="name-container">
                    <h1>Nome: {children.name}</h1>
                </div>
                <div className="right-column">
                    <p>Nome Científico: {children.scientificName}</p>
                    <p>Peso: {children.weight}kg</p>
                    <p>Altura: {children.height}cm</p>
                    
                </div>
                <div className="left-column">
                    <p>Tipo: {children.type}</p>
                    <p>Dieta: {children.diet}</p>
                    <p>Estado de conservaçao: {children.threat}</p>
                    <p>Expectativa de vida: {children.lifeSpan} anos</p>
                </div>
            </div>
        </div>
        </>,
        document.getElementById('portal')
    )
}
