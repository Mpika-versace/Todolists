import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaTrashAlt,FaPencilAlt } from "react-icons/fa";
const spancss=
{
    display:"inline-block",
    padding:'.5rem',
    cursor:'pointer',
    
}

export default function TodoItem({item,id,removeItem}) 
{
    
    return (
        <ListGroup.Item className="my-3" style={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
            
            {item} 
            <div className="delete" >
                <span onClick={()=>removeItem(id)} style={spancss}>
                    <FaTrashAlt />
                </span>
                <span style={spancss}><FaPencilAlt /></span>
                
            </div>
        </ListGroup.Item>
    )
}
