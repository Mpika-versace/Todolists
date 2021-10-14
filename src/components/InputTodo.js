import React,{useRef} from 'react';
import { Form,Button,Card, InputGroup,FormControl} from 'react-bootstrap';

export default function InputTodo({text,setText,handleInput}) 
{
    const input = useRef('');
 
    return (
        <Card className="my-3">
            <Form className="m-3" onSubmit={handleInput} >
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                ref={input}
                onChange={()=>setText(input.current.value)}
                placeholder="Username"
                value={text}
                />
            </InputGroup>
                
                <Button variant="primary" type="submit"  >
                    Add item
                </Button>
            </Form>
        </Card>
    )
        
        
}
