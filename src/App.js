import React,{useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import * as uuid from 'uuid'
export default function App() 
{
    const [list, setList] = useState([]);
    const [text, setText] = useState('');
    const removeList=()=>
    {
        setList([]);
    }
    const handleInput=(e)=>
    {
        console.log(text)
        if (text.length===0) 
        {
            return;
        }
        e.preventDefault();
        const items=
        {
            item:text,
            id:uuid.v4(),
            editItem:false
        }
        setList([...list,items])
        console.log(items);
        setText("")
    }
    
    return (
        <Container>
            <Row>
                <Col md={8} >
                    <InputTodo text={text} setText={setText} handleInput={handleInput}/>
                    <TodoList lists={list} setList={setList} removeList={removeList} />
                </Col>
            </Row>
           
        </Container>
    )
}
