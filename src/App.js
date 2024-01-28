import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Index from './dashboard/Component/Index.js'
import ContentWrapper from './hoc/Component/ContentWrapper.js';
import DashboardHeader from './dashboard/Component/DashboardHeader.js';


function App() {

  return (
    <ChakraProvider>
      <Index />


    </ChakraProvider>
  );
}

export default App;
