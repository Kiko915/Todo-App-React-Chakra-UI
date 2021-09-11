import React from 'react';
import { Box, Heading, Center } from '@chakra-ui/react';

export default function Header() {
    return (
        <Box className='app-header' as="nav" p={3} bg='#1e90ff' w="100%">
            <Center color='white' h='100%'>
                <Heading as='h3'>Todo App</Heading>
            </Center>
        </Box>
    )
}
