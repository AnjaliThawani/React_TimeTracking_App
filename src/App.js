import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import LeftLogin from './LoginComponents/LeftLogin';
import RightLogin from './LoginComponents/RightLogin';
import { HStack } from '@chakra-ui/react'

function App() {

  return (
    <div className="App">
      <ChakraProvider >
        <HStack>
          <LeftLogin />
          <RightLogin />
        </HStack>
      </ChakraProvider>
    </div>
  );
}

export default App;
