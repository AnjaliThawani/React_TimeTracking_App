import {
  Button,
  Flex,
  FormControl,
  Input,
} from '@chakra-ui/react'
import React, { Component } from 'react'
import "@fontsource/poppins";
import "@fontsource/montserrat"

class RightLogin extends Component {
  render() {
    return (
      <Flex style={{ backgroundColor: '#FFFFFF', width: 'full', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{
          width: '254px',
          height: '50px',
          top: '263px',
          left: '843px',
          fontFamily: 'Montserrat',
          fontSize: '32px',
          fontWeight: '500',
          lineHeight: '50px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#19224C',
          alignItems: 'Center',
          marginTop: '-5%'
        }}>Welcome Back!</h1>

        <h1 style={{
          width: '89px',
          height: '20px',
          top: '377px',
          left: '843px',
          fontFamily: 'Montserrat',
          fontSize: '30px',
          fontWeight: '800',
          lineHeight: '20px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#19224C',
          alignItems: 'Center',
          paddingTop: '10%',
          marginRight: '30%'
        }}>Login</h1>

        <FormControl style={{
          marginTop: '10%',
          width: '500px',
          alignItems: 'Center',
          marginLeft: '55%',
          fontFamily: 'montserrat'
        }} >
          <Input mb="6" variant='flushed' placeholder='Email' />
          <Input variant='flushed' placeholder='Password' />
        </FormControl>

        <a href="www.google.com" style={{
          width: '144px',
          height: '20px',
          top: '573px',
          left: '1120px',
          fontFamily: 'Montserrat',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '20px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#909090',
          alignItems: 'Center',
          paddingTop: '1.5%',
          marginLeft: '125%'
        }}>Forgot password?</a>

        <Button
          alignItems='center'
          backgroundColor={'#212E66'}
          marginTop={'5%'}
          marginLeft={'55%'}
          colorScheme='Facebook'
          size='lg'
          w='500px'
        >        Login
        </Button>
      </Flex >

    )
  }
}

export default RightLogin