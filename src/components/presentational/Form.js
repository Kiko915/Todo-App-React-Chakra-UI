import React from 'react';
import { Box, FormControl, FormLabel, Input, IconButton, InputGroup, InputRightElement } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export default function Form({ values, changerState, handleSubmit, handleKeyPress }) {
    return (
        <Box p={3} className="app-form">
            <FormControl id="tasks">
                <FormLabel className="app-form-label">Enter Tasks</FormLabel>
                    <InputGroup>
                        <Input placeholder="Enter tasks here..." type='text' value={values} onChange={({ target: { value } }) => changerState(value)} onKeyPress={handleKeyPress} />
                        <InputRightElement>
                            {values && <IconButton bg='#1e90ff' color='#fff' onClick={handleSubmit} size='sm' icon={<AddIcon />} _hover={{ background: '#1479de' }} />}
                        </InputRightElement>
                    </InputGroup>    
            </FormControl>
        </Box>
    )
}
