import React, {useState} from 'react'
import BoxForm from './BoxForm'
import Box from './Box'
import {v4 as uuid} from 'uuid'
import './BoxList.css'

const BoxList = () => {
    const INITIAL_STATE = [];
    const [boxes, setBoxes] = useState(INITIAL_STATE)
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    }
    const handleRemove = (e) => {
        const id = e.target.parentNode.id
        const newBoxes = boxes.filter((box) => box.id !== id)
        setBoxes(newBoxes)
    }
    return(
        <div className="Boxlist">
            <div className="Boxlist-form-container">
                <BoxForm addBox={addBox}/>
            </div>
            <div className="Boxlist-box-container">
                {boxes.map(({id, color, width, height}) => <Box id={id} color={color} width={width} height={height} key={id} handleRemove={handleRemove} />)}
            </div>
        </div>
    )
}

export default BoxList