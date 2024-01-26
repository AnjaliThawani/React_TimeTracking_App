import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import LeftLogin from './Login/Component/LeftLogin';
import RightLogin from './Login/Component/RightLogin';
import { HStack } from '@chakra-ui/react'
import { loginTheme } from './config/theme/login-theme/login.theme.ts';


function App() {

  return (
    <ChakraProvider>
      <HStack>
        <LeftLogin />
        <RightLogin />
      </HStack>
    </ChakraProvider>
  );
}

export default App;
