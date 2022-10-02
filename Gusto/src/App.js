import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Divider,
} from '@chakra-ui/react';
import Upper from './Components/Upper';
import Index from './Components/Index';

import { BrowserRouter } from 'react-router-dom';

import AllRoutes from './Allpages/AllRoutes';

function App() {
  return (
   
  <div>
    
    <AllRoutes></AllRoutes>
   
    
    
  </div>

  )
}

export default App;
