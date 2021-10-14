import React from 'react';
import { ListGroup,Button } from 'react-bootstrap';
import TodoItem from './TodoItem';


export default function TodoList({lists,removeList,setList}) 
{
    const removeItem=(id)=>
    {
        setList(lists.filter(list=>list.id!==id))
    }
    return (
        <ListGroup>
            
            <h3 className="text-capitalize text-center">todo list</h3>
            {lists.map(({item,id})=><TodoItem key={id} item={item} id={id}  removeItem={removeItem}/>)}
           
            
            <Button variant="danger" onClick={removeList}> Clear List</Button>
        </ListGroup>
    )
}
