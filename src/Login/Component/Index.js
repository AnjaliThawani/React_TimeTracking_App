import React from 'react'
import LeftLogin from './LeftLogin';
import RightLogin from './RightLogin';
import { HStack } from '@chakra-ui/react'

function Index() {
  return (
    <HStack>
      <LeftLogin />
      <RightLogin />
    </HStack>
  )
}

export default Index