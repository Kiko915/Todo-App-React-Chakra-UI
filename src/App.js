import React from 'react';
import Header from './components/presentational/Header';
import Task from './components/container/Task';
import { Box } from "@chakra-ui/react";

function App() {
    return (
        <Box className='App'>
           <Header /> 
           <Task />
        </Box> 
    )
}

export default App
