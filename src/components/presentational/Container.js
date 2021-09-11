import React from 'react';
import { Box, Container } from '@chakra-ui/layout';

export default function Containers({ children }) {
    return (
        <Container h='100%' >
            <Box as='section' bg='#fff' p={3} borderRadius={3} boxShadow='base' mt={10} >
                {children}
            </Box>
        </Container>
    )
}
