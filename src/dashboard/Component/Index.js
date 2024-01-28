import React from 'react'
import ContentWrapper from '../../hoc/Component/ContentWrapper'
import DashboardHeader from './DashboardHeader'
import { HStack, VStack } from '@chakra-ui/react'
import DashboardLeftSide from './DashboardLeftSide'

function Index() {
  return (
    <ContentWrapper>
      <DashboardHeader />
      <VStack>
        <DashboardLeftSide />
      </VStack>
    </ContentWrapper>
  )
}

export default Index