import React from 'react';
import { Divider, ListItem, Box } from '@chakra-ui/layout';
import { Text, CloseButton } from '@chakra-ui/react';
// import { CloseIcon } from '@chakra-ui/icons';
import '../styles/custom.css';

export default function Listitem({ text, id, count, delItem }) {
    return (
        <>
            <ListItem id={id} d='flex' flexDirection='row' position='relative' alignItems='center' className='listItem' >
                <Box mr={2} bg='#000' color='#fff' borderRadius='5px' py={2} px={3} >
                    <strong>{count}</strong>
                </Box>
                <Text fontSize='xl' >{text}</Text>
                <CloseButton position='absolute' className='close-btn' right='3px' _hover={{ background: '#f05959', color: '#fff' }}  size='lg' onClick={({ target: { parentElement: { id } } }) => delItem(id)} />
            </ListItem>
            <Divider orientation='horizontal' />
        </>
    )
}
