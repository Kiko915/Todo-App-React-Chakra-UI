import React from 'react';
import Listitem from '../presentational/ListItem';
import { List, Heading, Center } from '@chakra-ui/layout';
import { Button, Badge } from '@chakra-ui/react';
import '../styles/custom.css';


function Lists({ data, delItem, openAlert }) {
    const { length } = data;
    return (
        <>
            {length !== 0 && <Badge>Your {length === 1 ? 'Task' : 'Tasks'}: {length}</Badge>}
            <List className="list" spacing={4} p={2} mt={5} border='1px solid #e2e2e2' boxShadow='inner' h='40vh' overflowY='scroll' >
                {length !== 0 ? (data.map((item, index) => {
                    const { text, id } = item;
                    return (
                    <Listitem 
                        key={id} 
                        text={text}
                        id={id}
                        count={index + 1}
                        delItem={delItem}
                    />
                )})) : <Center h='100%'><Heading as='h4' >No Task</Heading></Center>}
            </List>
            {length !== 0 && <Button colorScheme='red' mt={3} onClick={openAlert} >Clear All</Button>}
        </>
    )
}

export default Lists;
