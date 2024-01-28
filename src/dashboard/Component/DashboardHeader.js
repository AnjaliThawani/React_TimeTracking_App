import React from 'react'
import { Flex, Box, Text, Heading, Button, Icon } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { IoIosAlarm } from "react-icons/io";
import "@fontsource/poppins";
import "@fontsource/plus-jakarta-sans";

function DashboardHeader() {
  return (
    <Flex style={{
      height: '214px',
      width: 'auto',
      color: 'white',
      marginTop: '50px',
      marginLeft: '50px',
      marginRight: '50px',
      borderRadius: '20px',
      flexDirection: 'row',
      backgroundColor: '#F2F2F2',
      position: 'relative'
    }} >
      <Flex style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', }}>
        <Heading style={{
          position: 'absolute',
          left: '65px',
          top: '40px',
          whiteSpace: 'nowrap',
          fontFamily: 'Poppins',
          fontSize: '24px',
          fontWeight: '600',
          lineHeight: '36px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#27104E',
        }}>Today’s Tasks</Heading>
        <Text style={{
          position: 'absolute',
          width: '387px',
          height: '27px',
          top: '80px',
          left: '66px',
          fontFamily: 'Poppins',
          fontSize: '18px',
          fontWeight: '300',
          lineHeight: '27px',
          letterSpacing: '0em',
          textAlign: 'left',
          color: '#27104E',
          whiteSpace: 'nowrap',


        }}>Check your today’s goals and project goals</Text>
        <Button variant='solid' style={{
          position: 'absolute',
          width: '213px',
          height: '40px',
          top: '143px',
          left: '66px',
          borderRadius: '10px',
          backgroundColor: '#424243',
          color: '#FFFFFF',
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '24px',
          letterSpacing: '0em',
          textAlign: 'center',
          paddingLeft: '10px'

        }}>
          Today’s plan <ArrowForwardIcon style={{ fontSize: '30px' }} />
        </Button>
      </Flex>

      <Flex style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        width: 'Hug (731.45px)',
        height: 'Hug (54.96px)',
        top: '80px',
        left: '559px',
        gap: '40px',
        color: 'black',

      }}>
        {/* 1st box */}
        <Box style={{
          width: '60px',
          height: '60px',
          borderRadius: '10px',
          border: '1px solid #F2F2F2',
          backgroundColor: 'white',
          mixBlendMode: 'luminosity',
          marginLeft: '150px'
        }} >
          <Icon as={IoIosAlarm} boxSize={8} mt={3} ml={3} />

        </Box>
        <Flex style={{
          display: 'flex', flexDirection: 'column', position: 'relative'
        }}>
          <Text style={{
            position: 'absolute',
            width: ' 90.11px',
            height: '52.96px',
            color: '#757575',
            top: '-25px',
            right: '-60px',
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '15px',
            letterSpacing: '0em',
            textAlign: 'left'


          }}>Total Task</Text>
          <Text style={{
            position: 'absolute',
            width: ' 90.11px',
            height: '52.96px',
            color: '#757575',
            top: '5px',
            right: '-65px',
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '26px',
            fontWeight: 'bold',
            lineHeight: '15px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#000000'


          }}>7</Text>

        </Flex>
        {/* 2nd box */}
        <Box style={{
          width: '60px',
          height: '60px',
          borderRadius: '10px',
          border: '1px solid #F2F2F2',
          backgroundColor: 'white',
          mixBlendMode: 'luminosity',
          marginLeft: '100px'
        }} >
          <Icon as={IoIosAlarm} boxSize={8} mt={3} ml={3} />

        </Box>
        <Flex style={{
          display: 'flex', flexDirection: 'column', position: 'relative'
        }}>
          <Text style={{
            position: 'absolute',
            width: ' 90.11px',
            height: '52.96px',
            color: '#757575',
            top: '-25px',
            right: '-60px',
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '15px',
            letterSpacing: '0em',
            textAlign: 'left'


          }}>Completed</Text>
          <Text style={{
            position: 'absolute',
            width: ' 90.11px',
            height: '52.96px',
            color: '#757575',
            top: '5px',
            right: '-65px',
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '26px',
            fontWeight: 'bold',
            lineHeight: '15px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#000000'


          }}>2</Text>

        </Flex>
        {/* 3rd Box */}
        <Box style={{
          width: '60px',
          height: '60px',
          borderRadius: '10px',
          border: '1px solid #F2F2F2',
          backgroundColor: 'white',
          mixBlendMode: 'luminosity',
          marginLeft: '100px'
        }} >
          <Icon as={IoIosAlarm} boxSize={8} mt={3} ml={3} />

        </Box>
        <Flex style={{
          display: 'flex', flexDirection: 'column', position: 'relative'
        }}>
          <Text style={{
            position: 'absolute',
            width: ' 90.11px',
            height: '52.96px',
            color: '#757575',
            top: '-25px',
            right: '-60px',
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '15px',
            letterSpacing: '0em',
            textAlign: 'left'


          }}>Pending</Text>
          <Text style={{
            position: 'absolute',
            width: ' 90.11px',
            height: '52.96px',
            color: '#757575',
            top: '5px',
            right: '-65px',
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '26px',
            fontWeight: 'bold',
            lineHeight: '15px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#000000'


          }}>5</Text>

        </Flex>
        {/* 4rd Box */}
        <Box style={{
          width: '60px',
          height: '60px',
          borderRadius: '10px',
          border: '1px solid #F2F2F2',
          backgroundColor: 'white',
          mixBlendMode: 'luminosity',
          marginLeft: '100px'
        }} >
          <Icon as={IoIosAlarm} boxSize={8} mt={3} ml={3} />

        </Box>
        <Flex style={{
          display: 'flex', flexDirection: 'column', position: 'relative'
        }}>
          <Text style={{
            position: 'absolute',
            width: ' 90.11px',
            height: '52.96px',
            color: '#757575',
            top: '-25px',
            right: '-60px',
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '15px',
            letterSpacing: '0em',
            textAlign: 'left'


          }}>Blocked</Text>
          <Text style={{
            position: 'absolute',
            width: ' 90.11px',
            height: '52.96px',
            color: '#757575',
            top: '5px',
            right: '-65px',
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '26px',
            fontWeight: 'bold',
            lineHeight: '15px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#000000'


          }}>0</Text>

        </Flex>


      </Flex>
    </Flex >
  )
}

export default DashboardHeader