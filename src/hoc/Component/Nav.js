import React from 'react'
import { Flex, Spacer, Button, Box, Text, Avatar } from '@chakra-ui/react'
import "@fontsource/prompt";
import "@fontsource/poppins";
function Nav() {
  return (
    <Flex borderBottom={'2px solid #F2F2F2'} height={'60px'}>
      <Text style={{
        width: '86px',
        height: '30px',
        marginTop: '15px',
        marginLeft: '50px',
        fontFamily: 'Prompt',
        fontSize: '20px',
        fontWeight: '800',
        lineHeight: '30px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: '#212121'

      }} >
        Workday
      </Text>
      <Spacer />
      <Text style={{
        Font: 'Poppins',
        Weight: '600',
        LineHeight: '21px',
        color: '#212121',
        marginTop: '15px',
        fontWeight: '800',
        marginRight: '45px'

      }}>
        <a href="www.google.com" >Dashboard</a>
      </Text>
      <Text style={{
        Font: 'Poppins',
        Weight: '600',
        LineHeight: '21px',
        color: '#212121',
        marginTop: '15px',
        fontWeight: '500',
        marginRight: '50px'
      }}>
        <a href="www.google.com">Reports</a>
      </Text>
      <Spacer />
      <Box mr={'10'} >
        <Button variant='outline' style={{
          marginTop: '10px',
          marginRight: '40px',
          colorScheme: '#F2F2F2',
          border: '2px solid #F2F2F2'
        }}>
          Break
        </Button>

        <Avatar mt={'1'} name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />

      </Box>
    </Flex >
  )
}

export default Nav