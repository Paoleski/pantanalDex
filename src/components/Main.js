import React, { useState } from 'react'
import Modal from './Modal'

const Main = ({animal}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
                        <div key={animal.id} >
                            <img className='grid-item' src={animal.imageUrl} alt={animal.name} onClick={() => setIsOpen(true)}></img>
                            <p onClick={() => setIsOpen(true)}>{animal.name}</p>
                            <Modal open={isOpen} onClose={() => setIsOpen(false)} children={animal} ></Modal>
                        </div>
                
    )
}

export default Main