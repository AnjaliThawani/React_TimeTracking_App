import { Image, Flex } from '@chakra-ui/react'
import React from 'react'
import style from './leftLoginStyle.module.css'
import { newLogo, mainImage } from '../Assets/index.ts'
import "@fontsource/poppins";
import "@fontsource/montserrat"

const LeftLogin = () => {
  return (
    <Flex className={style.sideImage} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Image
        style={{ marginBottom: '20px', marginTop: "15%" }}
        src={newLogo}
        height={30}
        alt='wisflux logo'
      />

      <h1 style={{
        width: '303px',
        height: '50px',
        color: '#FFFFFF',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '64px',
        fontWeight: '800',
        lineHeight: '90px',
        marginTop: '10px',
        letterSpacing: '0em',
      }}>Workday</h1>

      <p style={{
        width: '242px',
        height: '36px',
        color: '#FFFFFF',
        fontFamily: 'poppins',
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '55px',
        marginTop: '20px'
      }}>
        Let’s Grow Together!
      </p>

      <Image
        style={{ marginTop: "10%" }}
        src={mainImage}

        alt='wisflux logo new'
      />
    </Flex >
  )
}

export default LeftLogin