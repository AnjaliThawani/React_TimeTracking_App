import React from 'react'
import style from './leftLoginStyle.module.css'
import { Image, Flex, ThemeProvider, Text } from '@chakra-ui/react'
import { newLogo, mainImage } from '../../assets/index.ts'
import "@fontsource/poppins";
import "@fontsource/montserrat"
import { loginTheme } from '../../config/theme/login-theme/login.theme.ts';

const LeftLogin = () => {
  return (
    <ThemeProvider theme={loginTheme}>
      <Flex className={style.sideImage} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Image
          style={{ marginBottom: '20px', marginTop: "15%" }}
          src={newLogo}
          height={30}
          alt='wisflux logo'
        />
        <Text layerStyle="loginHeading">Workday</Text>

        <Text layerStyle="loginSubHeading">
          Let’s Grow Together!
        </Text>

        <Image
          style={{ marginTop: "10%" }}
          src={mainImage}
          alt='wisflux logo new'
        />
      </Flex >
    </ThemeProvider >
  )
}

export default LeftLogin