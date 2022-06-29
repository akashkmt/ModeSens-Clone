import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import Men from "./page/men";
import Women from './page/women';
import Beauty from './page/beauty';
import ItemDetails from './page/itemDetails';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" >
      <Routes>
        <Route path="/mens" element={<Men />} />
        <Route path='/womens' element={<Women />} />
        <Route path='/beauty' element={<Beauty />} />
        <Route path='/mens/:productId'  element={<ItemDetails />}/>
        <Route path='/womens/:productId'  element={<ItemDetails />}/>
        <Route path='/beauty/:productId'  element={<ItemDetails />}/>
      </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;
