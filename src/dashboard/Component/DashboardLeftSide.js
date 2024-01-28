import React from 'react'
import { Flex, Text, Image, HStack, Button, Center, Box, Icon } from '@chakra-ui/react'
import { progressImage } from '../../assets/index.ts'
import { GoDotFill } from "react-icons/go";
import "@fontsource/poppins";
function DashboardLeftSide() {
  const projects = [
    { name: 'Project1', completion: 42 },
    { name: 'Project2', completion: 92 },
    { name: 'Project3', completion: 90 },
    { name: 'Project4', completion: 20 },
    // Add more projects as needed
  ];

  return (
    <Flex style={{
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
      marginTop: '2%',
      marginRight: '77%',
      width: '323px',
      height: '493px',
      borderRadius: '10px',
      border: '2px solid #EAEAEA',
      alignItems: 'Center'
    }}>
      <Text style={{
        position: 'absolute',
        width: '178px',
        height: '27px',
        top: '20px',
        left: '20px',
        fontFamily: 'Poppins',
        fontSize: '18px',
        fontWeight: '600',
        lineHight: '27px',
        letterSpacing: '-0.01em',
        textAlign: 'left',


      }}> Project contribution</Text>
      <HStack>
        <Button style={{
          width: ' Hug(58px)',
          fontFamily: 'Poppins',
          fontSize: '12px',
          fontWeight: '100',
          height: 'Fixed(22px)',
          paddingLeft: '10px',
          paddingRight: '10px',
          borderRadius: '22.69px',
          gap: '10px',
          position: 'absolute',
          top: '60px',
          left: '10px',
          color: '#5A62B2'

        }} size='xs'>
          Today
        </Button>
        <Button style={{
          width: ' Hug(58px)',
          fontFamily: 'Poppins',
          height: 'Fixed(22px)',
          fontSize: '12px',
          fontWeight: '100',
          paddingLeft: '10px',
          paddingRight: '10px',
          borderRadius: '22.69px',
          gap: '10px',
          position: 'absolute',
          top: '60px',
          left: '70px',
          color: '#5A62B2'
        }} size='xs'>
          This week
        </Button>
        <Button style={{
          width: ' Hug(58px)',
          fontSize: '12px',
          fontWeight: '100',
          fontFamily: 'Poppins',
          height: 'Fixed(22px)',
          paddingLeft: '10px',
          paddingRight: '10px',
          borderRadius: '22.69px',
          gap: '10px',
          position: 'absolute',
          top: '60px',
          left: '150px',
          color: '#5A62B2'


        }} size='xs'>
          This month

        </Button>


      </HStack>
      <Image src={progressImage} style={{ position: 'absolute', top: '100px' }}></Image>

      <Box mt={310} mr={24}>
        {projects.map((project, index) => (
          <HStack key={index}>
            <Icon as={GoDotFill} color={'#4B7BE5'} boxSize={7}></Icon>
            <Text color={'#757575'}>{project.name}</Text>
            <Text color={'#757575'} ml={10}>{project.completion}%</Text>
          </HStack>
        ))}
      </Box>
    </ Flex >
  )
}

export default DashboardLeftSide